package main

import (
	"embed"
	"io"
	"io/fs"
	"log"
	"mime"
	"net/http"
	"os"
	"path"
	"strconv"
	"strings"
)

//go:embed public
var buildFS embed.FS

func init() {
	// Register standard MIME types to make sure minimal OS environments (like alpine/scratch)
	// serve JS, CSS, and other files with correct Content-Type headers.
	mime.AddExtensionType(".js", "application/javascript; charset=utf-8")
	mime.AddExtensionType(".css", "text/css; charset=utf-8")
	mime.AddExtensionType(".html", "text/html; charset=utf-8")
	mime.AddExtensionType(".svg", "image/svg+xml")
	mime.AddExtensionType(".png", "image/png")
	mime.AddExtensionType(".jpg", "image/jpeg")
	mime.AddExtensionType(".jpeg", "image/jpeg")
	mime.AddExtensionType(".ico", "image/x-icon")
	mime.AddExtensionType(".json", "application/json; charset=utf-8")
	mime.AddExtensionType(".txt", "text/plain; charset=utf-8")
	mime.AddExtensionType(".woff", "font/woff")
	mime.AddExtensionType(".woff2", "font/woff2")
	mime.AddExtensionType(".ttf", "font/ttf")
	mime.AddExtensionType(".otf", "font/otf")
}

func main() {
	// Root the filesystem at public
	publicFS, err := fs.Sub(buildFS, "public")
	if err != nil {
		log.Fatal(err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Clean the path to prevent directory traversal
		urlPath := path.Clean(r.URL.Path)
		if urlPath == "." {
			urlPath = "/"
		}

		// Normalize trailing slash (except for root)
		if urlPath != "/" && strings.HasSuffix(urlPath, "/") {
			urlPath = strings.TrimSuffix(urlPath, "/")
		}

		// Try to serve the exact path first
		filePath := strings.TrimPrefix(urlPath, "/")
		if filePath == "" {
			filePath = "index.html"
		}

		// Check if it exists as-is (e.g. assets, favicon, index.html)
		if fileExists(publicFS, filePath) {
			serveFile(publicFS, w, r, filePath, http.StatusOK)
			return
		}

		// Check if it's a clean URL without extension, and if <path>.html exists
		if path.Ext(filePath) == "" {
			htmlPath := filePath + ".html"
			if fileExists(publicFS, htmlPath) {
				serveFile(publicFS, w, r, htmlPath, http.StatusOK)
				return
			}
		}

		// Fallback to +not-found.html
		if fileExists(publicFS, "+not-found.html") {
			serveFile(publicFS, w, r, "+not-found.html", http.StatusNotFound)
			return
		}

		// Ultimate fallback
		http.Error(w, "404 Not Found", http.StatusNotFound)
	})

	log.Printf("Server starting on port %s...", port)
	if err := http.ListenAndServe(":"+port, handler); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func fileExists(fsys fs.FS, name string) bool {
	f, err := fsys.Open(name)
	if err != nil {
		return false
	}
	defer f.Close()

	stat, err := f.Stat()
	if err != nil {
		return false
	}
	return !stat.IsDir()
}

func serveFile(fsys fs.FS, w http.ResponseWriter, r *http.Request, name string, statusCode int) {
	f, err := fsys.Open(name)
	if err != nil {
		http.Error(w, "Not Found", http.StatusNotFound)
		return
	}
	defer f.Close()

	stat, err := f.Stat()
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	contentType := mime.TypeByExtension(path.Ext(name))
	if contentType == "" {
		contentType = "application/octet-stream"
	}

	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Content-Length", strconv.FormatInt(stat.Size(), 10))
	w.WriteHeader(statusCode)
	io.Copy(w, f)
}

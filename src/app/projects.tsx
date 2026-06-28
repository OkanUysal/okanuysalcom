import React from 'react';
import { ScrollView, StyleSheet, Platform, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/Card';
import { SkillBadge } from '@/components/SkillBadge';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolioData';
import { Spacing, MaxContentWidth } from '@/constants/theme';

export default function ProjectsScreen() {
  const handleGithubLink = (url: string) => {
    openBrowserAsync(url);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <FontAwesome name="code" size={32} color="#fca311" style={{ marginRight: 12 }} />
              <ThemedText type="subtitle" style={styles.titleText}>
                Projects
              </ThemedText>
            </View>
            <ThemedText type="default" themeColor="textSecondary" style={styles.introText}>
              A showcase of open source contributions, applications, game development, and code concepts.
            </ThemedText>
          </View>

          {/* Projects List */}
          <View style={styles.section}>
            <View style={styles.gridContainer}>
              {portfolioData.projects.map((project, index) => (
                <Card key={index} style={styles.projectCard}>
                  <View style={styles.projectHeader}>
                    <FontAwesome name="folder-open-o" size={20} color="#fca311" style={{ marginRight: 8 }} />
                    <ThemedText type="smallBold" style={styles.projectName}>
                      {project.name}
                    </ThemedText>
                  </View>

                  <ThemedText type="default" themeColor="textSecondary" style={styles.projectDescription}>
                    {project.description}
                  </ThemedText>

                  {/* Project Tags */}
                  <View style={styles.tagsContainer}>
                    {project.tags.map((tag) => (
                      <SkillBadge key={tag} label={tag} color="#6366F1" />
                    ))}
                  </View>

                  {project.githubLink && (
                    <Pressable
                      onPress={() => handleGithubLink(project.githubLink!)}
                      style={({ pressed }) => [
                        styles.projectLinkButton,
                        { opacity: pressed ? 0.7 : 1.0 },
                      ]}
                    >
                      <FontAwesome name="github" size={14} color="#ffffff" style={{ marginRight: 6 }} />
                      <ThemedText style={styles.projectLinkText}>Repository</ThemedText>
                    </Pressable>
                  )}
                </Card>
              ))}
            </View>
          </View>

          {/* Publications Section */}
          <View style={styles.section}>
            <View style={styles.titleRow}>
              <FontAwesome name="book" size={24} color="#fca311" style={{ marginRight: 10 }} />
              <ThemedText type="smallBold" style={styles.sectionTitle}>
                Publications
              </ThemedText>
            </View>
            <Card style={styles.publicationCard} leftBorderColor="#10B981">
              <ThemedText type="default" themeColor="textSecondary" style={styles.publicationText}>
                &ldquo;If I have a publication one day, I will share it here :)&rdquo;
              </ThemedText>
            </Card>
          </View>

          <Footer />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: Platform.select({ web: 100, default: Spacing.two }),
    paddingBottom: Platform.select({ ios: 80, android: 80, default: Spacing.four }),
  },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
  },
  headerSection: {
    marginVertical: Spacing.four,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.two,
  },
  titleText: {
    fontWeight: '900',
    fontSize: 32,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
  },
  section: {
    marginTop: Spacing.three,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.three,
  },
  projectCard: {
    flexBasis: Platform.select({ web: '48%', default: '100%' }),
    flexGrow: 1,
    padding: Spacing.three,
    justifyContent: 'space-between',
    minHeight: 180,
  },
  projectHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.two,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '800',
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: Spacing.two,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.half,
    marginBottom: Spacing.two,
  },
  projectLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  projectLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ffffff',
  },
  publicationCard: {
    padding: Spacing.three,
    marginTop: Spacing.two,
  },
  publicationText: {
    fontStyle: 'italic',
    fontSize: 14.5,
  },
});

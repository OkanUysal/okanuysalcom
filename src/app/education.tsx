import React from 'react';
import { ScrollView, StyleSheet, Platform, View, Image, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolioData';
import { Spacing, MaxContentWidth } from '@/constants/theme';

export default function EducationScreen() {
  const getLogoSource = (logoPath: string) => {
    switch (logoPath) {
      case 'hacettepe.png':
        return require('@/assets/images/hacettepe.png');
      case 'coursera_logo.png':
        return require('@/assets/images/coursera_logo.png');
      case 'google_logo.png':
        return require('@/assets/images/google_logo.png');
      case 'bilgem.jpg':
        return require('@/assets/images/bilgem.jpg');
      default:
        return require('@/assets/images/codeInLogo.png');
    }
  };

  const handleVisit = (url: string) => {
    if (url && url !== '#') {
      openBrowserAsync(url);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <FontAwesome name="graduation-cap" size={32} color="#fca311" style={{ marginRight: 12 }} />
              <ThemedText type="subtitle" style={styles.titleText}>
                Education
              </ThemedText>
            </View>
            <ThemedText type="default" themeColor="textSecondary" style={styles.introText}>
              Academic qualifications and professional development training.
            </ThemedText>
          </View>

          {/* Degrees Received */}
          <View style={styles.section}>
            <ThemedText type="smallBold" style={styles.sectionHeading}>
              Degrees Received
            </ThemedText>
            {portfolioData.degrees.map((degree, index) => (
              <Card key={index} style={styles.card} leftBorderColor="#fca311">
                <View style={styles.rowLayout}>
                  {degree.logoPath !== '' && (
                    <View style={styles.universityLogoContainer}>
                      <Image source={getLogoSource(degree.logoPath)} style={styles.uniLogo} resizeMode="contain" />
                    </View>
                  )}
                  <View style={styles.detailsContainer}>
                    <ThemedText type="smallBold" style={styles.degreeTitle}>
                      {degree.title}
                    </ThemedText>
                    <ThemedText type="default" style={styles.degreeSubtitle}>
                      {degree.subtitle}
                    </ThemedText>
                    <View style={styles.metaRow}>
                      <FontAwesome name="calendar" size={12} color="#B0B4BA" style={{ marginRight: 4 }} />
                      <ThemedText type="small" themeColor="textSecondary" style={{ marginRight: 16 }}>
                        {degree.duration}
                      </ThemedText>
                      <FontAwesome name="star" size={12} color="#fca311" style={{ marginRight: 4 }} />
                      <ThemedText type="small" themeColor="textSecondary">
                        GPA: {degree.gpa}
                      </ThemedText>
                    </View>

                    <View style={styles.descriptions}>
                      {degree.descriptions.map((desc, dIndex) => (
                        <ThemedText key={dIndex} type="default" themeColor="textSecondary" style={styles.bulletText}>
                          {desc}
                        </ThemedText>
                      ))}
                    </View>

                    {degree.websiteLink && (
                      <Pressable
                        onPress={() => handleVisit(degree.websiteLink)}
                        style={({ pressed }) => [
                          styles.linkButton,
                          { opacity: pressed ? 0.7 : 1.0 },
                        ]}
                      >
                        <FontAwesome name="globe" size={14} color="#fca311" style={{ marginRight: 6 }} />
                        <ThemedText style={styles.linkButtonText}>Visit University Site</ThemedText>
                      </Pressable>
                    )}
                  </View>
                </View>
              </Card>
            ))}
          </View>

          {/* Certifications */}
          <View style={styles.section}>
            <ThemedText type="smallBold" style={styles.sectionHeading}>
              Certifications & Qualifications
            </ThemedText>
            <View style={styles.gridContainer}>
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} style={styles.certCard}>
                  <View style={styles.certHeader}>
                    {cert.logoPath !== '' && (
                      <View style={styles.certLogoContainer}>
                        <Image source={getLogoSource(cert.logoPath)} style={styles.certLogo} resizeMode="contain" />
                      </View>
                    )}
                    <View style={styles.certHeaderDetails}>
                      <ThemedText type="smallBold" style={styles.certTitle}>
                        {cert.title}
                      </ThemedText>
                      <ThemedText type="small" themeColor="textSecondary">
                        {cert.subtitle}
                      </ThemedText>
                    </View>
                  </View>
                  
                  {cert.certificateLink && cert.certificateLink !== '#' && (
                    <Pressable
                      onPress={() => handleVisit(cert.certificateLink)}
                      style={({ pressed }) => [
                        styles.certLinkButton,
                        { opacity: pressed ? 0.7 : 1.0 },
                      ]}
                    >
                      <FontAwesome name="certificate" size={12} color="#fca311" style={{ marginRight: 6 }} />
                      <ThemedText style={styles.certLinkButtonText}>View Credential</ThemedText>
                    </Pressable>
                  )}
                </Card>
              ))}
            </View>
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
    marginTop: Spacing.four,
  },
  sectionHeading: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: Spacing.three,
  },
  card: {
    padding: Spacing.three,
  },
  rowLayout: {
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    gap: Spacing.three,
  },
  universityLogoContainer: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    padding: Spacing.one,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  uniLogo: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
  },
  degreeTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  degreeSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fca311',
    marginTop: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  descriptions: {
    marginTop: Spacing.two,
    gap: Spacing.one,
  },
  bulletText: {
    fontSize: 14,
    lineHeight: 20,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: Spacing.three,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(252, 163, 17, 0.3)',
    backgroundColor: 'rgba(252, 163, 17, 0.05)',
  },
  linkButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#fca311',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  certCard: {
    flexBasis: Platform.select({ web: '48%', default: '100%' }),
    flexGrow: 1,
    padding: Spacing.three,
  },
  certHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  certLogoContainer: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  certLogo: {
    width: '100%',
    height: '100%',
  },
  certHeaderDetails: {
    flex: 1,
  },
  certTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  certLinkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.two,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(252, 163, 17, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(252, 163, 17, 0.2)',
  },
  certLinkButtonText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fca311',
  },
});

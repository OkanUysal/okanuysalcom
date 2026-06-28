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

export default function ExperienceScreen() {
  const getLogoSource = (logoPath: string) => {
    switch (logoPath) {
      case 'bilgem.jpg':
        return require('@/assets/images/bilgem.jpg');
      case 'huawei.png':
        return require('@/assets/images/huawei.png');
      case 'self.jpeg':
      default:
        return require('@/assets/images/self.jpeg');
    }
  };

  const handleVisit = (url: string) => {
    openBrowserAsync(url);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <FontAwesome name="briefcase" size={32} color="#fca311" style={{ marginRight: 12 }} />
              <ThemedText type="subtitle" style={styles.titleText}>
                Experience
              </ThemedText>
            </View>
            <ThemedText type="default" themeColor="textSecondary" style={styles.introText}>
              Over 10 years of software engineering and leadership experience spanning workflows, RTOS, microservices, and automation pipelines.
            </ThemedText>
          </View>

          {/* Experience List */}
          <View style={styles.timeline}>
            {portfolioData.experienceSections[0].experiences.map((exp, index) => (
              <View key={index} style={styles.timelineItem}>
                
                {/* Timeline dot & line */}
                <View style={styles.timelineConnector}>
                  <View style={[styles.timelineDot, { backgroundColor: exp.color }]} />
                  {index < portfolioData.experienceSections[0].experiences.length - 1 && (
                    <View style={styles.timelineLine} />
                  )}
                </View>

                {/* Experience Card */}
                <Card style={styles.card} leftBorderColor={exp.color}>
                  <View style={styles.cardHeader}>
                    <View style={styles.logoContainer}>
                      <Image source={getLogoSource(exp.logoPath)} style={styles.logo} resizeMode="contain" />
                    </View>
                    <View style={styles.headerDetails}>
                      <ThemedText type="smallBold" style={styles.jobTitle}>
                        {exp.title}
                      </ThemedText>
                      <ThemedText type="default" style={styles.companyText}>
                        {exp.company}
                      </ThemedText>
                      <View style={styles.metaRow}>
                        <FontAwesome name="calendar" size={12} color="#B0B4BA" style={{ marginRight: 4 }} />
                        <ThemedText type="small" themeColor="textSecondary" style={{ marginRight: 16 }}>
                          {exp.duration}
                        </ThemedText>
                        <FontAwesome name="map-marker" size={12} color="#B0B4BA" style={{ marginRight: 4 }} />
                        <ThemedText type="small" themeColor="textSecondary">
                          {exp.location}
                        </ThemedText>
                      </View>
                    </View>
                  </View>

                  {/* Bullet Points */}
                  <View style={styles.descriptionContainer}>
                    {exp.description.map((point, pIndex) => (
                      <View key={pIndex} style={styles.bulletRow}>
                        <ThemedText style={styles.bullet}>⚡</ThemedText>
                        <ThemedText type="default" themeColor="textSecondary" style={styles.bulletText}>
                          {point}
                        </ThemedText>
                      </View>
                    ))}
                  </View>

                  {/* Visit Link */}
                  {exp.companyUrl && (
                    <Pressable
                      onPress={() => handleVisit(exp.companyUrl)}
                      style={({ pressed }) => [
                        styles.visitButton,
                        { backgroundColor: `${exp.color}15`, opacity: pressed ? 0.7 : 1.0 },
                      ]}
                    >
                      <FontAwesome name="external-link" size={14} color={exp.color} style={{ marginRight: 6 }} />
                      <ThemedText style={[styles.visitButtonText, { color: exp.color }]}>
                        Visit Company Portal
                      </ThemedText>
                    </Pressable>
                  )}
                </Card>
              </View>
            ))}
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
  timeline: {
    marginTop: Spacing.two,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  timelineConnector: {
    alignItems: 'center',
    width: 20,
    marginTop: 20,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    zIndex: 2,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.08)',
    marginTop: 4,
  },
  card: {
    flex: 1,
    marginBottom: Spacing.four,
  },
  cardHeader: {
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    alignItems: Platform.select({ web: 'center', default: 'flex-start' }),
    gap: Spacing.three,
  },
  logoContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    padding: Spacing.one,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  headerDetails: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '800',
  },
  companyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fca311',
    marginVertical: 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 2,
  },
  descriptionContainer: {
    marginTop: Spacing.three,
    gap: Spacing.two,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.one,
  },
  bullet: {
    fontSize: 14,
    marginTop: 2,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  visitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: Spacing.three,
  },
  visitButtonText: {
    fontWeight: '700',
    fontSize: 13,
  },
});

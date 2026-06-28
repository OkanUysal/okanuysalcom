import React from 'react';
import { ScrollView, StyleSheet, Platform, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { openBrowserAsync } from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/Card';
import { SkillBadge } from '@/components/SkillBadge';
import { SocialMediaStrip } from '@/components/SocialMediaStrip';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolioData';
import { Spacing, MaxContentWidth } from '@/constants/theme';

export default function HomeScreen() {
  const handleGithubStar = () => {
    openBrowserAsync(portfolioData.greeting.portfolioRepository);
  };

  const handleResumePress = () => {
    openBrowserAsync(portfolioData.greeting.resumeLink);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Hero Section */}
          <View style={styles.heroContainer}>
            <View style={styles.heroTextContainer}>
              <ThemedText type="title" style={styles.nameText}>
                {portfolioData.greeting.title}
              </ThemedText>
              <ThemedText type="smallBold" style={styles.nicknameText}>
                ( {portfolioData.greeting.nickname} )
              </ThemedText>
              <ThemedText type="default" themeColor="textSecondary" style={styles.bioText}>
                {portfolioData.greeting.subTitle}
              </ThemedText>
              
              <SocialMediaStrip />

              <View style={styles.buttonRow}>
                <Pressable onPress={handleGithubStar} style={[styles.primaryButton, { backgroundColor: '#fca311' }]}>
                  <FontAwesome name="star" size={16} color="#000000" style={{ marginRight: 8 }} />
                  <ThemedText style={styles.primaryButtonText}>Star Me On Github</ThemedText>
                </Pressable>
                
                <Pressable onPress={handleResumePress} style={styles.secondaryButton}>
                  <FontAwesome name="file-pdf-o" size={16} color="#ffffff" style={{ marginRight: 8 }} />
                  <ThemedText style={styles.secondaryButtonText}>See My Resume</ThemedText>
                </Pressable>
              </View>
            </View>
          </View>

          {/* What I Do Section */}
          <View style={styles.skillsSection}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              What I Do?
            </ThemedText>
            
            <Card style={styles.skillCard} leftBorderColor="#6366F1">
              <View style={styles.skillHeader}>
                <FontAwesome name="code" size={24} color="#6366F1" style={styles.skillIcon} />
                <ThemedText type="smallBold" style={styles.skillTitle}>Languages</ThemedText>
              </View>
              <View style={styles.badgeContainer}>
                {portfolioData.skills.languages.map((lang) => (
                  <SkillBadge key={lang} label={lang} color="#6366F1" />
                ))}
              </View>
            </Card>

            <Card style={styles.skillCard} leftBorderColor="#fca311">
              <View style={styles.skillHeader}>
                <FontAwesome name="cubes" size={24} color="#fca311" style={styles.skillIcon} />
                <ThemedText type="smallBold" style={styles.skillTitle}>Tech Stack & Frameworks</ThemedText>
              </View>
              <View style={styles.badgeContainer}>
                {portfolioData.skills.techStack.map((tech) => (
                  <SkillBadge key={tech} label={tech} color="#fca311" />
                ))}
              </View>
            </Card>

            <Card style={styles.skillCard} leftBorderColor="#10B981">
              <View style={styles.skillHeader}>
                <FontAwesome name="wrench" size={24} color="#10B981" style={styles.skillIcon} />
                <ThemedText type="smallBold" style={styles.skillTitle}>Tools & Automation</ThemedText>
              </View>
              <View style={styles.badgeContainer}>
                {portfolioData.skills.toolsAutomation.map((tool) => (
                  <SkillBadge key={tool} label={tool} color="#10B981" />
                ))}
              </View>
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
  heroContainer: {
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    alignItems: 'center',
    gap: Spacing.five,
    marginVertical: Spacing.four,
  },
  avatarContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fca311',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  heroTextContainer: {
    flex: 1,
    alignItems: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  nameText: {
    fontWeight: '900',
    fontSize: Platform.select({ web: 46, default: 36 }),
    textAlign: Platform.select({ web: 'left', default: 'center' }),
    marginBottom: Spacing.half,
  },
  nicknameText: {
    color: '#fca311',
    fontSize: 18,
    marginBottom: Spacing.two,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: Platform.select({ web: 'left', default: 'center' }),
    marginBottom: Spacing.three,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginTop: Spacing.two,
    justifyContent: Platform.select({ web: 'flex-start', default: 'center' }),
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  skillsSection: {
    marginTop: Spacing.five,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: Spacing.three,
  },
  skillCard: {
    marginBottom: Spacing.three,
  },
  skillHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.two,
  },
  skillIcon: {
    marginRight: Spacing.two,
  },
  skillTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
  },
});

import React from 'react';
import { ScrollView, StyleSheet, Platform, View, Image, Pressable, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Card } from '@/components/Card';
import { SocialMediaStrip } from '@/components/SocialMediaStrip';
import { Footer } from '@/components/Footer';
import { portfolioData } from '@/data/portfolioData';
import { Spacing, MaxContentWidth } from '@/constants/theme';

export default function ContactScreen() {
  const handleEmail = () => {
    Linking.openURL('mailto:uysal.okan.2010@gmail.com');
  };

  const handlePhone = () => {
    Linking.openURL('tel:+905078873913');
  };

  const handleMap = () => {
    openBrowserAsync('https://maps.google.com/?q=Kurtkoy,Istanbul,Turkey');
  };

  const handleResumePress = () => {
    openBrowserAsync(portfolioData.greeting.resumeLink);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.titleRow}>
              <FontAwesome name="envelope-o" size={32} color="#fca311" style={{ marginRight: 12 }} />
              <ThemedText type="subtitle" style={styles.titleText}>
                Contact Me
              </ThemedText>
            </View>
            <ThemedText type="default" themeColor="textSecondary" style={styles.introText}>
              Feel free to reach out. I am available on almost every social platform and usually reply within 24 hours.
            </ThemedText>
          </View>

          {/* Main Info */}
          <View style={styles.mainContainer}>
            <View style={styles.avatarSection}>
              <ThemedText type="smallBold" style={styles.availText}>
                Available for Consultations & Roles
              </ThemedText>
              <SocialMediaStrip />
              
              <Pressable onPress={handleResumePress} style={styles.resumeButton}>
                <FontAwesome name="file-pdf-o" size={16} color="#000000" style={{ marginRight: 8 }} />
                <ThemedText style={styles.resumeButtonText}>Download Resume PDF</ThemedText>
              </Pressable>
            </View>

            <View style={styles.detailsSection}>
              {/* Email Card */}
              <Pressable onPress={handleEmail} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1.0 }]}>
                <Card style={styles.contactCard} leftBorderColor="#D14836">
                  <View style={styles.contactCardHeader}>
                    <FontAwesome name="envelope" size={20} color="#D14836" style={{ marginRight: 10 }} />
                    <ThemedText type="smallBold" style={styles.contactCardTitle}>Email Address</ThemedText>
                  </View>
                  <ThemedText type="default" themeColor="textSecondary" style={styles.contactCardVal}>
                    uysal.okan.2010@gmail.com
                  </ThemedText>
                  <ThemedText type="small" style={styles.actionPrompt}>Tap to send mail</ThemedText>
                </Card>
              </Pressable>

              {/* Phone Card */}
              <Pressable onPress={handlePhone} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1.0 }]}>
                <Card style={styles.contactCard} leftBorderColor="#10B981">
                  <View style={styles.contactCardHeader}>
                    <FontAwesome name="phone" size={20} color="#10B981" style={{ marginRight: 10 }} />
                    <ThemedText type="smallBold" style={styles.contactCardTitle}>Phone Number</ThemedText>
                  </View>
                  <ThemedText type="default" themeColor="textSecondary" style={styles.contactCardVal}>
                    +90 (507) 887-3913
                  </ThemedText>
                  <ThemedText type="small" style={styles.actionPrompt}>Tap to call</ThemedText>
                </Card>
              </Pressable>

              {/* Location Card */}
              <Pressable onPress={handleMap} style={({ pressed }) => [{ opacity: pressed ? 0.9 : 1.0 }]}>
                <Card style={styles.contactCard} leftBorderColor="#fca311">
                  <View style={styles.contactCardHeader}>
                    <FontAwesome name="map-marker" size={20} color="#fca311" style={{ marginRight: 10 }} />
                    <ThemedText type="smallBold" style={styles.contactCardTitle}>Location</ThemedText>
                  </View>
                  <ThemedText type="default" themeColor="textSecondary" style={styles.contactCardVal}>
                    Istanbul(Asia) / Kurtköy, TURKEY
                  </ThemedText>
                  <ThemedText type="small" style={styles.actionPrompt}>Tap to view on Google Maps</ThemedText>
                </Card>
              </Pressable>
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
  mainContainer: {
    flexDirection: Platform.select({ web: 'row', default: 'column' }),
    gap: Spacing.five,
    marginTop: Spacing.two,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.four,
  },
  avatarOutline: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#fca311',
    marginBottom: Spacing.two,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  availText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#10B981',
    marginBottom: Spacing.two,
    textAlign: 'center',
  },
  resumeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fca311',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginTop: Spacing.three,
  },
  resumeButtonText: {
    color: '#000000',
    fontWeight: '700',
    fontSize: 14,
  },
  detailsSection: {
    flex: 1.5,
    gap: Spacing.two,
  },
  contactCard: {
    padding: Spacing.three,
  },
  contactCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.one,
  },
  contactCardTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  contactCardVal: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  actionPrompt: {
    fontSize: 12,
    color: '#fca311',
    fontWeight: '700',
    marginTop: Spacing.one,
  },
});

import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { openBrowserAsync } from 'expo-web-browser';
import { portfolioData } from '@/data/portfolioData';
import { Spacing } from '@/constants/theme';

export function SocialMediaStrip() {
  const handlePress = async (url: string) => {
    if (url.startsWith('mailto:')) {
      // For mailto, openBrowserAsync might fail, so let's import Linking for email protocols
      const { Linking } = require('react-native');
      await Linking.openURL(url);
    } else {
      await openBrowserAsync(url);
    }
  };

  return (
    <View style={styles.container}>
      {portfolioData.socialMediaLinks.map((link) => (
        <Pressable
          key={link.name}
          onPress={() => handlePress(link.link)}
          style={({ pressed }) => [
            styles.iconButton,
            { backgroundColor: link.backgroundColor, opacity: pressed ? 0.8 : 1.0 },
          ]}
        >
          <FontAwesome name={link.fontAwesomeIcon as any} size={20} color="#ffffff" />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: Spacing.two,
    gap: Spacing.two,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { ThemedText } from './themed-text';
import { Spacing } from '@/constants/theme';

interface SkillBadgeProps {
  label: string;
  color?: string;
}

export function SkillBadge({ label, color = '#fca311' }: SkillBadgeProps) {
  const scheme = useColorScheme();
  
  // Create a transparent background from the hex color
  const bgColor = color.startsWith('#') 
    ? `${color}1A` // 10% opacity in hex
    : 'rgba(252, 163, 17, 0.1)';

  return (
    <View style={[styles.badge, { backgroundColor: bgColor, borderColor: `${color}40` }]}>
      <ThemedText style={[styles.text, { color: color }]}>
        {label}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: Spacing.half,
    paddingHorizontal: Spacing.two,
    marginRight: Spacing.one,
    marginBottom: Spacing.one,
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
  },
});

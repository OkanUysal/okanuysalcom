import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './themed-text';
import { portfolioData } from '@/data/portfolioData';
import { Spacing } from '@/constants/theme';

export function Footer() {
  return null;
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
    marginTop: Spacing.four,
  },
  text: {
    textAlign: 'center',
  },
});

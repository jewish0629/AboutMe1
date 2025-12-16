import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Linking, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function ConnectScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const gradientColors = isDark
    ? (['#2c3e50', '#34495e'] as const) // Dark blue-gray gradient
    : (['#667eea', '#764ba2'] as const); // Purple-blue gradient

  const accentColor = '#ff6b6b'; // Complementary accent

  const handleEmail = () => {
    Linking.openURL('mailto:jewish@example.com');
  };

  const handleSocial = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <ThemedView style={[styles.header, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <IconSymbol name="envelope.fill" size={60} color={accentColor} />
            <ThemedText type="title" style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>Get In Touch</ThemedText>
            <ThemedText style={[styles.subtitle, { color: isDark ? '#ccc' : '#666' }]}>Let's connect and collaborate!</ThemedText>
          </ThemedView>

          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Email</ThemedText>
            <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
              <IconSymbol name="envelope" size={24} color={accentColor} />
              <ThemedText style={[styles.contactText, { color: accentColor }]}>jewishvismanos33@gmail.com</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Social Links</ThemedText>
            <TouchableOpacity style={styles.contactItem} onPress={() => handleSocial('https://web.facebook.com/jewishjay.vismanos')}>
              <IconSymbol name="link" size={24} color={accentColor} />
              <ThemedText style={[styles.contactText, { color: accentColor }]}>facebook</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={() => handleSocial('https://www.instagram.com/itsme.jewish29?igsh=ZmY5bHNqcHE2YjZo&utm_source=qr')}>
              <IconSymbol name="link" size={24} color={accentColor} />
              <ThemedText style={[styles.contactText, { color: accentColor }]}>instagram</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactItem} onPress={() => handleSocial('https://x.com/jewish2901?s=21')}>
              <IconSymbol name="link" size={24} color={accentColor} />
              <ThemedText style={[styles.contactText, { color: accentColor }]}>Twitter</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Contact Form</ThemedText>
            <ThemedText style={[styles.text, { color: isDark ? '#fff' : '#333' }]}>
              For detailed inquiries, please use the email above. I respond within 24 hours!
            </ThemedText>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    marginTop: 10,
  },
  subtitle: {
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactText: {
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  text: {
    lineHeight: 20,
  },
});
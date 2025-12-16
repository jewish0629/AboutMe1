import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function SkillsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const gradientColors = isDark
    ? (['#0f0f23', '#1a1a2e'] as const) // Dark gradient
    : (['#f093fb', '#f5576c'] as const); // Pink-red gradient

  const accentColor = '#ff6b6b'; // Complementary accent

  const technicalSkills = [
    { name: 'Python', level: 80 },
    { name: 'Pygame', level: 78 },
    { name: 'NumPy', level: 75 },
    { name: 'Pandas', level: 70 },
    { name: 'Matplotlib', level: 65 },
    { name: 'JavaScript', level: 60 },
    { name: 'SQL', level: 58 },
    { name: 'scikit-learn', level: 55 },
    { name: 'HTML', level: 50 },
    { name: 'CSS', level: 48 },
    { name: 'TensorFlow', level: 45 },
    { name: 'React Native', level: 43 },
    { name: 'CustomTkinter', level: 40 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Adaptability', level: 80 },
    { name: 'Critical Thinking', level: 75 },
    { name: 'Time Management', level: 70 },
    { name: 'Creativity / Innovation', level: 70 },
  ];

  const renderSkill = (skill: { name: string; level: number }) => (
    <ThemedView key={skill.name} style={[styles.skillItem, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
      <ThemedText style={[styles.skillName, { color: isDark ? '#fff' : '#333' }]}>{skill.name}</ThemedText>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${skill.level}%`, backgroundColor: accentColor }]} />
      </View>
      <ThemedText style={[styles.skillLevel, { color: isDark ? '#ccc' : '#666' }]}>{skill.level}%</ThemedText>
    </ThemedView>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <ThemedView style={[styles.header, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <IconSymbol name="star.fill" size={60} color={accentColor} />
            <ThemedText type="title" style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>My Skills</ThemedText>
            <ThemedText style={[styles.subtitle, { color: isDark ? '#ccc' : '#666' }]}>Technical and soft skills I've developed</ThemedText>
          </ThemedView>

          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Technical Skills</ThemedText>
            {technicalSkills.map(renderSkill)}
          </ThemedView>

          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Soft Skills</ThemedText>
            {softSkills.map(renderSkill)}
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
    marginBottom: 15,
    fontWeight: 'bold',
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
  skillName: {
    flex: 1,
    fontSize: 16,
  },
  progressBar: {
    flex: 2,
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    marginHorizontal: 10,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  skillLevel: {
    width: 40,
    textAlign: 'right',
    fontSize: 14,
  },
});

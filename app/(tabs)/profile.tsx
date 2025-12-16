import React from 'react';
import { StyleSheet, ScrollView, View, Platform, Image as RNImage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/use-color-scheme';

import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const accentColor = '#ff6b6b';
  const keySkills = ['React Native', 'JavaScript', 'Python', 'UI/UX Design', 'Problem Solving'];

  // ✅ Gallery images array
  const galleryImages = [
    require('@/assets/images/myPic.png'),
    require('@/assets/images/Profile.jpg'),
    require('@/assets/images/Me.jpg'),
    require('@/assets/images/Me2.jpg'),
    // Idagdag dito lahat ng pictures mo
  ];

  const Content = (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Picture and Name */}
        <ThemedView style={[styles.profileSection, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
          <RNImage
            source={require('@/assets/images/Profile.jpg')}
            style={styles.profileImage}
          />
          <ThemedText type="title" style={[styles.name, { color: isDark ? '#fff' : '#333' }]}>Jewish Vismanos</ThemedText>
          <ThemedText type="subtitle" style={[styles.tagline, { color: isDark ? '#ccc' : '#666' }]}>Passionate Developer | Innovator | Explorer</ThemedText>
        </ThemedView>

        {/* About Me Section */}
        <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>About Me</ThemedText>

          <ThemedText style={[styles.text, { color: isDark ? '#fff' : '#333' }]}>
            I am a dedicated software developer with a passion for creating innovative solutions. My journey in tech started with curiosity and has evolved into a career focused on building impactful applications.
          </ThemedText>

          <ThemedText style={[styles.text, styles.subText, { color: isDark ? '#ccc' : '#555' }]}>
            <ThemedText type="defaultSemiBold" style={{ color: accentColor }}>Interests: </ThemedText>
            {'Mobile App Development, Game Development, AI and Machine Learning, Open Source Contributions and Traveling.'}
          </ThemedText>

          <ThemedText style={[styles.text, styles.subText, { color: isDark ? '#ccc' : '#555' }]}>
            <ThemedText type="defaultSemiBold" style={{ color: accentColor }}>Background: </ThemedText>
            {'With several years of experience in software development, I have worked on diverse projects ranging from web applications to mobile apps. I enjoy tackling challenges and learning new technologies to stay ahead in the ever-evolving tech landscape.'}
          </ThemedText>
        </ThemedView>

        {/* Key Skills Section */}
        <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Key Skills</ThemedText>
          <View style={styles.skillsContainer}>
            {keySkills.map((skill, index) => (
              <View key={index} style={[styles.skillBadge, { backgroundColor: accentColor }]}>
                <ThemedText style={styles.skillText}>{skill}</ThemedText>
              </View>
            ))}
          </View>
        </ThemedView>

        {/* Gallery Section */}
        <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
          <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Gallery</ThemedText>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
            {galleryImages.map((img, index) => (
              <RNImage
                key={index}
                source={img}
                style={styles.galleryImage}
              />
            ))}
          </ScrollView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );

  if (Platform.OS === 'web') {
    return <View style={styles.webBackground}>{Content}</View>;
  }

  return (
    <LinearGradient colors={['#667eea', '#764ba2']} style={styles.gradient}>
      {Content}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  webBackground: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: '#ff6b6b',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 4,
  },
  section: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  text: {
    lineHeight: 22,
    marginBottom: 8,
  },
  subText: {
    fontStyle: 'italic',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  galleryScroll: {
    marginTop: 10,
  },
  galleryImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

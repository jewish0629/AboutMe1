import { useColorScheme } from '@/hooks/use-color-scheme';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Image } from 'expo-image';

export default function ProjectsScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const gradientColors = isDark
    ? (['#16213e', '#0f3460'] as const) // Dark blue gradient
    : (['#a8edea', '#fed6e3'] as const); // Light blue-pink gradient

  const accentColor = '#ff6b6b'; // Complementary accent

  const projects = [
    {
      title: 'About Me App',
      description: 'A mobile app showcasing personal information, skills, and projects using React Native and Expo.',
      technologies: ['React Native', 'Expo', 'TypeScript'],
      status: 'Academic Project',
      screenshot: require('@/assets/images/aboutMe.jpg'),
    },
    {
      title: 'SuperX Game',
      description: 'An exciting action game developed using Python and Pygame framework.',
      technologies: ['Python', 'Pygame'],
      status: 'Personal Project',
      screenshot: require('@/assets/images/superX.png'),
    },
    {
      title: 'Tetris',
      description: 'A classic Tetris game implementation with random piece generation.',
      technologies: ['Python', 'Pygame', 'Random'],
      status: 'Personal Project',
      screenshot: require('@/assets/images/tetris.png'),
    },
    {
      title: 'Space Game',
      description: 'A space-themed game featuring video editing and advanced graphics.',
      technologies: ['Python', 'Pygame', 'MoviePy', 'NumPy'],
      status: 'In Progress',
      screenshot: require('@/assets/images/aircraft.png'),
    },
    {
      title: 'Fast Food Order Management System',
      description: 'A GUI application for managing fast food orders with database integration.',
      technologies: ['Python', 'CustomTkinter', 'SQLite'],
      status: 'Academic Project',
      screenshot: require('@/assets/images/order_management.png'),
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return accentColor;
      case 'Prototype': return '#4CAF50';
      case 'Academic Project': return '#2196F3';
      case 'Personal Project': return '#FF9800';
      default: return '#9E9E9E';
    }
  };

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <ThemedView style={[styles.header, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <IconSymbol name="folder.fill" size={60} color={accentColor} />
            <ThemedText type="title" style={[styles.title, { color: isDark ? '#fff' : '#333' }]}>My Projects</ThemedText>
            <ThemedText style={[styles.subtitle, { color: isDark ? '#ccc' : '#666' }]}>A showcase of my work and achievements</ThemedText>
          </ThemedView>

          {projects.map((project, index) => (
            <ThemedView key={index} style={[styles.projectCard, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
              <Image source={project.screenshot} style={styles.screenshot} />
              <ThemedView style={styles.projectInfo}>
                <ThemedText type="subtitle" style={[styles.projectTitle, { color: isDark ? '#fff' : '#333' }]}>{project.title}</ThemedText>
                <ThemedText style={[styles.description, { color: isDark ? '#ccc' : '#666' }]}>{project.description}</ThemedText>
                <ThemedView style={styles.techContainer}>
                  {project.technologies.map((tech, i) => (
                    <ThemedView key={i} style={[styles.techTag, { backgroundColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }]}>
                      <ThemedText style={[styles.techText, { color: isDark ? '#fff' : '#333' }]}>{tech}</ThemedText>
                    </ThemedView>
                  ))}
                </ThemedView>
                <ThemedView style={styles.statusContainer}>
                  <ThemedText style={[styles.status, { color: getStatusColor(project.status) }]}>
                    {project.status}
                  </ThemedText>
                </ThemedView>
              </ThemedView>
            </ThemedView>
          ))}
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
  projectCard: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
  },
  screenshot: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    marginBottom: 5,
  },
  description: {
    marginBottom: 10,
    lineHeight: 18,
  },
  techContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  techTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 5,
    marginBottom: 5,
  },
  techText: {
    fontSize: 12,
  },
  statusContainer: {
    alignSelf: 'flex-start',
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

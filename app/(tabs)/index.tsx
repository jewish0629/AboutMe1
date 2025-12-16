import { useColorScheme } from '@/hooks/use-color-scheme';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { Linking, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const gradientColors = isDark
    ? (['#1e3c72', '#2a5298'] as const) // Dark blue gradient
    : (['#667eea', '#764ba2'] as const); // Light blue-purple gradient

  const accentColor = '#ff6b6b'; // Complementary accent
  const viewAllColor = '#3498db'; // Blue for view all buttons

  const topSkills = [
    { name: 'Python', level: 80 },
    { name: 'Pygame', level: 78 },
    { name: 'NumPy', level: 75 },
    { name: 'JavaScript', level: 60 },
  ];

  const projects = [
    { title: 'SuperX Game', image: require('@/assets/images/superX.png') },
    { title: 'Tetris', image: require('@/assets/images/tetris.png') },
    { title: 'Space Game', image: require('@/assets/images/aircraft.png') },
    { title: 'Fast Food System', image: require('@/assets/images/order_management.png') },
  ];

  const handleEmail = () => Linking.openURL('mailto:jewish@example.com');
  const handleSocial = (url: string) => Linking.openURL(url);

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          {/* Profile Snapshot */}
          <ThemedView style={[styles.profileContainer, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <Image
              source={require('@/assets/images/Profile.jpg')}
              style={styles.profileImage}
            />
            <ThemedView style={styles.profileText}>
              <ThemedText type="title" style={[styles.name, { color: isDark ? '#fff' : '#333' }]}>Jewish Vismanos</ThemedText>
              <ThemedText type="subtitle" style={[styles.tagline, { color: isDark ? '#ccc' : '#666' }]}>Passionate Developer | Innovator | Explorer</ThemedText>
            </ThemedView>
          </ThemedView>

          {/* Profile Summary */}
          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Profile</ThemedText>
            <ThemedText style={[styles.sectionText, { color: isDark ? '#fff' : '#333' }]}>
              A dedicated software developer with a passion for creating innovative solutions. Specializing in Python development and game creation.
            </ThemedText>
            <Link href="/profile" asChild>
              <TouchableOpacity style={[styles.linkButton, { backgroundColor: 'transparent', borderColor: accentColor, borderWidth: 1 }]}>
                <ThemedText style={[styles.linkText, { color: '#1F5F3B' }]}>View Full Profile</ThemedText>
              </TouchableOpacity>
            </Link>
          </ThemedView>

          {/* Skills Summary */}
          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Top Skills</ThemedText>
            <ScrollView style={styles.skillsScroll} showsVerticalScrollIndicator={false}>
              {topSkills.map((skill, index) => (
                <View key={index} style={styles.skillItem}>
                  <ThemedText style={[styles.skillName, { color: isDark ? '#fff' : '#333' }]}>{skill.name}</ThemedText>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${skill.level}%`, backgroundColor: accentColor }]} />
                  </View>
                  <ThemedText style={[styles.skillLevel, { color: isDark ? '#ccc' : '#666' }]}>{skill.level}%</ThemedText>
                </View>
              ))}
            </ScrollView>
            <Link href="/skills" asChild>
              <TouchableOpacity style={[styles.linkButton, { backgroundColor: 'transparent', borderColor: accentColor, borderWidth: 1 }]}>
                <ThemedText style={[styles.linkText, { color: '#1F5F3B' }]}>View All Skills</ThemedText>
              </TouchableOpacity>
            </Link>
          </ThemedView>

          {/* Projects Carousel */}
          <ThemedView style={[styles.section, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Featured Projects</ThemedText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
              {projects.map((project, index) => (
                <View key={index} style={styles.projectCard}>
                  <Image source={project.image} style={styles.projectImage} />
                  <ThemedText style={[styles.projectTitle, { color: isDark ? '#fff' : '#333' }]}>{project.title}</ThemedText>
                </View>
              ))}
            </ScrollView>
            <Link href="/projects" asChild>
              <TouchableOpacity style={[styles.linkButton, { backgroundColor: 'transparent', borderColor: accentColor, borderWidth: 1 }]}>
                <ThemedText style={[styles.linkText, { color: '#1F5F3B' }]}>View All Projects</ThemedText>
              </TouchableOpacity>
            </Link>
          </ThemedView>

          {/* Connect Section */}
          <ThemedView style={[styles.connectSection, { backgroundColor: isDark ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.9)' }]}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: accentColor }]}>Connect</ThemedText>
            <View style={styles.connectButtons}>
              <TouchableOpacity style={[styles.connectButton, { backgroundColor: accentColor }]} onPress={handleEmail}>
                <IconSymbol name="envelope" size={20} color="#fff" />
                <ThemedText style={styles.connectText}>Email</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.connectButton, { backgroundColor: accentColor }]} onPress={() => handleSocial('https://web.facebook.com/jewishjay.vismanos')}>
                <IconSymbol name="link" size={20} color="#fff" />
                <ThemedText style={styles.connectText}>Facebook</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.connectButton, { backgroundColor: accentColor }]} onPress={() => handleSocial('https://www.instagram.com/itsme.jewish29?igsh=ZmY5bHNqcHE2YjZo&utm_source=qr')}>
                <IconSymbol name="link" size={20} color="#fff" />
                <ThemedText style={styles.connectText}>Instagram</ThemedText>
              </TouchableOpacity>
            </View>
            <Link href="/connect" asChild>
              <TouchableOpacity style={[styles.linkButton, { backgroundColor: 'transparent', borderColor: accentColor, borderWidth: 1 }]}>
                <ThemedText style={[styles.linkText, { color: '#1F5F3B' }]}>View Connect Page</ThemedText>
              </TouchableOpacity>
            </Link>
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
  },
  scrollContent: {
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileText: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 14,
    marginTop: 4,
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
  sectionText: {
    lineHeight: 20,
    marginBottom: 10,
  },
  linkButton: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    fontWeight: 'bold',
  },
  skillsScroll: {
    maxHeight: 120,
    marginBottom: 10,
  },
  skillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
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
  carousel: {
    marginBottom: 10,
  },
  projectCard: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  projectImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
  },
  projectTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  connectSection: {
    marginBottom: 20,
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  connectButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  connectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  connectText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
});

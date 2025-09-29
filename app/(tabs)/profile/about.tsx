import { Ionicons } from '@expo/vector-icons';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutScreen() {
  const openUrl = (url: string) => {
    Linking.openURL(url);
  };

  const InfoRow = ({ icon, title, value, onPress }: any) => (
    <TouchableOpacity style={styles.infoRow} onPress={onPress}>
      <View style={styles.infoLeft}>
        <Ionicons name={icon} size={24} color="#2f95dc" style={styles.infoIcon} />
        <Text style={styles.infoTitle}>{title}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
      {onPress && <Ionicons name="chevron-forward" size={20} color="#ccc" />}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="information-circle" size={80} color="#2f95dc" />
        <Text style={styles.appName}>First App</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Information</Text>
        <InfoRow
          icon="code-slash"
          title="Built with"
          value="React Native & Expo"
        />
        <InfoRow
          icon="calendar"
          title="Release Date"
          value="September 2025"
        />
        <InfoRow
          icon="download"
          title="Size"
          value="25 MB"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Developer</Text>
        <InfoRow
          icon="person"
          title="Developer"
          value="Your Name"
        />
        <InfoRow
          icon="mail"
          title="Contact"
          value="developer@example.com"
          onPress={() => openUrl('mailto:developer@example.com')}
        />
        <InfoRow
          icon="globe"
          title="Website"
          value="www.example.com"
          onPress={() => openUrl('https://www.example.com')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal</Text>
        <InfoRow
          icon="document-text"
          title="Terms of Service"
          value="View"
          onPress={() => console.log('Terms of Service')}
        />
        <InfoRow
          icon="shield-checkmark"
          title="Privacy Policy"
          value="View"
          onPress={() => console.log('Privacy Policy')}
        />
        <InfoRow
          icon="heart"
          title="Open Source Licenses"
          value="View"
          onPress={() => console.log('Licenses')}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 First App. All rights reserved.
        </Text>
        <Text style={styles.footerSubText}>
          Made with ❤️ using React Native
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40,
   margin:60,   
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  version: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#f8f8f8',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoIcon: {
    marginRight: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
    marginRight: 10,
  },
  footer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  footerSubText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 5,
  },
});
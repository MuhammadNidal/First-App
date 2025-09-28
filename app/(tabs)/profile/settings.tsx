import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(true);

  const SettingItem = ({ icon, title, description, hasSwitch, switchValue, onSwitchChange, onPress }: any) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <Ionicons name={icon} size={24} color="#2f95dc" style={styles.settingIcon} />
        <View>
          <Text style={styles.settingTitle}>{title}</Text>
          {description && <Text style={styles.settingDescription}>{description}</Text>}
        </View>
      </View>
      {hasSwitch && (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: '#e0e0e0', true: '#2f95dc' }}
        />
      )}
      {!hasSwitch && <Ionicons name="chevron-forward" size={20} color="#ccc" />}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <SettingItem
          icon="notifications"
          title="Push Notifications"
          description="Receive notifications for updates"
          hasSwitch={true}
          switchValue={notificationsEnabled}
          onSwitchChange={setNotificationsEnabled}
        />
        <SettingItem
          icon="moon"
          title="Dark Mode"
          description="Use dark theme"
          hasSwitch={true}
          switchValue={darkModeEnabled}
          onSwitchChange={setDarkModeEnabled}
        />
        <SettingItem
          icon="location"
          title="Location Services"
          description="Allow location access"
          hasSwitch={true}
          switchValue={locationEnabled}
          onSwitchChange={setLocationEnabled}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <SettingItem
          icon="key"
          title="Change Password"
          description="Update your password"
          onPress={() => console.log('Change password')}
        />
        <SettingItem
          icon="mail"
          title="Email Preferences"
          description="Manage email settings"
          onPress={() => console.log('Email preferences')}
        />
        <SettingItem
          icon="shield"
          title="Privacy & Security"
          description="Manage your privacy settings"
          onPress={() => console.log('Privacy settings')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <SettingItem
          icon="help-circle"
          title="Help & Support"
          description="Get help with the app"
          onPress={() => console.log('Help')}
        />
        <SettingItem
          icon="chatbubbles"
          title="Contact Us"
          description="Send us feedback"
          onPress={() => console.log('Contact')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    marginRight: 15,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  settingDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
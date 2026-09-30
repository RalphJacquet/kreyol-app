import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MainTabNavigator({ currentTab, setCurrentTab }) {
  const tabs = [
    { id: 'Home', label: 'Accueil', icon: '🏠' },
    { id: 'Learn', label: 'Apprendre', icon: '📖' },
    { id: 'League', label: 'Ligue', icon: '🏆' },
    { id: 'Community', label: 'Communauté', icon: '💬' },
    { id: 'Profile', label: 'Profil', icon: '👤' },
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            style={[styles.navBtn, isActive && styles.navBtnActive]}
            onPress={() => setCurrentTab(tab.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.navIcon}>{tab.icon}</Text>
            <Text style={[styles.navText, isActive && styles.navTextActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6ECF5',
    paddingVertical: 10,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderTopColor: '#CBD5E0',
  },
  navBtn: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 14,
    minWidth: 60,
  },
  navBtnActive: {
    backgroundColor: '#D6E2F0',
  },
  navIcon: {
    fontSize: 18,
    marginBottom: 2,
  },
  navText: {
    fontSize: 11,
    color: '#718096',
    fontWeight: '600',
  },
  navTextActive: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});
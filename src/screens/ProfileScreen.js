import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const USER_PROFILE = {
  id: 'u1',
  name: 'Ralph Jacquet',
  username: '@ralph_jqt',
  level: 'Nivo 5 • Aprenan Avanse',
  avatar: '👨‍💻',
  xp: 1450,
  rank: 4,
  stats: [
    { label: 'Série active', value: '5 Jou', icon: '🔥', color: '#FF7675' },
    { label: 'Total XP', value: '1,450', icon: '⚡', color: '#FDCB6E' },
    { label: 'Pièces', value: '120', icon: '🪙', color: '#FFEAA7' },
    { label: 'Ligue', value: 'Roroli', icon: '🏆', color: '#00CEC9' },
  ],
  badges: [
    { id: 'b1', title: 'Première Victoire', desc: 'Compléter 1 leçon', icon: '🎯', unlocked: true, progress: '1/1' },
    { id: 'b2', title: 'Flamme Éternelle', desc: 'Maintenir 7 jours de série', icon: '🔥', unlocked: false, progress: '5/7' },
    { id: 'b3', title: 'Maître des Mots', desc: 'Apprendre 50 mots', icon: '📚', unlocked: true, progress: '50/50' },
    { id: 'b4', title: 'Polyglotte Kreyòl', desc: 'Terminer le Chapitre 1', icon: '🇭🇹', unlocked: false, progress: '3/6' },
  ],
  settings: [
    { id: 's1', label: 'Objectif quotidien', value: '15 min / jour', icon: '⏱️' },
    { id: 's2', label: 'Rappels & Notifications', value: 'Activé (20h00)', icon: '🔔' },
    { id: 's3', label: 'Sons & Effets sonores', value: 'Oui', icon: '🔊' },
    { id: 's4', label: 'Préférences de langue', value: 'Français ➔ Kreyòl', icon: '🌐' },
  ],
};

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.profilContainer}>
        
        {/* AVATAR & INFOS */}
        <View style={styles.avatarCard}>
          <View style={styles.avatarWrapper}>
            <Text style={styles.avatarEmoji}>{USER_PROFILE.avatar}</Text>
          </View>
          <Text style={styles.profileName}>{USER_PROFILE.name}</Text>
          <Text style={styles.profileUsername}>{USER_PROFILE.username}</Text>
          
          <View style={styles.levelBadge}>
            <Text style={styles.levelBadgeText}>{USER_PROFILE.level}</Text>
          </View>
        </View>

        {/* STATISTIQUES */}
        <Text style={styles.profilSectionTitle}>Mes Statistiques</Text>
        <View style={styles.statsGrid}>
          {USER_PROFILE.stats.map((stat, idx) => (
            <View key={idx} style={styles.statBox}>
              <Text style={styles.statBoxIcon}>{stat.icon}</Text>
              <View>
                <Text style={styles.statBoxValue}>{stat.value}</Text>
                <Text style={styles.statBoxLabel}>{stat.label}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* BADGES */}
        <Text style={styles.profilSectionTitle}>Badges & Succès</Text>
        <View style={styles.badgesList}>
          {USER_PROFILE.badges.map((badge) => (
            <View key={badge.id} style={[styles.badgeCard, !badge.unlocked && styles.badgeLockedCard]}>
              <View style={styles.badgeIconWrapper}>
                <Text style={styles.badgeIcon}>{badge.icon}</Text>
              </View>
              <View style={styles.badgeInfo}>
                <View style={styles.badgeHeaderRow}>
                  <Text style={styles.badgeTitle}>{badge.title}</Text>
                  <Text style={styles.badgeProgressText}>{badge.progress}</Text>
                </View>
                <Text style={styles.badgeDesc}>{badge.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* PARAMÈTRES */}
        <Text style={styles.profilSectionTitle}>Paramètres du Compte</Text>
        <View style={styles.settingsMenu}>
          {USER_PROFILE.settings.map((item) => (
            <TouchableOpacity key={item.id} style={styles.settingRow} activeOpacity={0.7}>
              <View style={styles.settingLeft}>
                <Text style={styles.settingIcon}>{item.icon}</Text>
                <Text style={styles.settingLabel}>{item.label}</Text>
              </View>
              <Text style={styles.settingValue}>{item.value} ›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* DÉCONNEXION */}
        <TouchableOpacity style={styles.logoutBtn} activeOpacity={0.8}>
          <Text style={styles.logoutBtnText}>Se déconnecter</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6ECF5',
  },
  profilContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  avatarCard: {
    backgroundColor: '#E6ECF5',
    borderRadius: 28,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  avatarEmoji: {
    fontSize: 48,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  profileUsername: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 12,
  },
  levelBadge: {
    backgroundColor: '#4A90E2',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  levelBadgeText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 12,
  },
  profilSectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 14,
    marginTop: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statBox: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6ECF5',
    padding: 14,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statBoxIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  statBoxValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  statBoxLabel: {
    fontSize: 11,
    color: '#718096',
    fontWeight: '600',
  },
  badgesList: {
    marginBottom: 24,
  },
  badgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6ECF5',
    padding: 14,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  badgeLockedCard: {
    opacity: 0.6,
  },
  badgeIconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  badgeIcon: {
    fontSize: 22,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badgeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  badgeProgressText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  badgeDesc: {
    fontSize: 12,
    color: '#718096',
    marginTop: 2,
  },
  settingsMenu: {
    backgroundColor: '#E6ECF5',
    borderRadius: 22,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#CBD5E0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
  settingValue: {
    fontSize: 13,
    color: '#718096',
    fontWeight: '500',
  },
  logoutBtn: {
    backgroundColor: '#E6ECF5',
    paddingVertical: 14,
    borderRadius: 18,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E53E3E',
  },
  logoutBtnText: {
    color: '#E53E3E',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
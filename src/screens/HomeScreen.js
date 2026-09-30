import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen() {
  const levels = [
    { id: 1, title: 'Introduction & Salutations', status: 'completed', icon: '✓' },
    { id: 2, title: 'Vocabulaire de base', status: 'active', icon: '⭐' },
    { id: 3, title: 'Phrases essentielles', status: 'locked', icon: '🔒' },
    { id: 4, title: 'La famille et les proches', status: 'locked', icon: '🔒' },
    { id: 5, title: 'Expressions courantes', status: 'locked', icon: '🔒' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. BARRE DE STATISTIQUES EN HAUT */}
      <View style={styles.statsHeader}>
        <View style={styles.statBadge}>
          <Text style={styles.statIcon}>🔥</Text>
          <Text style={styles.statText}>5 jours</Text>
        </View>

        <View style={styles.statBadge}>
          <Text style={styles.statIcon}>💎</Text>
          <Text style={styles.statText}>120</Text>
        </View>

        <View style={styles.statBadge}>
          <Text style={styles.statIcon}>❤️</Text>
          <Text style={styles.statText}>5/5</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 2. EN-TÊTE DE BIENVENUE */}
        <View style={styles.welcomeBanner}>
          <View>
            <Text style={styles.greetingText}>Bonjou ! 👋</Text>
            <Text style={styles.appTitle}>Kreyòl App</Text>
          </View>
        </View>

        {/* 3. BANNIÈRE D'UNITÉ EN COURS */}
        <View style={styles.unitCard}>
          <Text style={styles.unitTag}>UNITÉ 1</Text>
          <Text style={styles.unitTitle}>Les bases de la langue</Text>
          <Text style={styles.unitDesc}>Apprenez à saluer, vous présenter et poser des questions simples.</Text>
        </View>

        {/* 4. DÉFI DU JOUR / MOT DU JOUR */}
        <View style={styles.dailyCard}>
          <View style={styles.dailyHeader}>
            <Text style={styles.dailyBadge}>💡 Mot du jour</Text>
            <Text style={styles.dailyWord}>"Sak pase ?"</Text>
          </View>
          <Text style={styles.dailyTranslation}>Signification : "Comment ça va ?" / "Qu'est-ce qui se passe ?"</Text>
        </View>

        {/* 5. PARCOURS D'APPRENTISSAGE (TREE / PATH) */}
        <Text style={styles.sectionTitle}>Votre Parcours</Text>
        <View style={styles.pathContainer}>
          {levels.map((level, index) => {
            const isCompleted = level.status === 'completed';
            const isActive = level.status === 'active';
            const isLocked = level.status === 'locked';

            // Décalage alterné à gauche/droite pour l'effet de chemin
            const offsetX = index % 2 === 1 ? 35 : index % 3 === 2 ? -35 : 0;

            return (
              <View key={level.id} style={styles.nodeWrapper}>
                {/* Ligne de connexion entre les étapes */}
                {index > 0 && <View style={styles.pathLine} />}

                <View style={[styles.nodeRow, { transform: [{ translateX: offsetX }] }]}>
                  <TouchableOpacity
                    style={[
                      styles.nodeButton,
                      isCompleted && styles.nodeCompleted,
                      isActive && styles.nodeActive,
                      isLocked && styles.nodeLocked,
                    ]}
                    disabled={isLocked}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.nodeIcon}>{level.icon}</Text>
                  </TouchableOpacity>

                  <View style={styles.nodeInfo}>
                    <Text style={[styles.nodeTitle, isLocked && styles.textMuted]}>
                      {level.title}
                    </Text>
                    <Text style={styles.nodeStatus}>
                      {isCompleted ? 'Complété' : isActive ? 'Continuer' : 'Verrouillé'}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6ECF5',
  },
  statsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  statBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EDF2F7',
  },
  statIcon: {
    fontSize: 16,
    marginRight: 6,
  },
  statText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  welcomeBanner: {
    marginTop: 16,
    marginBottom: 12,
  },
  greetingText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '600',
  },
  appTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A202C',
  },
  unitCard: {
    backgroundColor: '#3182CE',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#3182CE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  unitTag: {
    fontSize: 11,
    fontWeight: '800',
    color: '#EBF8FF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  unitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  unitDesc: {
    fontSize: 13,
    color: '#E2E8F0',
    lineHeight: 18,
  },
  dailyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  dailyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  dailyBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D69E2E',
  },
  dailyWord: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2B6CB0',
  },
  dailyTranslation: {
    fontSize: 12,
    color: '#4A5568',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  pathContainer: {
    alignItems: 'center',
  },
  nodeWrapper: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  pathLine: {
    width: 4,
    height: 24,
    backgroundColor: '#CBD5E0',
    marginBottom: 12,
    borderRadius: 2,
  },
  nodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  nodeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  nodeCompleted: {
    backgroundColor: '#38A169',
  },
  nodeActive: {
    backgroundColor: '#3182CE',
    borderWidth: 3,
    borderColor: '#63B3ED',
  },
  nodeLocked: {
    backgroundColor: '#EDF2F7',
  },
  nodeIcon: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  nodeInfo: {
    flex: 1,
  },
  nodeTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 2,
  },
  nodeStatus: {
    fontSize: 11,
    color: '#718096',
    fontWeight: '500',
  },
  textMuted: {
    color: '#A0AEC0',
  },
});
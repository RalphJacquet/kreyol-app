import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function LearnScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Vocabulaire', 'Grammaire', 'Prononciation', 'Culture'];

  const modules = [
    {
      id: 1,
      title: 'Les Pronoms Personnels',
      category: 'Grammaire',
      level: 'Débutant',
      lessonsCount: 5,
      icon: '📚',
      description: 'Mwen, Ou, Li, Nou, Yo : maîtrisez le sujet des phrases.',
      color: '#3182CE',
    },
    {
      id: 2,
      title: 'Les Salutations & Politesse',
      category: 'Vocabulaire',
      level: 'Débutant',
      lessonsCount: 8,
      icon: '👋',
      description: 'Dire bonjour, au revoir et remercier comme un natif.',
      color: '#38A169',
    },
    {
      id: 3,
      title: 'Proverbes Haïtiens (Pwovèb)',
      category: 'Culture',
      level: 'Intermédiaire',
      lessonsCount: 12,
      icon: '🇭🇹',
      description: '"Chita pa bay" et autres proverbes incontournables.',
      color: '#DD6B20',
    },
    {
      id: 4,
      title: 'Les Sons et la Phonétique',
      category: 'Prononciation',
      level: 'Débutant',
      lessonsCount: 4,
      icon: '🎧',
      description: 'Apprenez à prononcer correctement les sons créoles.',
      color: '#805AD5',
    },
    {
      id: 5,
      title: 'Les Marqueurs de Temps',
      category: 'Grammaire',
      level: 'Intermédiaire',
      lessonsCount: 6,
      icon: '⏳',
      description: 'Utiliser "te", "ap", "pral" pour exprimer passé et futur.',
      color: '#D69E2E',
    },
  ];

  const filteredModules =
    selectedCategory === 'Tous'
      ? modules
      : modules.filter((m) => m.category === selectedCategory);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* EN-TÊTE DE LA PAGE */}
        <View style={styles.header}>
          <Text style={styles.title}>Centre d'Apprentissage</Text>
          <Text style={styles.subtitle}>
            Explorez des fiches de cours, du vocabulaire et de la grammaire.
          </Text>
        </View>

        {/* ASTUCE RAPIDE DE DÉBUTANT */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Astuce Créole</Text>
          <Text style={styles.tipText}>
            En créole haïtien, les verbes ne se conjuguent pas comme en français ! On utilise des marqueurs
            de temps devant le verbe (ex: <Text style={styles.highlight}>M ap manje</Text> = Je mange).
          </Text>
        </View>

        {/* BARRE DE CATÉGORIES (TABS) */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <TouchableOpacity
                key={category}
                style={[styles.categoryBadge, isActive && styles.categoryBadgeActive]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text style={[styles.categoryText, isActive && styles.categoryTextActive]}>
                  {category}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* LISTE DES MODULES D'APPRENTISSAGE */}
        <Text style={styles.sectionTitle}>Modules disponibles ({filteredModules.length})</Text>

        {filteredModules.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.8}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
              <Text style={styles.cardIcon}>{item.icon}</Text>
            </View>

            <View style={styles.cardInfo}>
              <View style={styles.cardMeta}>
                <Text style={[styles.tag, { color: item.color }]}>{item.category}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.levelText}>{item.level}</Text>
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc} numberOfLines={2}>
                {item.description}
              </Text>

              <Text style={styles.lessonCount}>📖 {item.lessonsCount} leçons</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6ECF5',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
    maxWidth: 600,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1A202C',
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    marginTop: 4,
  },
  tipCard: {
    backgroundColor: '#EBF8FF',
    borderLeftWidth: 4,
    borderLeftColor: '#3182CE',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2B6CB0',
    marginBottom: 4,
  },
  tipText: {
    fontSize: 13,
    color: '#2D3748',
    lineHeight: 18,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#3182CE',
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  categoryBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  categoryBadgeActive: {
    backgroundColor: '#3182CE',
    borderColor: '#3182CE',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A5568',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  cardIcon: {
    fontSize: 24,
  },
  cardInfo: {
    flex: 1,
  },
  cardMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  tag: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  dot: {
    marginHorizontal: 6,
    color: '#A0AEC0',
  },
  levelText: {
    fontSize: 11,
    color: '#718096',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12,
    color: '#718096',
    lineHeight: 16,
    marginBottom: 8,
  },
  lessonCount: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4A5568',
  },
});
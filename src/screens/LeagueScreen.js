import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

const LEAGUE_LEADERBOARD = [
  { id: 'u2', rank: 1, name: 'Jean-Luc M.', avatar: '🦁', xp: 2180, isUser: false },
  { id: 'u3', rank: 2, name: 'Florence B.', avatar: '👩‍🎤', xp: 1890, isUser: false },
  { id: 'u4', rank: 3, name: 'Kensley T.', avatar: '🚀', xp: 1620, isUser: false },
  { id: 'u1', rank: 4, name: 'Ralph Jacquet (Vous)', avatar: '👨‍💻', xp: 1450, isUser: true },
  { id: 'u5', rank: 5, name: 'Nathalie D.', avatar: '🎨', xp: 1210, isUser: false },
  { id: 'u6', rank: 6, name: 'Sébastien P.', avatar: '🎧', xp: 980, isUser: false },
  { id: 'u7', rank: 7, name: 'Marie-Eve L.', avatar: '🌸', xp: 850, isUser: false },
];

export default function LeagueScreen() {
  const top1 = LEAGUE_LEADERBOARD.find((item) => item.rank === 1);
  const top2 = LEAGUE_LEADERBOARD.find((item) => item.rank === 2);
  const top3 = LEAGUE_LEADERBOARD.find((item) => item.rank === 3);
  const restList = LEAGUE_LEADERBOARD.filter((item) => item.rank > 3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.leagueContainer}>
        
        {/* EN-TÊTE LIGUE */}
        <View style={styles.leagueHeaderCard}>
          <Text style={styles.leagueTitle}>🏆 Ligue Roroli</Text>
          <Text style={styles.leagueSubtitle}>Fin de la semaine dans 2 jours</Text>
          <View style={styles.zoneTag}>
            <Text style={styles.zoneTagText}>Top 3 qualifiés pour la Ligue Diamant 💎</Text>
          </View>
        </View>

        {/* PODIUM TOP 3 */}
        <View style={styles.podiumSection}>
          {top2 && (
            <View style={[styles.podiumSpot, styles.spotRank2]}>
              <Text style={styles.crownEmoji}>🥈</Text>
              <View style={styles.podiumAvatarWrapper}>
                <Text style={styles.podiumAvatar}>{top2.avatar}</Text>
              </View>
              <Text style={styles.podiumName} numberOfLines={1}>{top2.name}</Text>
              <Text style={styles.podiumXp}>{top2.xp} XP</Text>
              <View style={[styles.podiumBar, styles.barRank2]}>
                <Text style={styles.podiumRankNum}>2</Text>
              </View>
            </View>
          )}

          {top1 && (
            <View style={[styles.podiumSpot, styles.spotRank1]}>
              <Text style={styles.crownEmoji}>👑</Text>
              <View style={[styles.podiumAvatarWrapper, styles.avatarWrapperRank1]}>
                <Text style={styles.podiumAvatar}>{top1.avatar}</Text>
              </View>
              <Text style={styles.podiumName} numberOfLines={1}>{top1.name}</Text>
              <Text style={styles.podiumXp}>{top1.xp} XP</Text>
              <View style={[styles.podiumBar, styles.barRank1]}>
                <Text style={styles.podiumRankNum}>1</Text>
              </View>
            </View>
          )}

          {top3 && (
            <View style={[styles.podiumSpot, styles.spotRank3]}>
              <Text style={styles.crownEmoji}>🥉</Text>
              <View style={styles.podiumAvatarWrapper}>
                <Text style={styles.podiumAvatar}>{top3.avatar}</Text>
              </View>
              <Text style={styles.podiumName} numberOfLines={1}>{top3.name}</Text>
              <Text style={styles.podiumXp}>{top3.xp} XP</Text>
              <View style={[styles.podiumBar, styles.barRank3]}>
                <Text style={styles.podiumRankNum}>3</Text>
              </View>
            </View>
          )}
        </View>

        {/* LISTE DES AUTRES JOUEURS */}
        <Text style={styles.sectionTitle}>Classement Général</Text>
        <View style={styles.rankingList}>
          {restList.map((player) => (
            <View
              key={player.id}
              style={[
                styles.rankCard,
                player.isUser && styles.userRankCard,
              ]}
            >
              <Text style={styles.rankNumber}>#{player.rank}</Text>
              <View style={styles.rankAvatarBg}>
                <Text style={styles.rankAvatar}>{player.avatar}</Text>
              </View>
              <View style={styles.rankInfo}>
                <Text style={[styles.rankName, player.isUser && styles.userRankName]}>
                  {player.name}
                </Text>
              </View>
              <Text style={styles.rankXp}>{player.xp} XP</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E6ECF5',
  },
  leagueContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  leagueHeaderCard: {
    backgroundColor: '#E6ECF5',
    borderRadius: 24,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  leagueTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  leagueSubtitle: {
    fontSize: 13,
    color: '#718096',
    marginTop: 4,
  },
  zoneTag: {
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#3182CE',
  },
  zoneTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#2B6CB0',
  },
  podiumSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 16,
  },
  podiumSpot: {
    alignItems: 'center',
    width: '30%',
    marginHorizontal: 4,
  },
  spotRank1: {
    marginBottom: 0,
  },
  spotRank2: {
    marginBottom: -10,
  },
  spotRank3: {
    marginBottom: -20,
  },
  crownEmoji: {
    fontSize: 22,
    marginBottom: 4,
  },
  podiumAvatarWrapper: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    borderWidth: 2,
    borderColor: '#A0AEC0',
  },
  avatarWrapperRank1: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderColor: '#F6E05E',
    borderWidth: 3,
  },
  podiumAvatar: {
    fontSize: 28,
  },
  podiumName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
  },
  podiumXp: {
    fontSize: 11,
    color: '#718096',
    fontWeight: '600',
    marginBottom: 8,
  },
  podiumBar: {
    width: '100%',
    backgroundColor: '#CBD5E0',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barRank1: {
    height: 110,
    backgroundColor: '#F6E05E',
  },
  barRank2: {
    height: 85,
    backgroundColor: '#CBD5E0',
  },
  barRank3: {
    height: 65,
    backgroundColor: '#ED8936',
  },
  podiumRankNum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2D3748',
    marginTop: 20,
    marginBottom: 12,
  },
  rankingList: {
    gap: 10,
  },
  rankCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6ECF5',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 18,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userRankCard: {
    borderWidth: 2,
    borderColor: '#4A90E2',
    backgroundColor: '#EBF8FF',
  },
  rankNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#718096',
    width: 32,
  },
  rankAvatarBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6ECF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  rankAvatar: {
    fontSize: 20,
  },
  rankInfo: {
    flex: 1,
  },
  rankName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
  userRankName: {
    fontWeight: 'bold',
    color: '#2B6CB0',
  },
  rankXp: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
});
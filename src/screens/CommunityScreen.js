import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';

export default function CommunityScreen() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Jean-Marc',
      avatar: '👨‍💻',
      level: 'Niveau 4',
      time: 'Il y a 15 min',
      content: 'Ki diferans ki genyen ant "Bonswa" ak "Maniè"? Èske yo ka itilize nan menm moman an?',
      likes: 8,
      comments: 3,
      isLiked: false,
    },
    {
      id: 2,
      author: 'Florence',
      avatar: '👩‍🏫',
      level: 'Mentorat',
      time: 'Il y a 1h',
      content: 'Proverbe du jour : "Kafou pa konn moun". N\'hésitez pas à partager votre explication ci-dessous ! 🇭🇹',
      likes: 24,
      comments: 7,
      isLiked: true,
    },
    {
      id: 3,
      author: 'Pierre',
      avatar: '🎓',
      level: 'Niveau 2',
      time: 'Il y a 3h',
      content: 'Je viens de finir l\'Unité 1 sans aucune erreur ! Merci la communauté pour les astuces sur la prononciation ! 🎉',
      likes: 19,
      comments: 2,
      isLiked: false,
    },
  ]);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          };
        }
        return post;
      })
    );
  };

  const handlePublish = () => {
    if (!newPost.trim()) return;
    const createdPost = {
      id: Date.now(),
      author: 'Moi',
      avatar: '👤',
      level: 'Niveau 1',
      time: 'À l\'instant',
      content: newPost,
      likes: 0,
      comments: 0,
      isLiked: false,
    };
    setPosts([createdPost, ...posts]);
    setNewPost('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* EN-TÊTE DE LA PAGE */}
        <View style={styles.header}>
          <Text style={styles.title}>Communauté Kreyòl</Text>
          <Text style={styles.subtitle}>
            Échangez avec d'autres passionnés et posez vos questions.
          </Text>
        </View>

        {/* CARTE DES SALONS EN DIRECT */}
        <View style={styles.eventCard}>
          <View style={styles.eventHeader}>
            <Text style={styles.eventBadge}>🔴 EN DIRECT</Text>
            <Text style={styles.eventUsers}>🎙️ 18 participants</Text>
          </View>
          <Text style={styles.eventTitle}>Atelier de conversation vocale</Text>
          <Text style={styles.eventDesc}>Rejoignez le salon vocal pour pratiquer votre compréhension orale.</Text>
          <TouchableOpacity style={styles.eventBtn} activeOpacity={0.8}>
            <Text style={styles.eventBtnText}>Rejoindre le salon</Text>
          </TouchableOpacity>
        </View>

        {/* ZONE DE PUBLICATION */}
        <View style={styles.createPostCard}>
          <TextInput
            style={styles.input}
            placeholder="Posez une question ou partagez vos progrès..."
            placeholderTextColor="#A0AEC0"
            value={newPost}
            onChangeText={setNewPost}
            multiline
          />
          <View style={styles.createPostFooter}>
            <TouchableOpacity style={styles.postBtn} onPress={handlePublish} activeOpacity={0.8}>
              <Text style={styles.postBtnText}>Publier</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* FIL DE DISCUSSION */}
        <Text style={styles.sectionTitle}>Discussions récentes</Text>

        {posts.map((post) => (
          <View key={post.id} style={styles.postCard}>
            {/* ENTÊTE DE POST */}
            <View style={styles.postHeader}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>{post.avatar}</Text>
              </View>
              <View style={styles.authorInfo}>
                <View style={styles.authorRow}>
                  <Text style={styles.authorName}>{post.author}</Text>
                  <Text style={styles.levelTag}>{post.level}</Text>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>
            </View>

            {/* CONTENU */}
            <Text style={styles.postContent}>{post.content}</Text>

            {/* ACTIONS (J'AIME / COMMENTER) */}
            <View style={styles.postActions}>
              <TouchableOpacity
                style={[styles.actionBtn, post.isLiked && styles.likedBtn]}
                onPress={() => handleLike(post.id)}
              >
                <Text style={styles.actionIcon}>{post.isLiked ? '❤️' : '🤍'}</Text>
                <Text style={[styles.actionText, post.isLiked && styles.likedText]}>
                  {post.likes}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionText}>{post.comments} commentaires</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  eventCard: {
    backgroundColor: '#2B6CB0',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventBadge: {
    backgroundColor: '#E53E3E',
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  eventUsers: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  eventDesc: {
    fontSize: 13,
    color: '#E2E8F0',
    marginBottom: 14,
  },
  eventBtn: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  eventBtnText: {
    color: '#2B6CB0',
    fontWeight: 'bold',
    fontSize: 13,
  },
  createPostCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  input: {
    fontSize: 14,
    color: '#2D3748',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  createPostFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
    paddingTop: 8,
  },
  postBtn: {
    backgroundColor: '#3182CE',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  postBtnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 12,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 20,
  },
  authorInfo: {
    flex: 1,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
    marginRight: 8,
  },
  levelTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#3182CE',
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  postTime: {
    fontSize: 11,
    color: '#A0AEC0',
  },
  postContent: {
    fontSize: 14,
    color: '#2D3748',
    lineHeight: 20,
    marginBottom: 12,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EDF2F7',
    paddingTop: 10,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  likedBtn: {
    backgroundColor: '#FED7D7',
  },
  actionIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#718096',
  },
  likedText: {
    color: '#E53E3E',
  },
});
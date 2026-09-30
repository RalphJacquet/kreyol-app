import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import MainTabNavigator from './src/navigation/MainTabNavigator';
import HomeScreen from './src/screens/HomeScreen';
import LearnScreen from './src/screens/LearnScreen';
import LeagueScreen from './src/screens/LeagueScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  const renderScreen = () => {
    switch (currentTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Learn':
        return <LearnScreen />;
      case 'League':
        return <LeagueScreen />;
      case 'Community':
        return <CommunityScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#E6ECF5" />
      
      <View style={styles.screenWrapper}>{renderScreen()}</View>

      <MainTabNavigator currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    height: '100vh',
    backgroundColor: '#E6ECF5',
  },
  screenWrapper: {
    flex: 1,
  },
});
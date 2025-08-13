import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { brandColors } from './styles/colors';
import HomeScreen from './screens/Home';
import RequirementForm from './screens/RequirementForm';
import Feedback from './screens/Feedback';
import FragranceRating from './screens/FragranceRating';
import ComponentShowcase from './screens/ComponentShowcase';
import { RootStackParamList } from './navigation/types';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: brandColors.background.primary,
            shadowColor: brandColors.shadow.light,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 2,
          },
          headerTintColor: brandColors.text.primary,
          headerTitleStyle: {
            fontWeight: '600',
            color: brandColors.text.primary,
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'AdminPerfume Mobile' }}
        />
        <Stack.Screen 
          name="RequirementForm" 
          component={RequirementForm}
          options={{ title: '需求定义表单' }}
        />
        <Stack.Screen 
          name="Feedback" 
          component={Feedback}
          options={{ title: '反馈表单' }}
        />
        <Stack.Screen 
          name="FragranceRating" 
          component={FragranceRating}
          options={{ title: '香调评分' }}
        />
        <Stack.Screen 
          name="ComponentShowcase" 
          component={ComponentShowcase}
          options={{ title: '组件展示' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
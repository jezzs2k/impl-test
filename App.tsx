/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {UserScreen, UserDetailScreen} from './src/screens';
import store from './src/stores';
import {responsiveFontSetting, widthPercentageToDP} from './src/utils';
import {StargazersScreen} from './src/screens/stargazers';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="User"
            screenOptions={{
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name={'User'}
              component={UserScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'UserDetail'}
              component={UserDetailScreen}
              options={{
                headerLeft: ({onPress}) => (
                  <TouchableOpacity
                    style={styles.btnLeftStyle}
                    onPress={onPress}>
                    <AntDesign
                      name={'left'}
                      size={responsiveFontSetting(2.5)}
                    />
                  </TouchableOpacity>
                ),
                title: 'Loading process',
              }}
            />
            <Stack.Screen
              name={'Stargazers'}
              component={StargazersScreen}
              options={{
                headerLeft: ({onPress}) => (
                  <TouchableOpacity
                    style={styles.btnLeftStyle}
                    onPress={onPress}>
                    <AntDesign
                      name={'left'}
                      size={responsiveFontSetting(2.5)}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnLeftStyle: {
    padding: widthPercentageToDP(3),
  },
});

export default App;

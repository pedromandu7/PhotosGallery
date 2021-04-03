import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar, View } from 'react-native';

import GalleryScreen from '../screen/GalleryScreen';
import CameraScreen from '../screen/CameraScreen';

const RootStack = createStackNavigator()

const RootNavigation = ()=>{
    return(
<NavigationContainer>
    <View style={{flex:1}}>
        <StatusBar/>
        <RootStack.Navigator
        initialRouteName="CameraScreen"
        >
            <RootStack.Screen
            name= "GalleryScreen"
            component={GalleryScreen}
            options={{
              headerShown: false,
            }}/>

            <RootStack.Screen
            name= "CameraScreen"
            component={CameraScreen}
            options={{
              headerShown: false,
            }}/>
        </RootStack.Navigator>
    </View>
</NavigationContainer>
    )
}
export default RootNavigation;

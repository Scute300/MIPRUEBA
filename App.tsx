import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AsyncStorage, View} from 'react-native'
import Home from './pages/Home/Home'
import Categoria from './pages/Categoria/Categoria'

const Myapp = createStackNavigator();

interface MyProps {
    navigation:any
}

interface MyState {
}

export default class App extends React.Component<MyProps, MyState>{
    constructor(props:any){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
          <NavigationContainer>
            <Myapp.Navigator headerMode='none' initialRouteName="Home">
              <Myapp.Screen name="Home" component={Home}/>
              <Myapp.Screen name="Categoria" component={Categoria}/>
            </Myapp.Navigator>
          </NavigationContainer>
        )
    }

}
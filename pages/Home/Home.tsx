import * as React from 'react';
import { View,StyleSheet,Text } from 'react-native'
import Categorias from './Componentes/Categorias'
import Reservas from './Componentes/Reservas'
import Footer from './Componentes/Footer'

interface MyProps {
    navigation:any
}

interface MyState {
}
export default class Home extends React.Component<MyProps, MyState>{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.textheader}>
                        Reservas
                    </Text>
                </View>
                <View style = {styles.interiorContainer}>
                    <Text style = {styles.titles}>
                        Categorias
                    </Text>
                    <Categorias
                    navigation={this.props.navigation}
                    />
                    <Text style = {styles.titles}>
                        Mis Reservas
                    </Text>
                    <Reservas/>
                </View>
                <View style={styles.footer}>
                    <Footer/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F6F5F5'
    },
    header:{
        height: 50,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    interiorContainer: {
        width: '100%',
        paddingHorizontal: 5,
        paddingTop: 5
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textheader:{
        fontWeight: 'bold'
    },
    footer: {
        justifyContent: 'flex-end',
        flex: 1
    }
})
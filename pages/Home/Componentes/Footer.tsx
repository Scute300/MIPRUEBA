import * as React from 'react';
import { ImageBackground,View,StyleSheet,Text, TouchableOpacity,ScrollView } from 'react-native'
import { Ionicons,FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class Footer extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style={styles.boxes}>
                <Ionicons name="md-home" size={32} style={{color:'gray'}}/>
                <Text style = {styles.text}>
                    Inicio
                </Text>
                </View>
                <View style={styles.boxes}>
                <Ionicons name="md-notifications" size={32} color="gray"/>
                <Text style = {styles.text}>
                    Reservas
                </Text>
                </View>
                <View style={styles.boxes}>
                <FontAwesome name="dollar" size={30} color="gray" />
                <Text style = {styles.text}>
                    Pagos
                </Text>
                </View>
                <View style={styles.boxes}>
                    <FontAwesome name="book" size={30} color="gray" />
                <Text style = {styles.text}>
                    Directorio
                </Text>
                </View>
                <View style={styles.boxes}>
                <MaterialIcons name="local-offer" size={30} color="gray" />
                <Text style = {styles.text}>
                    Promos
                </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    boxes: {
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        flex: 1
    },
    text: {
        fontSize: 6,
        color: 'gray'
    }
})
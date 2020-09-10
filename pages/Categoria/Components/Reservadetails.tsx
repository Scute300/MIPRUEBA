import * as React from 'react';
import { View,StyleSheet,Text,TouchableOpacity, Button,TextInput } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 

interface MyProps {
    heigth: number
    changemenu: any
}

interface MyState {
}
export default class Reservadetails extends React.Component<MyProps, MyState>{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {[styles.block, {height: this.props.heigth}]}>

                </View>
                <View style = {styles.box}>
                    <View style = {styles.headerbox}>
                        <TouchableOpacity onPress = {()=>{this.props.changemenu(1)}}>
                            <Text style={{color:'white'}}>
                                X
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.titlebox}>
                        <Text style={styles.text}>
                            Datos reserva
                        </Text>
                    </View>
                    <View style = {styles.bodybox}>
                        <Text style = {{fontWeight: 'bold', marginVertical:3}}>
                            Información
                        </Text>
                        <View style = {styles.boxsection}>
                            <FontAwesome name="map-marker" size={50} color='#0FBCF9'/>
                            <View style={styles.boxsubsection}>
                                <Text style = {styles.textsubsection}>
                                    Lugar
                                </Text>
                                <Text>
                                    Cancha multiple
                                </Text>
                            </View>
                        </View>
                        <View style = {styles.boxsection}>
                            <FontAwesome name="calendar-o" size={40} color='#0FBCF9' />
                            <View style={styles.boxsubsection}>
                                <Text style = {styles.textsubsection}>
                                    Fecha
                                </Text>
                                <Text>
                                    29 Julio 2020
                                </Text>
                            </View>
                        </View>
                        <View style = {styles.boxsection}>
                            <FontAwesome name="calendar-o" size={40} color='#0FBCF9' />
                            <View style={styles.boxsubsection}>
                                <Text style = {styles.textsubsection}>
                                    Hora
                                </Text>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {styles.textsubsection}>Inicio:</Text>
                                    <Text>07:00 AM</Text>
                                </View>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {styles.textsubsection}>Fin:</Text>
                                    <Text>08:00 AM</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{fontWeight: 'bold'}}>
                            Observación
                        </Text>
                        <TextInput placeholder="Escriba aquí"/>
                         <View style={styles.footerbox}>
                            <Button title="Crear reserva" onPress={()=>{console.log('ss')}}>
                            </Button>
                         </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        position: 'absolute'
    },
    block: {
        width: '200%', 
        backgroundColor: 'black', 
        position:'absolute',
        opacity: .6
    },
    box: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 70,
        overflow: 'hidden',
    },
    headerbox:{
        flexDirection: 'row',
        height:35,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
    },
    titlebox:{
        width: '100%',
        alignItems : 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0FBCF9'
    },
    bodybox: {
        padding: 10
    },
    boxsection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5
    },
    boxsubsection:{
        paddingHorizontal: 10
    },
    textsubsection:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    footerbox: {
        justifyContent: 'center',
        paddingVertical: 15
    }
})
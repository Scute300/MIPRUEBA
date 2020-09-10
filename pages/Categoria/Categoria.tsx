import * as React from 'react';
import { View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';
import Reservadetails from './Components/Reservadetails'
import functions from './Components/functions/functions'

interface MyProps {
    navigation:any
}

interface MyState {
    size:number,
    menu:number
}
export default class Categoria extends React.Component<MyProps, MyState>{
    constructor(props:any){
        super(props);
        this.state = {
            size: 0,
            menu: 1
        }
    }

    measureview(event:any){
        const sizescreenheader : number = functions.size(event)
        this.setState({size : sizescreenheader})
    }
    changemenu = (status:number) =>{
        this.setState({menu:status})
    }
    render(){
        return(
            <View style = {styles.container}
            onLayout={(event) => this.measureview(event)}>
            <View style = {styles.header}>
                <View style = {styles.headericon}>
                    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}}>
                        <AntDesign name="left" size={24} color="gray"/>
                    </TouchableOpacity>
                </View>
                <View style = {styles.headertitle}>
                    <Text style = {styles.textheader}>
                        Reservas
                    </Text>
                </View>
            </View>
            <View style = {styles.interiorcontainer}>
                <Text style = {styles.titles}>
                    Seleccionar categoria
                </Text>
                <View style = {styles.exteriorbox}>
                    <View style = {styles.box}>
                        <Text style = {styles.boxtitle}>
                            Tenis
                        </Text>
                    </View>
                </View>
                <Text style = {styles.titles}>
                    Observaciones
                </Text>
                <View>
                    <Text style = {styles.text}>
                        Una raqueta de tenis es el instrumento necesario para
                        practicar este deporte ya que sirve para golpear la
                        bola y cumplir el objetivo principal del juego
                    </Text>
                </View>
                <Text style = {styles.titles}>
                    Valor de la reserva
                </Text>
                <View>
                    <Text style = {styles.text}>
                        No tiene valor de reserva
                    </Text>
                </View>
                <Text style = {styles.titles}>
                    Horarios disponibles
                </Text>
                <ScrollView>
                    <TouchableOpacity
                    onPress={()=>{this.changemenu(2)}}>
                        <View style = {styles.horariobox}>
                            <Text style = {styles.horariotext}>07:00 AM - 08:00 AM </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {this.datosreserva()}
            </View>
        )
    }
    datosreserva(){
        if(this.state.menu == 2){
            return(
                <Reservadetails
                changemenu={this.changemenu}
                heigth={this.state.size}
                />
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    header:{
        height: 50,
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        flexDirection: 'row'
    },
    textheader:{
        fontWeight: 'bold'
    },
    headericon: {
        flex: .6
    },
    headertitle:{
        flex:1
    },
    interiorcontainer:{
        paddingHorizontal: 10,
        paddingTop: 10
    },
    titles: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    exteriorbox:{
        marginBottom: 30
    },
    box:{
        width: 120,
        height: 180,
        borderRadius: 20,
        backgroundColor: 'gray',
        alignItems:'center',
        justifyContent:'center'
    },
    boxtitle:{
        position: 'absolute',
        top: 180,
        fontWeight: 'bold'
    },
    text:{
        fontSize: 12
    },
    horariobox:{
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    horariotext:{
        fontSize: 20
    }
    
})
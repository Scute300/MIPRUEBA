import * as React from 'react';
import { ImageBackground,View,StyleSheet,Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface MyProps {
    navigation:any
}

interface MyState {
}
export default class Categorias extends React.Component<MyProps, MyState>{
    render(){
        return(
            <View style = {styles.boxescontainer}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Categoria')}}>
                <View style = {styles.boxes}>
                    <ImageBackground source={{uri : 'https://cdn.pixabay.com/photo/2020/05/19/14/41/sakura-5191068_960_720.jpg'}} style={styles.image}>
                        <Text style = {styles.text}>Salud y</Text>
                        <Text style = {styles.text}>Bienestar</Text>
                    </ImageBackground>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style = {styles.boxes}>
                    <ImageBackground source={{uri : 'https://s3.amazonaws.com/mercado-ideas/wp-content/uploads/sites/2/2019/10/22095220/bigstock-raqueta-de-tenis-640x426.jpg'}} style={styles.image}>
                        <Text style= {styles.text}>Deportes</Text>
                    </ImageBackground>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style = {styles.boxes}>
                    <ImageBackground source={{uri : 'https://img.taste.com.au/O_n0XhqI/taste/2017/09/popcorn-130176-1.jpg'}} style={styles.image}>
                        <Text style= {styles.text}>Entretenimiento</Text>
                    </ImageBackground>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style = {styles.boxes}>
                    <ImageBackground source={{uri : 'https://www.lovepanky.com/wp-content/uploads/images/2015/04/player-vs-gentleman.jpg'}} style={styles.image}>
                        <Text style= {styles.text}>Salones</Text>
                    </ImageBackground>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxescontainer: {
        width: '100%'
    },
    boxes: {
        width: '100%',
        height: 75,
        borderRadius: 15,
        marginVertical: 2.5,
        overflow: 'hidden'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      padding: 10
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    }
})
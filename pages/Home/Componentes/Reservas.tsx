import * as React from 'react';
import { View,StyleSheet,Text,ScrollView } from 'react-native'

export default class Reservas extends React.Component{
    render(){
        return(
            <ScrollView style={{height: 90}}>
                <View style={styles.boxes}>
                    <View style = {styles.date}>
                        <Text style = {styles.datetext}>
                            29
                        </Text>
                        <Text style = {[styles.datetext, {bottom : 10}]}>
                            AGO
                        </Text>
                    </View>
                    <View style = {styles.boxcenter}>
                        <Text style = {styles.boxtitle}>
                            Cancha individual
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            14:00 - 20:00
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            Reserva sin costo
                        </Text>
                    </View>
                    <View style = {styles.boxend}>
                        <View style = {styles.boxendicon}>

                        </View>
                    </View>
                </View>
                <View style={styles.boxes}>
                    <View style = {styles.date}>
                        <Text style = {styles.datetext}>
                            29
                        </Text>
                        <Text style = {[styles.datetext, {bottom : 10}]}>
                            AGO
                        </Text>
                    </View>
                    <View style = {styles.boxcenter}>
                        <Text style = {styles.boxtitle}>
                            Cancha individual
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            14:00 - 20:00
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            Reserva sin costo
                        </Text>
                    </View>
                    <View style = {styles.boxend}>
                        <View style = {styles.boxendicon}>

                        </View>
                    </View>
                </View>
                <View style={styles.boxes}>
                    <View style = {styles.date}>
                        <Text style = {styles.datetext}>
                            29
                        </Text>
                        <Text style = {[styles.datetext, {bottom : 10}]}>
                            AGO
                        </Text>
                    </View>
                    <View style = {styles.boxcenter}>
                        <Text style = {styles.boxtitle}>
                            Cancha individual
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            14:00 - 20:00
                        </Text>
                        <Text style = {styles.boxhorarios}>
                            Reserva sin costo
                        </Text>
                    </View>
                    <View style = {styles.boxend}>
                        <View style = {styles.boxendicon}>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    boxes:{
        width: '100%',
        flexDirection: "row",
        backgroundColor: 'white',
        height: 70,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        paddingEnd: 5,
        marginVertical: 2
    },
    date:{
        height: 85,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0FBCF9',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    datetext:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    boxcenter:{
        flex: 1,
        marginHorizontal: 5
    },
    boxtitle: {
        fontWeight: 'bold',
        fontSize: 13
    },
    boxhorarios: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'gray',
        lineHeight: 13
    },
    boxend:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: 80
    },
    boxendicon:{
        width: 45,
        height: 45,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#0FBCF9',
    }
})
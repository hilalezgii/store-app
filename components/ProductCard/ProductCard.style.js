import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        gap: 10,
        flex: 1,
        backgroundColor:'#eceff1',
        borderRadius:5,
        padding:5,
        margin:8,
    },
    image:{         
        height: Dimensions.get('window').height/5,
        resizeMode:'contain',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
    },
    price:{
        fontSize:13,
        color:'grey',
        fontWeight:'bold',
    },
    in_stock_status:{
        color:'red',
        fontSize:15,
        fontWeight:'bold',
        textTransform: 'uppercase',
    },



})
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import "../../global.css"


export default function SplashScreen() {

    return (

        <SafeAreaView className="flex:1 justify-center items-center ">

            <StatusBar hidden={true} />

            <Image source={require("../../assets/Image20250911225927.png")} 
            style={{height:180, width:200}} />



            <View style={styles.bottomContainer} >
        <Text style ={styles.companyName}>POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}</Text>
        <Text style={styles.appVersion}>VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}</Text>
        </View>
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    companyName:{
        color:"#475569",
        fontWeight:"bold",
        fontSize:12,
    },
    appVersion:{
        color:"#475569",
        fontWeight:"bold",
        fontSize:10,
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
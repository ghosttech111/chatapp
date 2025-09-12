
import { Animated, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import "../../global.css"
import CircleShape from "../components/CircleShape";
import { useEffect, useRef } from "react";


export default function SplashScreen() {

    let fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {

        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start;


    }, [fadeIn]);

    return (

        <View className="flex-1  items-center justify-center">

            
            <CircleShape
                width={200}
                height={200}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-25}
                leftValue={-50}
            />
            <CircleShape
                width={160}
                height={160}
                fillColor="#09090b"
                borderRadius={999}
                topValue={-5}
                leftValue={60}
            />

            <Animated.View style ={{opacity: fadeIn}}>
            <Image source={require("../../assets/Image20250911225927.png")}
                style={{ height: 180, width: 200 }} />
<StatusBar hidden={true} />

                </Animated.View>


            <View className="absolute bottom-0 mb-10 flex-1 flex-col justify-center items-center">

                <Text className="text-xs font-bold text-gray-500">
                    POWERED BY: {process.env.EXPO_PUBLIC_APP_OWNER}
                </Text>
                <Text className="text-xs font-bold text-grey-500">
                    VERSION: {process.env.EXPO_PUBLIC_APP_VERSION}
                </Text>
            </View>
        </View>

    );

}


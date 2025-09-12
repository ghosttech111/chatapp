import { View, } from "react-native";


interface Circle {

    width: number;
    height: number;
    fillColor: string;
    borderRadius: number;
    topValue?: number;
    rightValue?: number;
    bottomValue?: number;
    leftValue?: number
}


export default function CircleShape({
    width,
    height,
    fillColor,
    borderRadius,
    topValue,
    rightValue,
    bottomValue,
    leftValue,

}: Circle) {

    return (
    <View
        style={{

            width: width,
            height: height,
            backgroundColor: fillColor,
            borderRadius: borderRadius,
            position: 'absolute',
            ...(topValue !== undefined && { topValue }),
            ...(rightValue !== undefined && { rightValue }),
            ...(bottomValue !== undefined && { bottomValue }),
            ...(leftValue !== undefined && { leftValue }),
        }}
    ></View>
    );

}
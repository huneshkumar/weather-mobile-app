import React from "react";
import { Text, View,StyleSheet } from "react-native";

const Weather = () => {
  return (
    <View style={styles.container}>
        <Text>
            Hello weather
        </Text>
    </View>
  );
};

export default Weather;

const styles=StyleSheet.create({
    container:{
        flex:1,
    },

})

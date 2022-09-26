import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main:{temp,humidity,feels_like,temp_max,temp_min},
    wind:{speed},
    sys:{sunraise,sunset}
  } = weatherData;

  console.log(weatherData)
  return (
   <SafeAreaView style={styles.container}>
    <View style={{alignItems:"center"}} >
        <Text style={styles.title}>{name}</Text>
    </View>
    <View style={styles.logo}>
        <Image styles={styles.largeIcon} source={{uri:`http://openweathermap.org/img/wn/${icon}.png`}} />
        <Text style={styles.currentTemp}>{temp} °C</Text>
    </View>
    <Text style={styles.description}>{description}</Text>
    <View style={styles.extraInfo} >
        <View style={styles.info}>
            {/* <Image style={styles.smallIcon}  source={}/> */}

        </View>
    </View>
 

   </SafeAreaView>
  );
};

export default WeatherInfo;

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:15
    },
    title:{
        width:"100%",
        textAlign:"center",
        fontSize:30,
        color:"#e96e50",
        fontWeight:"bold",
        marginTop:15,
     
    },
    logo:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    largeIcon:{
        width:200,
        height:200,
    },
    currentTemp:{
        fontSize:30,
        fontWeight:"700",
        textAlign:"center",
    },
    description:{
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        marginTop:10,

    }

})

import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import Constants from "expo-constants";
import WeatherInfo from "./WeatherInfo";


const API_KEY = "d6380bea4717375d5eb2b03bd136c0af";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //function to fetch weather data

  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(false);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData("Karachi");
  }, []);

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color="red" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
      <WeatherInfo weatherData={weatherData} />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF5DB",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    backgroundColor: "#C5D2EF",
    alignItems: "center",
    height: 80,
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 29,
    fontWeight: "bold",
  },
});

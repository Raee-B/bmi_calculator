import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

const UnderWeight = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.data}>
        <View style={styles.dataTitle}>
          <Text style={styles.categoryText}>Underweight Recommendations</Text>
          <Text style={styles.subText}> (BMI less than 18.5)</Text>
        </View>
        <View style={styles.dataItems}>
          <View style={styles.uItem}>
            <Text style={styles.spanText}>Diet:</Text>
            <Text style={styles.recList}>
              Focus on nutrient-dense foods to gain weight healthily. Increase
              your intake of proteins, healthy fats, whole grains, fruits, and
              vegetables. Consider consulting a nutritionist for a personalized
              meal plan.
            </Text>
          </View>

          <View style={styles.uItem}>
            <Text style={styles.spanText}>Exercise:</Text>
            <Text style={styles.recList}>
              Engage in strength training exercises to build muscle mass. Avoid
              excessive cardio, as it burns calories that could be used for
              gaining weight.
            </Text>
          </View>

          <View style={styles.uItem}>
            <Text style={styles.spanText}>Sleep:</Text>
            <Text style={styles.recList}>
              Aim for 7-9 hours of sleep per night to support overall health and
              recovery.
            </Text>
          </View>

          <View style={styles.uItem}>
            <Text style={styles.spanText}>Rest:</Text>
            <Text style={styles.recList}>
              Manage stress and consider relaxation techniques like meditation
              or yoga.
            </Text>
          </View>

          <View style={styles.uItem}>
            <Text style={styles.spanText}>Consult a healthcare provider:</Text>
            <Text style={styles.recList}>
              Underweight individuals should seek medical advice to rule out any
              underlying health conditions contributing to low weight.
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.reminder}>
              Note: These recommendations are general and might not suit
              everyone's needs. If you have specific health concerns or
              conditions, it's essential to consult healthcare professionals for
              personalized advice. Regular check-ups can ensure your safety and
              well-being, so don't hesitate to seek professional help when
              necessary.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UnderWeight;

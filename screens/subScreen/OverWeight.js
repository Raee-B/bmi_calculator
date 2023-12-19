import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

const OverWeight = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.data}>
        <View style={styles.dataTitle}>
          <Text style={styles.categoryText}>Overweight Recommendations</Text>
          <Text style={styles.subText}>(BMI between 25 and 29.9)</Text>
        </View>
        <View style={styles.dataItems}>
          <View style={styles.ovItem}>
            <Text style={styles.spanText}>Diet:</Text>
            <Text style={styles.recList}>
              Focus on portion control and reduce intake of processed foods,
              sugary drinks, and high-calorie snacks. Increase consumption of
              fruits, vegetables, whole grains, lean proteins, and healthy fats.
            </Text>
          </View>

          <View style={styles.ovItem}>
            <Text style={styles.spanText}>Exercise:</Text>
            <Text style={styles.recList}>
              Aim for at least 150 minutes of moderate-intensity aerobic
              activity or 75 minutes of vigorous-intensity activity per week.
              Include strength training exercises at least two days a week.
            </Text>
          </View>

          <View style={styles.ovItem}>
            <Text style={styles.spanText}>Sleep:</Text>
            <Text style={styles.recList}>
              Prioritize 7-9 hours of quality sleep each night, as lack of sleep
              can affect appetite regulation and lead to weight gain.
            </Text>
          </View>

          <View style={styles.ovItem}>
            <Text style={styles.spanText}>Rest:</Text>
            <Text style={styles.recList}>
              Manage stress through exercise, relaxation techniques, and
              hobbies.
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

export default OverWeight;

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";
const Obesity = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.data}>
        <View style={styles.dataTitle}>
          <Text style={styles.categoryText}>Obesity Recommendations</Text>
          <Text style={styles.subText}>(BMI of 30 or higher)</Text>
        </View>
        <View style={styles.dataItems}>
          <View style={styles.obItem}>
            <Text style={styles.spanText}>Diet:</Text>
            <Text style={styles.recList}>
              Focus on a calorie-controlled diet with an emphasis on whole,
              unprocessed foods. Consider consulting a registered dietitian for
              personalized meal planning and guidance.
            </Text>
          </View>

          <View style={styles.obItem}>
            <Text style={styles.spanText}>Exercise:</Text>
            <Text style={styles.recList}>
              Aim for at least 150 minutes of moderate-intensity aerobic
              activity or 75 minutes of vigorous-intensity activity per week.
              Incorporate strength training exercises on two or more days a
              week.
            </Text>
          </View>

          <View style={styles.obItem}>
            <Text style={styles.spanText}>Sleep:</Text>
            <Text style={styles.recList}>
              Prioritize 7-9 hours of quality sleep each night, as poor sleep
              can negatively impact metabolism and food choices.
            </Text>
          </View>

          <View style={styles.obItem}>
            <Text style={styles.spanText}>Rest:</Text>
            <Text style={styles.recList}>
              Manage stress and consider relaxation techniques like meditation
              or yoga.
            </Text>
          </View>

          <View style={styles.obItem}>
            <Text style={styles.spanText}>Consult a healthcare provider:</Text>
            <Text style={styles.recList}>
              Manage stress through physical activity, relaxation techniques,
              and hobbies. Consider mindfulness practices to help with emotional
              eating.
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

export default Obesity;

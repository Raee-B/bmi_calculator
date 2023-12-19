import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

import { styles } from "./styles";

const NormalWeight = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.data}>
        <View style={styles.dataTitle}>
          <Text style={styles.categoryText}>Normal Weight Recommendations</Text>
          <Text style={styles.subText}>(BMI between 18.5 and 24.9)</Text>
        </View>
        <View style={styles.dataItems}>
          <View style={styles.nItem}>
            <Text style={styles.spanText}>Diet:</Text>
            <Text style={styles.recList}>
              Maintain a balanced diet rich in fruits, vegetables, whole grains,
              lean proteins, and healthy fats. Portion control is key to prevent
              excessive calorie intake.
            </Text>
          </View>

          <View style={styles.nItem}>
            <Text style={styles.spanText}>Exercise:</Text>
            <Text style={styles.recList}>
              Aim for at least 150 minutes of moderate-intensity aerobic
              activity or 75 minutes of vigorous-intensity activity per week,
              along with muscle-strengthening activities on two or more days a
              week.
            </Text>
          </View>

          <View style={styles.nItem}>
            <Text style={styles.spanText}>Sleep:</Text>
            <Text style={styles.recList}>
              Prioritize 7-9 hours of quality sleep each night.
            </Text>
          </View>

          <View style={styles.nItem}>
            <Text style={styles.spanText}>Rest:</Text>
            <Text style={styles.recList}>
              Manage stress through relaxation techniques and hobbies. Take
              regular breaks if you have a sedentary job.
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.nReminder}>Keep your healthy lifestyle</Text>
            <Text style={styles.nReminder}>Stay fit!</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default NormalWeight;

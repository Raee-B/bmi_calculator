import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const classifications = [
  {
    range: "Under 18.5",
    category: "Underweight",
    color: "#0d00c9",
    background: "rgba(13, 0, 201, 0.2)",
  },
  {
    range: "18.5 - 24.9",
    category: "Normal Weight",
    color: "#00FF00",
    background: "rgba(0, 255, 0, 0.2)",
  },
  {
    range: "25 - 29.9",
    category: "Overweight",
    color: "#FFA500",
    background: "rgba(255, 165, 0, 0.2)",
  },
  {
    range: "30 - 34.9",
    category: "Obesity Class I",
    color: "#FF0000",
    background: "rgba(255, 0, 0, 0.2)",
  },
  {
    range: "35 - 39.9",
    category: "Obesity Class II",
    color: "#FF0000",
    background: "rgba(255, 0, 0, 0.2)",
  },
  {
    range: "Over 40",
    category: "Obesity Class III",
    color: "#FF0000",
    background: "rgba(255, 0, 0, 0.2)",
  },
];

const ResultScreen = ({ route, navigation }) => {
  const { bmi, category, message, gender } = route.params;

  const getColorForCategory = (category) => {
    const classification = classifications.find(
      (item) => item.category === category
    );
    return classification ? classification.color : "#000000";
  };

  const getBackgroundForCategory = (category) => {
    const classification = classifications.find(
      (item) => item.category === category
    );
    return classification ? classification.background : "#000000";
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.main}>
        <View style={styles.recDiv}>
          <Text style={styles.recText}>YOUR BMI RESULTS</Text>
        </View>
        <View
          style={[
            styles.result,
            {
              borderWidth: 2,
              borderColor: getColorForCategory(category),
              backgroundColor: getBackgroundForCategory(category),
            },
          ]}
        >
          <Text style={styles.resultSubText}>Classification:</Text>
          <Text
            style={[
              styles.resultText,
              { color: getColorForCategory(category) },
            ]}
          >
            {category}
          </Text>
        </View>
        <View
          style={[
            styles.result,
            {
              borderWidth: 2,
              borderColor: getColorForCategory(category),
              backgroundColor: getBackgroundForCategory(category),
            },
          ]}
        >
          <Text style={styles.resultSubText}>BMI:</Text>
          <Text
            style={[
              styles.resultText,
              { color: getColorForCategory(category) },
            ]}
          >
            {bmi}
          </Text>
          <Text style={styles.resultSubText2}>{message}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Recommendation", {
                bmi,
                classifications,
                getColorForCategory,
                getBackgroundForCategory,
                category,
              })
            }
          >
            <Text style={styles.buttonText}>See Recommendations</Text>
            <View style={styles.meterBar}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: getColorForCategory(category),
                  borderRadius: 5,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.classificationContainer]}>
          <Text style={styles.classificationTitle}>BMI Classifications:</Text>
          {classifications.map((item, index) => (
            <View key={index} style={styles.classificationItem}>
              <View style={styles.classificationRange}>
                <Text style={styles.classificationRangeText}>{item.range}</Text>
              </View>
              <View style={styles.classificationCategory}>
                <Text style={styles.classificationCategoryText}>
                  {item.category}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 80.2%)",
  },
  recDiv: {
    display: "flex",
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "transparent",
  },
  recText: {
    color: "#f0f0f0",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  result: {
    fontWeight: "bold",
    borderRadius: 110,
    width: 225,
    height: 225,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginBottom: 25,
  },
  resultText: {
    fontSize: 29,
    fontWeight: "900",
    textAlign: "center",
  },
  resultSubText: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
  },
  resultSubText2: {
    textAlign: "center",
    fontSize: 14,
    fontStyle: "italic",
    color: "#fff",
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "900",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  classificationContainer: {
    marginTop: 20,
    width: "90%",
    paddingHorizontal: 20,
    backgroundColor: "rgba(6, 159, 21, 0.3)",
    paddingVertical: 15,
    borderWidth: 0.5,
    borderColor: "rgba(6, 239, 21, 0.8)",
    borderRadius: 15,
  },
  classificationTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
  },
  classificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  classificationRange: {
    fontSize: 16,
    color: "#fff",
  },
  classificationRangeText: {
    color: "#fff",
  },
  classificationCategory: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 110,
  },
  classificationCategoryText: {
    color: "#fff",
  },
  meterBar: {
    height: 5,
    width: 100,
    alignSelf: "center",
    marginTop: 7,
    marginBottom: 15,
    backgroundColor: "#000",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default ResultScreen;

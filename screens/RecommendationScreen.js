import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RecommendationScreen = ({ route, navigation }) => {
  const {
    bmi,
    category,
    getColorForCategory,
    getBackgroundForCategory,
    classifications,
  } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <Text style={styles.resultSubText}>YOUR BMI:</Text>
        <Text
          style={[styles.resultText, { color: getColorForCategory(category) }]}
        >
          {bmi}
        </Text>
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

      <View style={styles.recDiv}>
        <Text style={styles.recText}>---- RECOMMENDATIONS ----</Text>
      </View>
      <TouchableOpacity
        style={styles.underweight}
        onPress={() => navigation.navigate("UnderWeight")}
      >
        <Text style={styles.buttonText}>Underweight</Text>
        <Text style={styles.buttonSubText}>(Under 18.5)</Text>
        <Text style={styles.descript}>
          Learn about healthy ways to gain weight and improve your overall
          well-being. Discover nutritious foods, exercises, and lifestyle
          changes that can help you achieve a balanced weight.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.normal}
        onPress={() => navigation.navigate("NormalWeight")}
      >
        <Text style={styles.buttonText}>Normal Weight</Text>
        <Text style={styles.buttonSubText}>(18.5 - 24.9)</Text>
        <Text style={styles.descript}>
          Explore tips for maintaining your current healthy weight. Understand
          the importance of a balanced diet, regular exercise, and mental
          well-being. Discover ways to sustain your fitness levels and overall
          health.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.overweight}
        onPress={() => navigation.navigate("OverWeight")}
      >
        <Text style={styles.buttonText}>Overweight</Text>
        <Text style={styles.buttonSubText}>(25 - 29.9)</Text>
        <Text style={styles.descript}>
          Find resources on effective weight management strategies. Get insights
          into calorie control, portion sizes, and engaging in physical
          activities. Discover how small changes in your lifestyle can lead to
          significant improvements.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.obesity}
        onPress={() => navigation.navigate("Obesity")}
      >
        <Text style={styles.buttonText}>Obesity</Text>
        <Text style={styles.buttonSubText}>(Over 30)</Text>
        <Text style={styles.descript}>
          Explore expert advice on managing obesity and related health issues.
          Learn about tailored diet plans, specialized exercises, and medical
          support available for individuals with obesity. Discover holistic
          approaches to improve your quality of life.
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 80.2%)",
  },
  result: {
    backgroundColor: "rgba(6, 159, 21, 0.3)",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 110,
    width: 210,
    height: 210,
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    marginTop: 25,
    marginBottom: 25,
  },
  resultText: {
    fontSize: 42,
    fontWeight: "900",
    textAlign: "center",
  },
  resultSubText: {
    fontSize: 12,
    textAlign: "center",
    color: "#f0f0f0",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    textDecorationStyle: "double",
    marginBottom: 0,
  },
  buttonSubText: {
    color: "#f0f0f0",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 5,
  },
  descript: {
    color: "#f0f0f0",
    lineHeight: 25,
    textAlign: "justify",
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
  recDiv: {
    display: "flex",
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#fff",
  },
  recText: {
    color: "#f0f0f0",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  underweight: {
    backgroundColor: "rgba(13, 0, 201, 0.3)",
    width: "92%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(13, 0, 201, 0.9)",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  normal: {
    backgroundColor: "rgba(0, 255, 0, 0.3)",
    width: "92%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(0, 255, 0, 0.7)",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  overweight: {
    backgroundColor: "rgba(255, 165, 0, 0.3)",
    width: "92%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(255, 165, 0, 0.7)",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  obesity: {
    backgroundColor: "rgba(255, 0, 0, 0.3)",
    width: "92%",
    padding: 15,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "rgba(255, 0, 0, 0.7)",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default RecommendationScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/Ionicons";
import Input from "../components/Input";

const HomeScreen = ({ navigation }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [gender, setGender] = useState("");

  const [bmiCategory, setBMICategory] = useState("");
  const [bmiMessage, setBMIMessage] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBMI] = useState(0);

  const bmiCategories = [
    {
      category: "Underweight",
      min: 0,
      max: 18.5,
      message: "You are underweight.",
    },
    {
      category: "Normal Weight",
      min: 18.5,
      max: 24.9,
      message: "You are in a healthy weight range.",
    },
    {
      category: "Overweight",
      min: 25,
      max: 29.9,
      message: "You are overweight.",
    },
    {
      category: "Obesity Class I",
      min: 30,
      max: 34.9,
      message: "You have obesity class I.",
    },
    {
      category: "Obesity Class II",
      min: 35,
      max: 39.9,
      message: "You have obesity class II.",
    },
    {
      category: "Obesity Class III",
      min: 40,
      max: Infinity,
      message: "You have obesity class III.",
    },
  ];

  const bmiFormula = () => {
    if (weight && height && age) {
      let weightInKg = weightUnit === "kg" ? weight : weight * 0.453592;

      let heightInMeters;
      if (heightUnit === "cm") {
        heightInMeters = height / 100;
      } else {
        const [feet, inches] = height.split("'");
        const totalInches = parseInt(feet) * 12 + parseInt(inches);
        heightInMeters = totalInches * 0.0254;
      }

      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBMI(bmiValue);

      const category = bmiCategories.find(
        (cat) => bmiValue >= cat.min && bmiValue <= cat.max
      );

      if (category) {
        setBMICategory(category.category);
        setBMIMessage(category.message);
      }
    }
  };

  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    if (isCalculating) {
      bmiFormula();
      setIsCalculating(false);
      navigation.navigate("Result", {
        bmi: bmi.toFixed(2),
        age: age,
        gender: gender,
        category: bmiCategory,
        message: bmiMessage,
      });
    }
  }, [isCalculating]);

  const onPressCalculate = () => {
    if (!weight || !height || !age) {
      Alert.alert("Error!", "Please enter values for weight, height, and age.");
      return;
    }
    setIsCalculating((prevIsCalculating) => {
      if (!prevIsCalculating) {
        bmiFormula();
        return true;
      }
      return prevIsCalculating;
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <Input
            label={`Weight (${weightUnit}):`}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={weightUnit}
              onValueChange={(itemValue) => setWeightUnit(itemValue)}
            >
              <Picker.Item style={styles.pickItem} label="kg" value="kg" />
              <Picker.Item style={styles.pickItem} label="lbs" value="lbs" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Input
            label={`Height (${heightUnit === "cm" ? "cm" : "ft'in"}):`}
            value={height}
            onChangeText={setHeight}
            keyboardType={heightUnit === "cm" ? "numeric" : "email-address"}
          />
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={heightUnit}
              onValueChange={(itemValue) => setHeightUnit(itemValue)}
            >
              <Picker.Item style={styles.pickItem} label="cm" value="cm" />
              <Picker.Item style={styles.pickItem} label="ft'in" value="feet" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Input
            label="Age:"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.genderButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "Male" && styles.selectedGenderButton,
              ]}
              onPress={() => setGender("Male")}
            >
              <Icon
                name="man-outline"
                size={30}
                color={gender === "Male" ? "rgba(6, 179, 21, 0.9)" : "#fff"}
              />
            </TouchableOpacity>
            <View style={styles.buttonDivision}></View>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "Female" && styles.selectedGenderButton,
              ]}
              onPress={() => setGender("Female")}
            >
              <Icon
                name="woman-outline"
                size={30}
                color={gender === "Female" ? "rgba(6, 179, 21, 0.9)" : "#fff"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={onPressCalculate}
          >
            <Text style={styles.buttonText}>CALCULATE BMI</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      "radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 80.2%)",
  },
  subContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(6, 39, 21, 0.8)",
    marginBottom: 25,
    marginTop: 25,
    paddingVertical: 75,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 0.5,
    borderColor: "rgba(6, 239, 21, 0.8)",
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 5,
  },
  pickerContainer: {
    height: 47,
    marginBottom: 5,
    marginLeft: 3,
    backgroundColor: "rgba(6, 79, 21, 0.2)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomWidth: 2,
    borderColor: "rgba(6, 179, 21, 0.9)",
  },

  picker: {
    width: 115,
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
  },
  pickItem: {
    backgroundColor: "transparent",
    color: "#000",
  },
  buttonContainer: {
    marginTop: 25,
  },
  calculateButton: {
    backgroundColor: "rgba(3, 128, 31, 0.9)",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#f0f0f0",
    fontWeight: "900",
  },
  genderButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    height: 70,
  },
  genderButton: {
    backgroundColor: "transparent",
    padding: 18,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },

  genderButtonText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedGenderButton: {
    borderWidth: 2,
    fontSize: 16,
    borderColor: "rgba(6, 179, 21, 0.9)",
    backgroundColor: "rgba(6, 79, 21, 0.4)",
    color: "rgba(255, 255, 255, 0.1)",
  },
  buttonDivision: {
    backgroundColor: "#232855",
    height: 65,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default HomeScreen;

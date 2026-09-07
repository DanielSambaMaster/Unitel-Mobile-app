import { Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (


    <SafeAreaView style={styles.container}>
<ScrollView>
      <Text style={textStyles.text}> Welcome to the home Page
      </Text>
    </ScrollView>

    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(255, 0, 136)",
  },
});

const textStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

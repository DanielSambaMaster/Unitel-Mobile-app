import { Text, View, StyleSheet } from "react-native";

export default function Help() {
  return (


    <View style={styles.container}>
      <Text> Aqui vc obtem ajuda sobre os serviços da Unitel
      </Text>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

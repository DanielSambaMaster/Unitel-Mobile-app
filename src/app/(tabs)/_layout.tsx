import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerShown: false,
        }}
      />
     
 

     

    </Tabs>
  );
}

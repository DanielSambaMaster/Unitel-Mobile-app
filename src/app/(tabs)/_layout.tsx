import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs  >
      <Tabs.Screen
        name="index"
        options={{
          title: "State",
          headerShown: false,
        }}
      />
      
       <Tabs.Screen
        name="plans"
        options={{
          title: "Plans",
          headerShown: false,
        }}
      />

          <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,
        }}
      />

           <Tabs.Screen
        name="net"
        options={{
          title: "Network",
          headerShown: false,
        }}
      />
          <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          headerShown: false,
        }}
      />
     
     
 

     

    </Tabs>
  );
}

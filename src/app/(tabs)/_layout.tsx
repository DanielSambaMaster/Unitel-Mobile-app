import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Tabbaricons =({focused, icon}:any) => {
  if(focused){
    return (
      <>
      <FontAwesome name={icon} size={30} color="#ee6700" />
      </>
    )
  
  }else{
    return (
      <>
      <FontAwesome name={icon} size={24} color="rgb(168, 168, 165)" />
      </>
    )
  }
 



}

export default function RootLayout() {







  return (
    <Tabs 
    screenOptions={{
      tabBarStyle: {
        height: 80,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
      
        
      }}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
           tabBarIcon:({focused}) =>(
          <Tabbaricons  focused={focused} icon={"home"}/>
        ),

        }}
      />
      
       <Tabs.Screen
        name="plans"
        options={{
          title: "Plans",
          headerShown: false,
           tabBarIcon:({focused}) =>(
          <Tabbaricons  focused={focused} icon={"cloud"}/>
        ),
        }}
      />

          <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          headerShown: false,
           tabBarIcon:({focused}) =>(
          <Tabbaricons  focused={focused} icon={"plus"}/>
        ),
        }}
      />

           <Tabs.Screen
        name="net"
        options={{
          title: "Network",
          headerShown: false,
           tabBarIcon:({focused}) =>(
          <Tabbaricons  focused={focused} icon={"wifi"}/>
        ),
        }}
      />
          <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          headerShown: false,
           tabBarIcon:({focused}) =>(
          <Tabbaricons  focused={focused} icon={"headphones"}/>
        ),
        }}
      />
     
     
 

     

    </Tabs>
  );
}

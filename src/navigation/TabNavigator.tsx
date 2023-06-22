import { Image, ImageSourcePropType, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { COLORS } from "@/lib/theme";
import Discover from "@/screens/discover";
import Browse from "@/screens/browse";
import Saved from "@/screens/saved";
import More from "@/screens/more";

const home = require("@/assets/icons/home.png");
const more = require("@/assets/icons/more.png");
const bookmark = require("@/assets/icons/bookmark.png");
const video = require("@/assets/icons/video.png");

export type BottomTabsParamList = {
  Discover: undefined;
  Browse: undefined;
  Saved: undefined;
  More: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.icon,
        tabBarStyle: {
          backgroundColor: "#29292F",
          borderTopWidth: 0,
          height: 80,
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} label="Discover" src={home} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={Browse}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} label="Browse" src={video} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} label="Saved" src={bookmark} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabButton focused={focused} label="More" src={more} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const TabButton = ({
  focused,
  label,
  src,
}: {
  focused: boolean;
  label: string;
  src: ImageSourcePropType;
}) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Image
        source={src}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
          tintColor: focused ? "#EFA951" : "#808191",
        }}
      />
      <Text
        style={{
          color: focused ? "#EFA951" : "#808191",
          fontSize: 10,
          fontFamily: "Poppins_500Medium",
          marginTop: 6,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

// tabBarStyle: {
//           backgroundColor: "#29292F",
//           borderTopWidth: 0,
//           height: 80,
//         },
//         tabBarIconStyle: {
//           marginBottom: 24,
//         },
//         tabBarLabelStyle: {
//           color: COLORS.icon,
//           position: "absolute",
//           alignSelf: "center",
//           bottom: 20,
//         },

// options={{
//           tabBarIcon: ({ size, focused, color }) => {
//             return (
//               <Image
//                 source={require("@/assets/icons/new.png")}
//                 style={{
//                   width: 20,
//                   height: 20,
//                   position: "absolute",
//                   top: 22,
//                 }}
//               />
//             );
//           },
//           tabBarLabel: ({ focused, color, position }) => (
//             <Text
//               style={{
//                 color: focused ? "#fff" : COLORS.icon,
//                 position: "absolute",
//                 bottom: 20,
//                 fontFamily: "Poppins_400Regular",
//                 fontSize: 10,
//               }}
//             >
//               More
//             </Text>
//           ),
//         }}

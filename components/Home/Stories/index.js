import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { USERS } from "../../../data/users";

const Stories = ({}) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center", marginLeft: 10 }}>
            <TouchableOpacity>
              <LinearGradient
                colors={[
                  "#00FFFF",
                  "#F6F2FF",
                  "#329BFF",
                  "#E07BE0",
                  "#6536FF",
                  "#932F6D",
                ]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.gradient}
              >
                <Image style={styles.story} source={{ uri: story.image }} />
              </LinearGradient>
              <Text style={{ color: "white", textAlign: "center" }}>
                {story.user.length > 10
                  ? story.user.slice(0, 9).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

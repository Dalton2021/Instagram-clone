import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

const Header = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require("../../../assets/header-logo.png")} />
      </TouchableOpacity>
      <View style={styles.icon_container}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("../../../assets/plus-2-math.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require("../../../assets/like.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unread_badge}>
            <Text style={styles.unread_badge_text}>11</Text>
          </View>
          <Image style={styles.icon} source={require("../../../assets/message.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

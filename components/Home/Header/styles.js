import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  icon_container: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },

  unread_badge: {
    backgroundColor: "#ff3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unread_badge_text: {
    color: "#fff",
    fontWeight: "600",
  },

  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default styles;

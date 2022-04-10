import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },

  post_header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },

  profile_picture: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  gradient: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent",
    marginLeft: 6,
  },

  username: {
    color: "#fff",
    marginLeft: 5,
    fontWeight: "700",
  },

  post_flex: {
    flexDirection: "row",
    alignItems: "center",
  },

  post_image: {
    height: "100%",
    resizeMode: "cover",
  },

  image_container: {
    width: "100%",
    height: 450,
  },

  footer_icon: {
    marginLeft: 0,
    color: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },

  share_icon: {
    transform: [{ rotate: "25deg" }],
    color: "#fff",
    marginTop: -3,
  },

  footer_icon_active: {
    width: 33,
    height: 33,
    color: "#dc233c",
  },

  footer_container: {
    marginHorizontal: 15,
    marginTop: 10,
  },

  footer_left_container: {
    flexDirection: "row",
    width: "35%",
    justifyContent: "space-between",
  },
});

export default styles;

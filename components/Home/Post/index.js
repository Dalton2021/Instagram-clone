import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faComment,
  faHeart,
  faShare,
  faPaperPlane,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment as faRegComment,
  faHeart as faRegHeart,
  faPaperPlane as faRegPlane,
  faBookmark as faRegBookmark,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./styles";
import { icon } from "@fortawesome/fontawesome-svg-core";


const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Divider width={1} orientation="vertical" />
      <Post_header post={post} />
      <Post_image post={post} />
      <View style={styles.footer_container}>
        <Post_footer />
      </View>
    </View>
  );
};

const Post_header = ({ post }) => {
  return (
    <View style={styles.post_header_container}>
      <View style={styles.post_flex}>
        <LinearGradient
          colors={["#00FFFF", "#F6F2FF", "#329BFF", "#E07BE0", "#6536FF", "#932F6D"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          <Image source={{ uri: post.profile_picture }} style={styles.profile_picture} />
        </LinearGradient>
        <Text style={styles.username}>{post.user}</Text>
      </View>

      <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
    </View>
  );
};

const Post_image = ({ post }) => {
  return (
    <View style={styles.image_container}>
      <Image source={{ uri: post.image_url }} style={styles.post_image} />
    </View>
  );
};

const Post_footer = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.footer_left_container}>
        <Icon imgStyle={styles.footer_icon} imgUrl="like" />
        <Icon imgStyle={styles.footer_icon} imgUrl="comment" />
        <Icon imgStyle={styles.footer_icon} imgUrl="share" />
      </View>
      <View>
        <Icon imgStyle={styles.footer_icon} imgUrl="save" />
      </View>
    </View>
  );
};

const Icon = ({ imgStyle, imgUrl }) => {
  let icon_locate = imgUrl;
  let icon_style = imgStyle;

  switch (icon_locate) {
    case "like":
      icon_locate = faRegHeart;
      break;
    case "like_active":
      icon_locate = faHeart;
      icon_style = styles.footer_icon_active;
      break;
    case "share":
      icon_locate = faRegPlane;
      icon_style = styles.share_icon;
      break;
    case "comment":
      icon_locate = faRegComment;
      break;
    case "save":
      icon_locate = faRegBookmark;
  }

  return (
    <TouchableOpacity>
      <FontAwesomeIcon style={icon_style} icon={icon_locate} size="28x" />
    </TouchableOpacity>
  );
};

const post_footer_icons = [
  {
    name: "like",
    image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegHeart} />,
    liked_image: <FontAwesomeIcon style={{ color: "#dc233c" }} icon={faHeart} />,
  },
  {
    name: "comments",
    image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegComment} />,
    // liked_image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faComment} />,
  },
  {
    name: "share",
    image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegPlane} />,
    // liked_image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faPaperPlane} />,
  },
  {
    name: "save",
    image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegBookmark} />,
    // liked_image: <FontAwesomeIcon style={{ color: "#fff" }} icon={faBookmark} />,
  },
];

{
  /*
  Comments
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegComment} />
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faComment} />

  like
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegHeart} />
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faHeart} />

  share
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegPlane} />
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faPaperPlane} />

  save
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faRegBookmark} />
  <FontAwesomeIcon style={{ color: "#fff" }} icon={faBookmark} />
*/
}

export default Post;

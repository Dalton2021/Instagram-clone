import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/users";

const Home_Screen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home_Screen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
});

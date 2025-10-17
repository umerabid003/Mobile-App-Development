import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}

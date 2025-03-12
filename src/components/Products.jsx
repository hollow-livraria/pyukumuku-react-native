import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { template } from "@babel/core";

export default function Product(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.body}>
            <Image source={props.photo} style={styles.photo}/>
            <Text style={styles.about}>{props.about}</Text>
            <Text style={styles.price}>{props.price}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    gap: 10,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 180,
    height: 180,
    backgroundColor: "#1D1D1D",
    border: "3px solid #D94174",
    borderRadius: 10,
    marginBottom: 20,
  },
  photo: {
    width: 80,
    height: 80,
    marginTop: 15,
  },
  about: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
    fontSize: 15,
    paddingTop: 20,    
  },
  price: {
    color: "white",
    fontSize: 10,
  },

});

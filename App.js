import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import Header from "./src/components/Header";
import Message from "./src/components/Msg";
import Product from "./src/components/Products"
import { ScrollView } from "react-native-web";

export default function App() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header />
        <Message
          icon="https://github.com/livrariazin.png"
          message="testando as propriedades"
          hora="Enviada: 10 minutos atras"
        />
        <Message
          icon="https://github.com/cnicizima.png"
          message="ainda bem que funcionou"
          hora="Enviada: 5 anos atras"
        />
        <Message
          icon="https://github.com/renancavichi.png"
          message="yippi!!!!!!!!!!!!!!"
          hora="Enviada: 19 anos no futuro"
        />
        <View style={styles.containerProd}>
        <Product
        photo="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
        about="Uma pokebola confiavel, mas nao muito potente."
        price="100 gold"
        />
        <Product
        photo="https://wiki.cobblemon.com/images/d/d5/Ultra_Ball_%28model%29.png"
        about="Ultraball, extremamente potente!!"
        price="1000 gold"
        />
        <Product
        photo="https://cambuci.vtexassets.com/arquivos/ids/1426690-800-auto?v=638772139694900000&width=800&height=auto&aspect=true"
        about="bola de futebas do Neymar"
        price="R$ 15.00"
        />
        <Product
        photo="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
        about="Uma pokebola confiavel, mas nao muito potente."
        price="100 gold"
        />
        <Product
        photo="https://wiki.cobblemon.com/images/d/d5/Ultra_Ball_%28model%29.png"
        about="Ultraball, extremamente potente!!"
        price="1000 gold"
        />
        <Product
        photo="https://cambuci.vtexassets.com/arquivos/ids/1426690-800-auto?v=638772139694900000&width=800&height=auto&aspect=true"
        about="bola de futebas do Neymar"
        price="R$ 15.00"
        />
        <Product
        photo="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
        about="Uma pokebola confiavel, mas nao muito potente."
        price="100 gold"
        />
        <Product
        photo="https://wiki.cobblemon.com/images/d/d5/Ultra_Ball_%28model%29.png"
        about="Ultraball, extremamente potente!!"
        price="1000 gold"
        />
        <Product
        photo="https://cambuci.vtexassets.com/arquivos/ids/1426690-800-auto?v=638772139694900000&width=800&height=auto&aspect=true"
        about="bola de futebas do Neymar"
        price="R$ 15.00"
        />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  containerProd: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 25,
    gap: 10,
  }
});

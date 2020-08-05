import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import ImageProduct from "../../imageProduct/components/ImageProduct";
import { styles } from "../styles";
import { FontAwesome } from "@expo/vector-icons";
import { globalStyle } from "../../../styles";

export default ({ product, actions }) => {
  return (
    <View style={styles.container}>
      <View style={styles.trashContent}>
        <TouchableWithoutFeedback
          onPress={() => actions.removeProduct(product.id)}
        >
          <View>
            <FontAwesome
              name="trash-o"
              size={24}
              color={globalStyle.globalFontColorButton}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.imageProduct}>
        <ImageProduct
          pathImage={product.image}
          borderColorCircle={0}
          borderWidth={1}
          sizeImageProduct={-3}
          sizeBorder={-3}
        />
      </View>
      <View style={styles.infoProduct}>
        <Text style={styles.titleProduct}>{product.name}</Text>
        <View style={styles.detailProduct}>
          <Text style={styles.subtitleProduct}>Unidades:</Text>
          <Text style={styles.valueProduct}>{product.units}</Text>
        </View>
        <View style={styles.detailProduct}>
          <Text style={styles.subtitleProduct}>Precio Unitario:</Text>
          <Text style={styles.valueProduct}>{`$${Number(product.price)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</Text>
        </View>

        <View style={styles.detailProduct}>
          <Text style={styles.subtitleProduct}>Subtotal:</Text>
          <Text style={styles.valueProduct}>{`$${(
            Number(product.price) * Number(product.units)
          )
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}</Text>
        </View>
      </View>
    </View>
  );
};

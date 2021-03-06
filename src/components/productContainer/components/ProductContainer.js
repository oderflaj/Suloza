import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ImageProduct from "../../imageProduct/components/ImageProduct";
import { imagesMenu } from "../../../services/Images";
import { nameItemMenu } from "../../../services/Data";
import { globalStyle } from "../../../styles";
import { styles } from "../style";

export default ({ productCatalog, actions }) => {
  function setProductCategory(categorySelected) {
    let categoryOne = productCatalog.filter(
      (product) => product.category === categorySelected
    )[0];

    actions.setProductCategory(categoryOne);
    actions.toggleProductMenu();
  }

  let styleImages = {
    borderColorCircle: globalStyle.globalFontColor,
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setProductCategory(productCatalog[4].category)}
        >
          <View style={styles.containerProduct}>
            <ImageProduct
              sizeBorder={20}
              sizeImageProduct={18}
              pathImage={imagesMenu.glass1}
              borderColorCircle={styleImages.borderColorCircle}
              borderWidth={2}
            />
            <Text style={styles.nameText}>{nameItemMenu.glass1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setProductCategory(productCatalog[1].category)}
        >
          <View style={styles.containerProduct}>
            <ImageProduct
              sizeBorder={20}
              sizeImageProduct={18}
              pathImage={imagesMenu.cup1}
              borderColorCircle={styleImages.borderColorCircle}
              borderWidth={2}
            />
            <Text style={styles.nameText}>{nameItemMenu.cup1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setProductCategory(productCatalog[2].category)}
        >
          <View style={styles.containerProduct}>
            <ImageProduct
              sizeBorder={20}
              sizeImageProduct={18}
              pathImage={imagesMenu.cupCoffee1}
              borderColorCircle={styleImages.borderColorCircle}
              borderWidth={2}
            />
            <Text style={styles.nameText}>{nameItemMenu.cupCoffee1}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setProductCategory(productCatalog[3].category)}
        >
          <View style={styles.containerProduct}>
            <ImageProduct
              sizeBorder={20}
              sizeImageProduct={18}
              pathImage={imagesMenu.cutlery1}
              borderColorCircle={styleImages.borderColorCircle}
              borderWidth={2}
            />
            <Text style={styles.nameText}>{nameItemMenu.cutlery1}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <TouchableOpacity
          onPress={() => setProductCategory(productCatalog[0].category)}
        >
          <View style={styles.containerProduct}>
            <ImageProduct
              sizeBorder={20}
              sizeImageProduct={18}
              pathImage={imagesMenu.dish1}
              borderColorCircle={styleImages.borderColorCircle}
              borderWidth={2}
            />
            <Text style={styles.nameText}>{nameItemMenu.dish1}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

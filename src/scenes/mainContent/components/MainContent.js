import React from "react";
import { View, Text } from "react-native";
import CarouselProducts from "../../../stores/ProductNavigationContainers/CarouselProducts";
//import CarouselTable from "../../../components/corouselTable/components/CarouselTable";
import CarouselTable from "../../../stores/ShoppingCartContainers/CarouselTable";
import Button from "../../../components/button/componets/Button";
import { tableCatalog } from "../../../services/Data";
import { styles } from "../style";

export default ({ category, actions }) => {
  return (
    <View style={styles.content}>
      <CarouselProducts itemsPerInterval={3} items={category.products} />

      <CarouselTable items={tableCatalog} />

      <View style={styles.buttonStyle}>
        <Button
          title={"Confirmar"}
          onPress={() => actions.turnOnOffShoppingCart()}
        />
      </View>
    </View>
  );
};

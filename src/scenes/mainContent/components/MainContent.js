import React from "react";
import { View, Text } from "react-native";
import CarouselProducts from "../../../stores/ProductNavigationContainers/CarouselProducts";
//import CarouselTable from "../../../components/corouselTable/components/CarouselTable";
import CarouselTable from "../../../stores/ShoppingCartContainers/CarouselTable";
import Button from "../../../components/button/componets/Button";
import { tableCatalog } from "../../../services/Data";

export default ({ category }) => {
  return (
    <View>
      <CarouselProducts itemsPerInterval={3} items={category.products} />

      <CarouselTable items={tableCatalog} />

      <Button
        title={"Confirmar"}
        onPress={() => console.log("Presiono Confirmar")}
      />
    </View>
  );
};

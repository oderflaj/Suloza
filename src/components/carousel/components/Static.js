import React from "react";
import { View, TouchableOpacity } from "react-native";
import { stylesStat } from "../styles";
import ImageProduct from "../../imageProduct/components/ImageProduct";

export const Static = (props) => {
  const { imagePath, cart, product, actions } = props;

  const [selected, toggleSelected] = React.useState(false);

  React.useEffect(() => {
    //console.log("React.useEffect.....................")
    //console.log(props)
    //console.log(props.cart)

    let findSelected = cart.find(
      (productCart) => productCart.id === product.id
    );

    if (typeof findSelected === "undefined") {
      toggleSelected(false);
    } else {
      toggleSelected(true);
    }
  });

  const setToggleSelected = () => {
    if (!selected) {
      //console.log("cargara product")
      //console.log(product)
      actions.addProduct(product);
    } else {
      actions.removeProduct(product.id);
    }
    toggleSelected(!selected);
  };

  return (
    <View style={[stylesStat.stat]}>
      <TouchableOpacity onPress={() => setToggleSelected()}>
        <ImageProduct
          pathImage={imagePath}
          backgroundColor={
            selected ? "rgba(34, 148, 148, 0.28)" : "transparent"
          }
          borderWidth={selected ? 3 : 1}
          borderColorCircle={selected ? "rgba(54, 78, 88, 0.82)" : "grey"}
          sizeBorder={-10}
          sizeImageProduct={-10}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Static;

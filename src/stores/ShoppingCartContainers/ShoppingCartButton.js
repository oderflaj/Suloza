import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import ShoppingCartButton from "../../scenes/shoppingCart/components/ShoppingCartButton";

const mapStateToProps = (state) => {
  return {
    guesses: state.reducerShoppingCart.guesses,
    quantity: state.reducerShoppingCart.quantity,
    turnOnOffShoppingCart: state.reducerShoppingCart.turnOnOffShoppingCart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartButton);

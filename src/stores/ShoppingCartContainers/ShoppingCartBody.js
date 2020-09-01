import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import ShoppingCartBody from "../../scenes/shoppingCart/components/ShoppingCartBody";

const mapStateToProps = (state) => {
  return {
    guesses: state.reducerShoppingCart.guesses,
    quantity: state.reducerShoppingCart.quantity,
    cart: state.reducerShoppingCart.cart,
    userInformation: state.reducerShoppingCart.userInformation,
    order: state.reducerShoppingCart.order,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartBody);

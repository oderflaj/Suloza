import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import ShoppingCart from "../../scenes/shoppingCart/ShoppingCart";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    turnOnOffShoppingCart: state.reducerShoppingCart.turnOnOffShoppingCart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import ShoppingCartHeader from "../../scenes/shoppingCart/components/ShoppingCartHeader";

const mapStateToProps = (state) => {
  return {
    userInformation: state.reducerShoppingCart.userInformation,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartHeader);

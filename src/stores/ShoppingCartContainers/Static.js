import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import Static from "../../components/carousel/components/Static";

const mapStateToProps = (state) => {
  return {
    cart: state.reducerShoppingCart.cart,
    turnProductTable: state.reducerShoppingCart.turnProductTable,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Static);

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import CarouselTable from "../../components/corouselTable/components/CarouselTable";

const mapStateToProps = (state) => {
  return {
    cart: state.reducerShoppingCart.cart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarouselTable);

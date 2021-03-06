import { connect } from "react-redux";
import * as ProductNavigatorAction from "../ProductNavigator/actions";
import { turnOnOffShoppingCart } from "../ShoppingCart/actions";
import { bindActionCreators } from "redux";
import MainContent from "../../scenes/mainContent/components/MainContent";

const mapStateToProps = (state) => {
  return {
    category: state.reducerProductNavigator.category,
    resetCarousel: state.reducerProductNavigator.resetCarousel,
    turnOnOffShoppingCart: state.reducerShoppingCart.turnOnOffShoppingCart,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    { ...ProductNavigatorAction, turnOnOffShoppingCart },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);

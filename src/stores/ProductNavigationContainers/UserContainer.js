import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import { bindActionCreators } from "redux";
import User from "../../components/user/components/User";

const mapStateToProps = (state) => {
  //console.log(state.reducerProductNavigator.productCatalog);
  return {
    userInformation: state.reducerShoppingCart.userInformation,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);

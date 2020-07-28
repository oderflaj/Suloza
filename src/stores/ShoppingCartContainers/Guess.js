import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as ShoppingCartAction from "../ShoppingCart/actions";
import Guess from "../../components/guess/components/Guess";

const mapStateToProps = (state) => {
  return {
    guesses: state.reducerShoppingCart.guesses,
    turnOnOff: state.reducerProductNavigator.turnOnOff,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ShoppingCartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Guess);

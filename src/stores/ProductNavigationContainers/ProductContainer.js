import { connect } from "react-redux";
import * as ProductNavigatorAction from "../ProductNavigator/actions";
import { bindActionCreators } from "redux";
import ProductContainer from "../../components/productContainer/components/ProductContainer";

const mapStateToProps = (state) => {
  //console.log(state.reducerProductNavigator.productCatalog);
  return {
    category: state.reducerProductNavigator.category,
    productCatalog: state.reducerProductNavigator.productCatalog,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

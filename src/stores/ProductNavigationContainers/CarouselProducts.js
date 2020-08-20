import { connect } from "react-redux";
import * as ProductNavigatorAction from "../ProductNavigator/actions";
import { bindActionCreators } from "redux";
import Carousel from "../../components/carousel/components/CarouselProducts";

const mapStateToProps = (state) => {
  return {
    category: state.reducerProductNavigator.category,
    resetCarousel: state.reducerProductNavigator.resetCarousel,
    pendingCarousel: state.reducerProductNavigator.pendingCarousel,
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

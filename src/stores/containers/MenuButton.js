import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
import { bindActionCreators } from 'redux';
import MenuButton from '../../scenes/productNavigator/components/MenuButton';

  
  
const mapStateToProps = (state) => {   
  /*
  console.log("--STaTEx--")
  console.log(state.reducerProductNavigator)
  console.log("--STaTEx--")  
  */
  return{
    category: state.reducerProductNavigator.category,
    resetCarousel:state.reducerProductNavigator.resetCarousel
  } 
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
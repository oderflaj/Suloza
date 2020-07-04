import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
//import {setGuess} from "../ShoppingCart/actions";
import { bindActionCreators } from 'redux';
import MenuButton from '../../scenes/productNavigator/components/MenuButton';

  
  
const mapStateToProps = (state) => {   
  return{
    category: state.reducerProductNavigator.category,
    resetCarousel:state.reducerProductNavigator.resetCarousel,
    guesses:state.reducerShoppingCart.guesses
  } 
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
import { bindActionCreators } from 'redux';
import ProductContainer from '../../components/productContainer/components/ProductContainer';

/*
const mapStateToProps = (state) => ({
  turnOnOff1: state.reducerProductNavigator.turnOnOff,
});
console.log("ContentState")
  console.log(state)

*/

const mapStateToProps = (state) => {
    /*
    console.log("ContentState")
    console.log(state)
    */
  return{
    category: state.reducerProductNavigator.category,
  } 
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer); 
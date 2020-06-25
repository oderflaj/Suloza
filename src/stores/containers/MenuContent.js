import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
import { bindActionCreators } from 'redux';
import MenuContent from '../../scenes/productNavigator/components/MenuContent';

/*
const mapStateToProps = (state) => ({
  turnOnOff1: state.reducerProductNavigator.turnOnOff,
});
console.log("ContentState")
  console.log(state)
*/
const mapStateToProps = (state) => {
  
  return{
    turnOnOff: state.reducerProductNavigator.turnOnOff,
  } 
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(MenuContent); 

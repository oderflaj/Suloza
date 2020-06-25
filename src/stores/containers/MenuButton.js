import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
import { bindActionCreators } from 'redux';
import MenuButton from '../../scenes/productNavigator/components/MenuButton';
/*
  console.log("--STaTEx--")
  console.log(state.reducerProductNavigator)
  console.log("--STaTEx--")
  */
const mapStateToProps = (state) => {   
    
  return{
    turnOnOff: state.reducerProductNavigator.turnOnOff,
  } 
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuButton);
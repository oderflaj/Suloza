import { connect } from 'react-redux';
import * as ProductNavigatorAction from '../ProductNavigator/actions';
import { bindActionCreators } from 'redux';
import MainContent from '../../scenes/mainContent/components/MainContent';

/*
const mapStateToProps = (state) => ({
  turnOnOff1: state.reducerProductNavigator.turnOnOff,
});
console.log("ContentState")
  console.log(state)
*/
const mapStateToProps = (state) => {
    return{
        category: state.reducerProductNavigator.category,
        resetCarousel:state.reducerProductNavigator.resetCarousel
      } 
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ProductNavigatorAction, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(MainContent); 
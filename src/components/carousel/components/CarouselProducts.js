import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from '../styles'
import {Static} from './Static';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export const Carousel = (props) => {
  
  const { items, resetCarousel, actions } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);
  const [showLeftArrow,setShowLeftArrow] = React.useState(0);

  const init = (width) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  }

  React.useEffect(()=>{
    setIntervals(Math.ceil(items.length / itemsPerInterval));
  })


  const getInterval = (offset) => {
    setShowLeftArrow(offset);
    for (let i = 1; i <= intervals; i++) {
      if (offset < (width / intervals) * i) {
        //console.log("offset < (width / intervals) * i")
        //console.log(`${offset} < (${width} / ${intervals}) * ${i}`)
        //console.log(`->${offset} < ${(width / intervals) * i}`)
        
        return i;
      }
      if (i == intervals) {
        //console.log("i == intervals")
        //console.log(`${i}==${intervals}`)
        return i;
      }
    }
  }

  /**Definición de una referencia para poder relacionarla al ScrollView para poder manipularlo si se requiere
   * como es este caso en donde se va a poner el scroll al inicio en caso de que se cambie de producto
   */
  const ref = React.useRef(null);

  React.useEffect(()=>{
    if(resetCarousel){
      ref.current.scrollTo({x: 0, y: 0, animated: true});
      actions.toggleReseCarousel();
    }
  })

  
    
  

  const leftArrow = ()=>{
    //console.log( `intervals->${intervals}`)
    //console.log( `interval x->${interval}`)
    if(showLeftArrow > 10){
      return (
        <View style={[styles.arrow]}>
          <SimpleLineIcons name="arrow-left" size={24} color="rgb(48, 119, 119)" />
        </View>
      )
    }
    return (
      <View style={[styles.arrow]}>
        <SimpleLineIcons name="arrow-left" size={24} color="white" />
      </View>
    )
  }
  const rightArrow = ()=>{
    //console.log( `intervals->${intervals}`)
    //console.log( `interval x->${interval}`)
    if(interval < intervals){
      return (
        <View style={[styles.arrow]}>
          <SimpleLineIcons name="arrow-right" size={24} color="rgb(48, 119, 119)" />
        </View>
      )
    }
    return (
      <View style={[styles.arrow]}>
        <SimpleLineIcons name="arrow-right" size={24} color="white" />
      </View>
    )
  }

  

  return (
    <View style={styles.container}>
      {leftArrow()}
      <ScrollView 
        ref={ref}
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView, width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => {
          init(w);

          }}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled={false}
        decelerationRate="fast"
      >
        {
          items.map((item, index) => {
            return(    
              <Static
                key={index}
                imagePath={item.image}
              />
            )
          
          })
        }
      </ScrollView>
      {rightArrow()}
      
    </View>
  )
}

export default Carousel;
import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    position:"relative",
    zIndex:10,
    width: '100%',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 5
    },
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  
  overContainer:{
    position:"absolute",
    minWidth: '100%',
    height:"100%",
    zIndex:20
   },
   contentButtons:{
    position:"relative",   
    flexDirection:"row",
    width:"100%",
    borderWidth:0,
   }
});

const shadow = "rgba(122, 162, 178, 0.2)";

export const stylesSlide = StyleSheet.create({
    slide: {
      paddingHorizontal: 20,
      paddingBottom: 10,
      paddingTop: 30,
      flexBasis: '100%',
      flex: 1,
      maxWidth: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: 320,
    },
    imageTable:{
        justifyContent: "center",
        height:280,
        width:320,
        borderRadius:10,
        

    },
    imageTableContent:{
        ...Platform.select({
            android:{
                elevation: 8
            },
            ios:{
                shadowColor:"black",
                shadowOffset:{
                    height:8
                },
                shadowOpacity:1
            },
            
        }),
        
    },
  });

export default styles;
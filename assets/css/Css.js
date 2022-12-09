import { StyleSheet } from "react-native";

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',    
      alignContent:"center", 
    }, 
    menu:{
      flexDirection: "row",
      paddingTop: 40,
      paddingBottom: 10,
      width:"100%",
      backgroundColor: "#1670F7",
      alignItems: "center",
      justifyContent: "center",

  },
  button__home:{
      textAlign:'left',
      marginLeft:10,
  },

  menu__title:{
      width: "80%",
      fontWeight: "bold",
      fontSize:25,
      color: "#fff",
      textAlign:"center",
      marginRight:"auto",
  },
    botoes:{
      justifyContent:"flex-end",
      alignItems:"center",
      textAlign:"center",
      marginBottom:40,
      paddingHorizontal:40,
    },
    login:{
      flex:1,
      justifyContent:"flex-end",
      width:"80%",   
      alignSelf:"center",
    },
    inputLogin:{   
      justifyContent:"flex-end", 
    },  
    button:{      
      backgroundColor:"#1670F7",
      paddingVertical:8,
      alignItems:"center",
      marginBottom:8,
      width:"90%",
      },
    textoBotao:{
      fontSize:25,
    }
});
export {css};
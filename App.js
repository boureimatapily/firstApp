import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import profile from './assets/profile.jpg'

function App(){
  return(
    <View style={styles.container}>
          <Image source={profile} style={styles.image} />

          <View style={styles.detailContainer}>
              <Text style={styles.lable}>Name</Text>
              <Text style={[styles.lable,styles.info]} >Boureima Tapily</Text>
          </View>

          <View style={styles.detailContainer}>
              <Text style={styles.lable}>Email</Text>
              <Text style={[styles.lable,styles.info]} >boureimatapily1@gmail.com</Text>
          </View>

          <View style={styles.detailContainer}>
              <Text style={styles.lable}>Gender</Text>
              <Text style={[styles.lable,styles.info]} >Male</Text>
          </View>
         
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal:5
  },
  image:{
    width:200,
    height:200,
    marginBottom:30,
    alignSelf:"center",
    borderRadius:75,
    marginTop:100
  },
  detailContainer:{
    flexDirection:"row",
    marginVertical:3
  },
  lable:{
    borderColor:"black",
    borderWidth:1,
    fontSize:18,
    flex:3,
    paddingHorizontal:3
  },
  info:{
    flex:7,
  }

})
export default App
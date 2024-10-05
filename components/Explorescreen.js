import React from 'react';
import { Text, View, StyleSheet, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';

import CustomHeader from './CustomHeader'; // Import the header component
import categories from '../constants/categories'; //import categoris from constants
  

function Explorescreen() {
  return (
   <View  style={styles.container}>
      <SafeAreaView>
        <CustomHeader />
      </SafeAreaView>
      <Text style={styles.title}>Find Product</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search Store"
        placeholderTextColor="#888"
      />
      <ScrollView showsVerticalScrollIndicator={false} >
 
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <View
            key={index}
            style={[
              styles.category,
              {
                backgroundColor: category.backgroundColor,
                borderColor: category.borderColor, 
              },
            ]}
          >
            <Image style={styles.categoryImage} source={category.image} />
            <Text style={styles.categoryText}>{category.title}</Text>
          </View>
          
        ))}
      </View>
      </ScrollView>
      </View>
  
  );
}

export default Explorescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,        
    textAlign: 'center',   
    fontWeight: 'bold',   
    marginBottom: 20,      
  },
  searchBar: {
    height: 40,
    width: '90%',        
    alignSelf: 'center',  
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,       
    backgroundColor: '#f0f0f0',
    marginBottom: 20,      
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',     
    justifyContent: 'space-between',
  },
  category: {
    width: '45%',          
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    // marginBottom: 20,      
    // marginRight: ,
    margin:'auto',
    marginBottom:15,
    borderWidth: 1,        
  },
  categoryImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 16,
    textAlign: 'center',  
    fontWeight:'bold'
  },
});

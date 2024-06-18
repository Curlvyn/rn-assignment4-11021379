import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Head from '../assets/avatar.png'
import Search from '../assets/search.png'
import Filter from '../assets/filter.png'
import Fb from '../assets/fb.png'
import Popular from './Popular'

const FeaturedData = [
  {id: 1, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 2, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'blue', image: Fb, location: 'Accra, Ghana'},
  {id: 3, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 4, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 5, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 6, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 7, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
  {id: 8, title: 'Software Developer', company: 'Facebook', salary: '200', backgroundColor: 'red', image: Fb, location: 'Accra, Ghana'},
]

const renderData = () => {
  return(
    <View style={{display: 'flex',flexDirection: 'row', gap: 10, marginHorizontal: 20}}>
      {
        FeaturedData.map(item => {
          return(
            <View key={item.id} style={{display: 'flex', flexDirection: 'column', padding: 20, backgroundColor: item.backgroundColor, borderRadius: 20, width: 280, height: 150 }}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={Fb} />
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.company}</Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', paddingTop: 50}}>
                <Text>{item.location}</Text>
                <Text>${item.salary}</Text>
              </View>
            </View>
          )
        })
      }
    </View>
  )
}

const Home = () => {
  return (
    <View>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.head}>
              <View>
                <Text>Aaron</Text>
                <Text>Aaron</Text>
              </View>
              <Image source={Head} style={{height: 50, width: 50}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 30}}>
              <View style={{display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center', borderWidth: 1, borderRadius: 15, padding: 10, borderColor: 'gray'}}>
                <Image source={Search} style={{width: 35, height: 35}}/> 
                <TextInput placeholder='Search a job or position' style={{fontSize: 20, width: 250}} />
              </View>
              
              <Image source={Filter} style={{width: 50, height: 50}}/>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20}}>
              <Text>Featured Jobs</Text>
              <Text style={{color: 'gray',}}>See all</Text>
            </View>
            <FlatList
              data={FeaturedData.slice(0,1)}
              renderItem={renderData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 60}}>
              <Text>Popular Jobs</Text>
              <Text style={{color: 'gray',}}>See all</Text>
            </View>
            <View>
              <Popular/>
            </View>
          </ScrollView>
        </SafeAreaView>
      
    </View>
  )
}
  

export default Home

const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

})
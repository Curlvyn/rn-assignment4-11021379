import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FB from '../assets/fb.png'

const data = [
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
    {name: 'Software Developer', company: 'Fabe', location: 'Kasoa, Accra', image: FB, salary: '200/yr'},
]

const Popular = () => {
  return (
    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10, marginHorizontal: 20, marginTop: 20}}>
      {
        data.map((item, index) => {
            return(
                <View key={index} style={{backgroundColor: 'red', borderRadius: 10, padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                        <Image source={item.image} />
                        <View style={{}}>
                            <Text>{item.name}</Text>
                            <Text>{item.name}</Text>
                        </View>
                        
                    </View>
                    <View>
                        <Text>${item.salary}</Text>
                        <Text>{item.location}</Text>
                    </View>
                </View>
            )
        })
      }
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({})
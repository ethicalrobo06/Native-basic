import { View, Text } from 'react-native'
import React from 'react'
import InternalStyle from '../notes/InternalStyle'
import ExternalStyle from '../notes/ExternalStyle'
import Name from '../components/Name'
import Greet from '../components/Greet'
import ViewComponent from '../components/ViewComponent'
import ListData from '../notes/ListData'
import ArrayOfObject from '../notes/ArrayOfObject'
import ProductsArray from '../components/ProductsArray'
import ParentComponent from '../notes/ParentComponent'
import ParentAccessories from '../components/ParentAccessories'
import ConditionalStatement from '../notes/ConditionalStatement'
import WithoutState from '../notes/1.Basic Counter/WithoutState'
import UpdateArray from '../notes/2.Updating Arrays/UpdateArray'
import UpdateObject from '../notes/3.Updating Object/UpdateObject'
import SharingState from '../notes/4.Sharing State/SharingState'
import ToggleButton from '../components/ToggleButton'
import Weather from '../components/Weather'
import Colorpicker from '../components/Colorpicker'
import Todo from '../components/Todo'
import MyEffect from '../notes/MyEffect'
import DataFetching from '../components/DataFetching'
import MealDB from '../components/MealDB'
import RandomUser from '../components/RandomUser'

const index = () => {
  return (
    <View>
      <RandomUser />
    </View>
  )
}

export default index

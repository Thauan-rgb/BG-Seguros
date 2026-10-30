import React from'react';
import{SafeAreaProvider}from'react-native-safe-area-context';
import{Provider}from'./src/store';
import Nav from'./src/navigation';
export default function App(){return(<SafeAreaProvider><Provider><Nav/></Provider></SafeAreaProvider>)}

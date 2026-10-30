import React from'react';
import{View,Text,Pressable}from'react-native';
import{Ionicons}from'@expo/vector-icons';
import{NavigationContainer,useNavigation}from'@react-navigation/native';
import{createNativeStackNavigator}from'@react-navigation/native-stack';
import{createBottomTabNavigator}from'@react-navigation/bottom-tabs';
import{StatusBar}from'expo-status-bar';
import{C}from'./theme';
import{useApp}from'./store';
import Home from'./screens/Home';
import Notificacoes from'./screens/Notifications';
import*as P from'./screens/Policies';
import*as S from'./screens/Assist';
const hdr={headerStyle:{backgroundColor:C.primary},headerTintColor:'#fff',headerTitleStyle:{fontWeight:'700',fontSize:20},headerShadowVisible:false,headerBackButtonDisplayMode:'minimal'};
const Bell=()=>{const nav=useNavigation();const{unread}=useApp();
return(<Pressable accessibilityRole="button" accessibilityLabel={`Notificações, ${unread} não lidas`} onPress={()=>nav.navigate('Notificacoes')} hitSlop={10} style={{marginRight:4}}><Ionicons name="notifications-outline" size={30} color="#fff"/>
{unread>0&&<View style={{position:'absolute',right:-2,top:-2,minWidth:16,height:16,borderRadius:8,backgroundColor:C.bad,alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontSize:10,fontWeight:'700'}}>{unread}</Text></View>}</Pressable>)};
const HomeTitle=()=>{const{user}=useApp();const ini=user.nome.split(' ').map(x=>x[0]).slice(0,2).join('').toUpperCase();
return(<View style={{flexDirection:'row',alignItems:'center',gap:14}}><View style={{width:48,height:48,borderRadius:24,backgroundColor:'#2f9fdc',alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontWeight:'700',fontSize:20}}>{ini}</Text></View><Text style={{color:'#fff',fontWeight:'700',fontSize:20}}>{user.nome}</Text></View>)};
const Tab=createBottomTabNavigator();
const tabs=[['TabInicio','Início','home-outline',Home],['TabAssistencia','Assistência','call-outline',S.Assistencia]];
const Tabs=()=>(<Tab.Navigator screenOptions={{...hdr,headerRight:()=><Bell/>,tabBarActiveTintColor:C.primary,tabBarInactiveTintColor:C.border,tabBarLabelStyle:{fontWeight:'600',fontSize:11},tabBarStyle:{backgroundColor:C.bg}}}>
{tabs.map(([n,t,i,c])=><Tab.Screen key={n} name={n} component={c} options={{title:t,tabBarIcon:({color,size})=><Ionicons name={i} size={size+4} color={color}/>,...(n==='TabInicio'&&{headerTitle:()=><HomeTitle/>,title:'Início'})}}/>)}</Tab.Navigator>);
const Stack=createNativeStackNavigator();
const inner=[['Notificacoes','Notificações',Notificacoes],['Apolices','Minhas apólices',P.Apolices],['ApoliceDetalhe','Detalhe da apólice',P.ApoliceDetalhe],['Indique','Indique amigos',S.Indique]];
export default function Nav(){
return(<NavigationContainer><StatusBar style="light"/>
<Stack.Navigator screenOptions={hdr}><Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>{inner.map(([n,t,c])=><Stack.Screen key={n} name={n} component={c} options={{title:t}}/>)}</Stack.Navigator></NavigationContainer>)}

import React from'react';
import{View,Text}from'react-native';
import{Screen,Card,T,s}from'../ui';
import{C}from'../theme';
import{useApp}from'../store';
export default function Notificacoes({navigation}){const{notifs,markRead}=useApp();
return(<Screen>{notifs.map(n=>(<Card key={n.id} style={s.rowC} onPress={()=>{markRead(n.id);if(n.to)navigation.navigate(n.to.name,n.to.params)}}><View style={{flex:1}}><Text style={[s.cardT,{fontSize:17,fontWeight:n.lida?'500':'700'}]}>{n.titulo}</Text><T>{n.texto}</T></View>{!n.lida&&<View accessibilityLabel="Não lida" style={{width:12,height:12,borderRadius:6,backgroundColor:C.primary}}/>}</Card>))}</Screen>)}

import React from'react';
import{Alert}from'react-native';
import{Screen,Card,Pill,T,Btn,PolicyCard,s}from'../ui';
import{View,Text}from'react-native';
import{POLICIES}from'../data';
export const Apolices=({navigation})=>(<Screen>{POLICIES.map(p=><PolicyCard key={p.id} p={p} onPress={()=>navigation.navigate('ApoliceDetalhe',{id:p.id})}/>)}</Screen>);
export function ApoliceDetalhe({route}){const p=POLICIES.find(x=>x.id===route.params.id);const pdf=()=>Alert.alert('PDF','O documento será disponibilizado quando a API estiver conectada.');
return(<Screen><Card><View style={s.top}><Text style={s.cardT}>{p.tipo}</Text><Pill label={p.status}/></View>
<T>Número</T><Text style={s.cardT}>{p.numero}</Text><T>Vigência</T><Text style={s.cardT}>{p.inicio} a {p.fim}</Text><T>Prêmio</T><Text style={s.cardT}>{p.premio}</Text></Card>
<Btn title="Visualizar PDF" onPress={pdf}/><Btn variant="outline" title="Baixar PDF" onPress={pdf}/></Screen>)}

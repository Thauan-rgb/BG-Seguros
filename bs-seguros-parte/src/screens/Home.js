import React from'react';
import{View,Text,Pressable}from'react-native';
import{Ionicons}from'@expo/vector-icons';
import{Screen,Card,H,T,Btn,PolicyCard,s}from'../ui';
import{C,R}from'../theme';
import{POLICIES}from'../data';
const tiles=[['Assistência 24h','call-outline','TabAssistencia']];
export default function Home({navigation}){
return(<Screen>
<Card style={{backgroundColor:C.primary,borderColor:'#000',height:90,justifyContent:'center'}}><Text style={{color:'#fff',fontSize:24,fontWeight:'900'}}>3 anos e 4 meses</Text><Text style={{color:'#fff',fontSize:13}}>como segurado da BS Seguros</Text></Card>
<H>Minhas apólices ativas</H>
{POLICIES.filter(p=>p.status==='Ativa').map(p=><PolicyCard key={p.id} p={p} onPress={()=>navigation.navigate('ApoliceDetalhe',{id:p.id})}/>)}
<Btn variant="soft" title="Ver todas as apólices" onPress={()=>navigation.navigate('Apolices')}/>
<H>Acesso rápido</H>
<View style={{flexDirection:'row',gap:14}}>{tiles.map(([t,i,r])=>(<Pressable key={t} accessibilityRole="button" accessibilityLabel={t} onPress={()=>navigation.navigate(r)} style={{flex:1,minHeight:91,backgroundColor:'#fff',borderWidth:1,borderColor:C.border,borderRadius:R,alignItems:'center',justifyContent:'center',gap:6,padding:6}}><Ionicons name={i} size={32} color={C.primary}/><Text style={{fontSize:13,textAlign:'center'}}>{t}</Text></Pressable>))}</View>
<Card onPress={()=>navigation.navigate('Indique')} style={{backgroundColor:C.soft,borderColor:C.teal,flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:12}}>
<View style={{flex:1}}><Text style={s.cardT}>Indique amigos</Text><T style={{fontWeight:'600'}}>Convide conhecidos para cotar na BS Seguros.</T></View>
<View style={{backgroundColor:C.primary,borderRadius:15,paddingVertical:8,paddingHorizontal:14}}><Text style={{color:'#fff',fontSize:20,fontWeight:'600'}}>Indicar</Text></View></Card>
</Screen>)}

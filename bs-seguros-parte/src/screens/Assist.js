import React from'react';
import{View,Text,Alert,Share}from'react-native';
import*as Clipboard from'expo-clipboard';
import{Screen,Card,Pill,T,H,Btn,Contact,s}from'../ui';
import{FONE,LINK,INDICACOES}from'../data';
export const Assistencia=()=>(<Screen><T>Adicione a assistência 24h do seu seguro</T>{['Auto','Residencial','Vida'].map(p=><Contact key={p} title={`Assistência 24h - ${p}`} phone={FONE}/>)}</Screen>);
export const Indique=()=>(<Screen><Card><T>Seu link de indicação</T><Text style={s.cardT}>{LINK}</Text>
<View style={{flexDirection:'row',gap:16,marginTop:12}}><Btn small style={{flex:1}} variant="outline" title="Copiar" onPress={async()=>{await Clipboard.setStringAsync(`https://${LINK}`);Alert.alert('Link copiado')}}/>
<Btn small style={{flex:1}} variant="outline" title="Compartilhar" onPress={()=>Share.share({message:`Cote seu seguro na BS Seguros: https://${LINK}`})}/></View></Card>
<H dark>Minhas indicações</H>{INDICACOES.map(i=><Card key={i.n} style={s.rowC}><Text style={s.cardT}>{i.n}</Text><Pill label={i.s}/></Card>)}</Screen>);

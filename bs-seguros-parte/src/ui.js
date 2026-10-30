import React,{useState}from'react';
import{View,Text,TextInput,Pressable,ScrollView,KeyboardAvoidingView,Platform,Modal,Linking,StyleSheet}from'react-native';
import{Ionicons}from'@expo/vector-icons';
import{C,R,TONE}from'./theme';
export const Screen=({children})=>(<KeyboardAvoidingView style={{flex:1,backgroundColor:C.bg}} behavior={Platform.OS==='ios'?'padding':undefined}><ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{padding:24,gap:16,flexGrow:1}}>{children}</ScrollView></KeyboardAvoidingView>);
export const Btn=({title,onPress,variant='solid',small,style})=>{const v={solid:[C.primary,'#fff',C.primary],outline:['#fff',C.primary,C.primary],soft:[C.soft,C.primary,'#c3c3c3'],danger:['#fff',C.bad,C.bad]}[variant];
return <Pressable accessibilityRole="button" onPress={onPress} style={({pressed})=>[s.btn,{backgroundColor:v[0],borderColor:v[2],opacity:pressed?.75:1},small&&{paddingVertical:13},style]}><Text style={[s.btnT,{color:v[1]},small&&{fontSize:16}]}>{title}</Text></Pressable>};
export const Link=({title,onPress})=>(<Pressable accessibilityRole="link" onPress={onPress} style={{alignItems:'center',padding:6}}><Text style={{color:C.primary,fontSize:20,fontWeight:'500'}}>{title}</Text></Pressable>);
export const Field=({label,error,...p})=>(<View style={{gap:8}}><Text style={s.label}>{label}</Text><TextInput placeholderTextColor="#8a8c93" {...p} style={[s.input,p.multiline&&{minHeight:140,textAlignVertical:'top'},!!error&&{borderColor:C.bad}]}/>{!!error&&<Text style={s.err}>{error}</Text>}</View>);
export const Select=({label,value,options,onChange})=>{const[o,setO]=useState(false);return(<View style={{gap:8}}><Text style={s.label}>{label}</Text>
<Pressable accessibilityRole="button" style={[s.input,s.sel]} onPress={()=>setO(true)}><Text>{value}</Text><Ionicons name="chevron-down" size={19}/></Pressable>
<Modal transparent animationType="fade" visible={o} onRequestClose={()=>setO(false)}><Pressable style={s.back} onPress={()=>setO(false)}><View style={s.sheet}>{options.map(x=><Pressable key={x} style={s.opt} onPress={()=>{onChange(x);setO(false)}}><Text style={[s.optT,x===value&&{color:C.primary,fontWeight:'700'}]}>{x}</Text></Pressable>)}</View></Pressable></Modal></View>)};
export const Check=({value,onChange,error,children})=>(<View><Pressable accessibilityRole="checkbox" accessibilityState={{checked:value}} onPress={()=>onChange(!value)} style={{flexDirection:'row',gap:10,alignItems:'center'}}><Ionicons name={value?'checkbox':'square-outline'} size={24} color={C.primary}/><Text style={{flex:1,fontSize:13}}>{children}</Text></Pressable>{!!error&&<Text style={s.err}>{error}</Text>}</View>);
export const Card=({children,onPress,style})=>onPress?<Pressable accessibilityRole="button" onPress={onPress} style={({pressed})=>[s.card,style,{opacity:pressed?.8:1}]}>{children}</Pressable>:<View style={[s.card,style]}>{children}</View>;
export const Pill=({label})=>{const c=TONE[label.toLowerCase()]||C.primary;return <View style={[s.pill,{borderColor:c}]}><Text style={[s.pillT,{color:c}]}>{label}</Text></View>};
export const H=({children,dark})=><Text accessibilityRole="header" style={[s.h,dark&&{color:'#000',fontSize:18}]}>{children}</Text>;
export const T=({children,style})=><Text style={[s.sm,style]}>{children}</Text>;
export const Title=({children,style})=><Text accessibilityRole="header" style={[{fontSize:20,fontWeight:'900',textAlign:'center'},style]}>{children}</Text>;
export const Row=({title,icon='chevron-forward',onPress,right})=>(<Card onPress={onPress} style={s.rowC}><Text style={s.cardT}>{title}</Text>{right||<Ionicons name={icon} size={24} color={C.primary}/>}</Card>);
export const PolicyCard=({p,onPress})=>(<Card onPress={onPress}><View style={s.top}><Text style={s.cardT}>{p.tipo}</Text><Pill label={p.status}/></View><T>N° {p.numero}</T><T>Vigência {p.inicio} a {p.fim}</T></Card>);
export const Contact=({title,phone})=>{const d=phone.replace(/\D/g,'');return(<Card><Text style={s.cardT}>{title}</Text><T>{phone}</T><View style={{flexDirection:'row',gap:16,marginTop:12}}><Btn small style={{flex:1}} variant="outline" title="Ligar" onPress={()=>Linking.openURL(`tel:${d}`)}/><Btn small style={{flex:1}} variant="outline" title="WhatsApp" onPress={()=>Linking.openURL(`https://wa.me/55${d}`)}/></View></Card>)};
export const Logo=()=>(<View style={s.logo} accessibilityLabel="BS Seguros, corretora de seguros"><Text style={{fontSize:40,fontWeight:'700',color:'#0a1a7a'}}>seguros</Text><Text style={{fontSize:13,color:'#0a1a7a'}}>Corretora de seguros</Text></View>);
export const s=StyleSheet.create({
btn:{borderWidth:1,borderRadius:R,paddingVertical:16,alignItems:'center'},btnT:{fontSize:20,fontWeight:'500'},
label:{fontSize:15,fontWeight:'500'},input:{borderWidth:1,borderColor:'#6b6d75',borderRadius:R,backgroundColor:'#fcfcfc',paddingHorizontal:18,paddingVertical:15,fontSize:15,minHeight:54},
err:{color:C.bad,fontSize:13,marginTop:4},sel:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
back:{flex:1,backgroundColor:'rgba(0,0,0,.4)',justifyContent:'center',padding:32},sheet:{backgroundColor:'#fff',borderRadius:R,overflow:'hidden'},opt:{padding:18,borderBottomWidth:StyleSheet.hairlineWidth,borderColor:C.border},optT:{fontSize:16},
card:{backgroundColor:'#fff',borderWidth:1,borderColor:C.border,borderRadius:R,paddingVertical:18,paddingHorizontal:24,gap:4},cardT:{fontSize:20,fontWeight:'700'},sm:{fontSize:14,fontWeight:'500',color:C.sub,lineHeight:21},
top:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',gap:8},rowC:{flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
pill:{borderWidth:1,borderRadius:R,paddingHorizontal:12,paddingVertical:2,backgroundColor:'#fff'},pillT:{fontSize:14,fontWeight:'600'},
h:{fontSize:20,fontWeight:'600',color:C.mute,marginTop:8},logo:{backgroundColor:'#fff',borderWidth:1,borderRadius:25,width:275,maxWidth:'100%',height:137,alignItems:'center',justifyContent:'center'}});

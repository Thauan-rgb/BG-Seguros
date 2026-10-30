import React,{createContext,useContext,useState}from'react';
import{NOTIFS}from'./data';
const Ctx=createContext();
export const useApp=()=>useContext(Ctx);
const USER={nome:'Thauan Veiga',email:'thauan@email.com',cpf:'',tel:''};
export function Provider({children}){
const[notifs,setNotifs]=useState(NOTIFS);
const v={user:USER,notifs,unread:notifs.filter(n=>!n.lida).length,markRead:id=>setNotifs(p=>p.map(n=>n.id===id?{...n,lida:true}:n))};
return <Ctx.Provider value={v}>{children}</Ctx.Provider>}

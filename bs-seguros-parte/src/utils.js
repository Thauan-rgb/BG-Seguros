export const digits=s=>String(s||'').replace(/\D/g,'');
export const maskCPF=v=>digits(v).slice(0,11).replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
export const maskPhone=v=>{const n=digits(v).slice(0,11);return n.length<=2?n:n.length<=6?`(${n.slice(0,2)}) ${n.slice(2)}`:n.length<=10?`(${n.slice(0,2)}) ${n.slice(2,6)}-${n.slice(6)}`:`(${n.slice(0,2)}) ${n.slice(2,7)}-${n.slice(7)}`};
export const maskDate=v=>digits(v).slice(0,8).replace(/(\d{2})(\d)/,'$1/$2').replace(/(\d{2})\/(\d{2})(\d)/,'$1/$2/$3');
export const maskDateTime=v=>{const n=digits(v).slice(0,12);return maskDate(n.slice(0,8))+(n.length>8?' '+n.slice(8,10)+(n.length>10?':'+n.slice(10):''):'')};
export const validEmail=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
export const validDate=v=>{const m=/^(\d{2})\/(\d{2})\/(\d{4})/.exec(v);if(!m)return false;const[,d,mo,y]=m.map(Number);const t=new Date(y,mo-1,d);return t.getDate()===d&&t.getMonth()===mo-1&&y>1900&&t<=new Date()};
export const validCPF=v=>{const n=digits(v);if(n.length!==11||/^(\d)\1+$/.test(n))return false;const c=l=>{let s=0;for(let i=0;i<l;i++)s+=n[i]*(l+1-i);const r=(s*10)%11;return r===10?0:r};return c(9)==n[9]&&c(10)==n[10]};
export const ok=x=>Object.keys(x).length===0;

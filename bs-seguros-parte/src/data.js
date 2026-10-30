export const POLICIES=[
{id:'1',tipo:'Residencial',numero:'RE-2025-00000',inicio:'15/03/2026',fim:'15/03/2027',status:'Ativa',premio:'R$ 1.280,00'},
{id:'2',tipo:'Auto',numero:'AU-2026-00000',inicio:'01/10/2026',fim:'10/10/2026',status:'Ativa',premio:'R$ 3.595,00'},
{id:'3',tipo:'Vida',numero:'VI-2026-00000',inicio:'01/10/2025',fim:'01/10/2026',status:'Vencida',premio:'R$ 890,00'}];
export const NOTIFS=[
{id:1,titulo:'Seu sinistro mudou de Status',texto:'SIN-2026-000123 está em análise.',lida:false},
{id:2,titulo:'Sua cotação foi respondida',texto:'Veja a resposta para o seguro Residencial.',lida:false},
{id:3,titulo:'Renovação em 30 dias',texto:'A apólice Auto vence em 10/10/2026.',lida:false,to:{name:'ApoliceDetalhe',params:{id:'2'}}},
{id:4,titulo:'Campanha de fim de ano',texto:'Fale com a BS Seguros e conheça as condições',lida:false}];
export const INDICACOES=[{n:'Carla Mendes',s:'Convertida'},{n:'Rafael Lima',s:'Contatada'},{n:'Bruno Alves',s:'Nova'}];
export const LINK='bsseguros.com/i/TV28K8Q';
export const FONE='(81) 0000-0000';

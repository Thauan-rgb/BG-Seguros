# BS Seguros — Front-end Mobile

Aplicativo mobile da **BS Seguros**, corretora de seguros, feito em **React Native (Expo)**. O cliente consulta apólices, pede cotações, abre e acompanha sinistros, acessa a assistência 24h e indica amigos.

> Projeto acadêmico. Os dados são fictícios (mock) e ainda não há backend conectado.

## Telas

| Área | Telas |
|---|---|
| Acesso | Login, Criar conta, Esqueci minha senha, Verifique seu e-mail, Conta criada |
| Início | Resumo do segurado, apólices ativas, acesso rápido, indicação |
| Apólices | Minhas apólices, Detalhe da apólice e PDF |
| Cotação | Meus pedidos, Nova cotação, Solicitar cotação, Detalhe da cotação |
| Sinistro | Contato de sinistro, Abrir sinistro, Sinistro aberto, Acompanhar sinistro |
| Assistência | Assistência 24h por produto (Auto, Residencial, Vida) |
| Configurações | Dados cadastrais, Trocar senha, Indique amigos, Ajuda |
| Geral | Notificações |

## Tecnologias

- [React Native](https://reactnative.dev/) + [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/) (stack + bottom tabs)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/) (Ionicons)
- expo-clipboard e expo-status-bar
- Estado global com Context API

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org/) LTS e o app **Expo Go** no celular (ou um emulador Android/iOS).

```bash
# 1. Crie o projeto base
npx create-expo-app@latest bs-seguros --template blank
cd bs-seguros

# 2. Copie App.js e a pasta src/ deste repositório por cima

# 3. Instale as dependências (o Expo escolhe as versões compatíveis)
npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context expo-clipboard expo-status-bar @expo/vector-icons

# 4. Inicie
npx expo start
```

Escaneie o QR code com o Expo Go, ou aperte `a` (Android) / `i` (iOS) para abrir no emulador.

**Login de teste:** qualquer e-mail válido e senha com 8 ou mais caracteres.

## Estrutura

```
App.js                 # entrada: providers + navegação
src/
├── navigation.js      # abas, stack e cabeçalho (sino de notificações)
├── store.js           # estado global (usuário, cotações, sinistros, notificações)
├── data.js            # dados mock
├── theme.js           # cores e raio padrão
├── utils.js           # máscaras e validações (CPF, telefone, data, e-mail)
├── ui.js              # componentes reutilizáveis (Btn, Field, Select, Card, Pill...)
└── screens/
    ├── Auth.js        # login, cadastro, redefinição de senha
    ├── Home.js        # início
    ├── Policies.js    # apólices e detalhe
    ├── Quotes.js      # cotações
    ├── Claims.js      # sinistros
    ├── Assist.js      # assistência, indicação, ajuda
    └── Settings.js    # configurações, dados cadastrais, notificações
```

## Como adicionar uma tela

1. Crie o arquivo em `src/screens/`, usando os componentes de `src/ui.js`.
2. Registre a rota no array `inner` (telas empilhadas) ou em `tabs` (abas) do `src/navigation.js`.
3. Navegue com `navigation.navigate('NomeDaRota')`.

## Padrões do projeto

- **Cores e estilos** ficam em `src/theme.js`. Evite valores soltos nas telas.
- **Componentes** repetidos vão para `src/ui.js`.
- **Formulários** usam as máscaras e validações de `src/utils.js`, com mensagem de erro em cada campo.
- **Dados** vêm de `src/data.js` e `src/store.js`. Para integrar uma API, troque essas fontes e mantenha as telas.

## Pendências conhecidas

- Sem backend: login, cadastro, redefinição de senha e troca de senha são simulados.
- Visualizar e baixar PDF da apólice mostram só um aviso.
- Logo em texto. Falta incluir o arquivo oficial e usar `<Image>` no componente `Logo` (`src/ui.js`).
- Notificações push ainda não implementadas.

## Design

Protótipo no Figma, com cores principais `#494a99` (roxo), `#f5f6fa` (fundo) e `#2e9e6b` (status ativo).

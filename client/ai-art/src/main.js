import { createApp, h } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'

import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://spacexserver2nd.dantelentsoe.repl.co/',
})

import { createApolloProvider } from '@vue/apollo-option'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
  render: () => h(App),
}).mount('#app')

app.use(apolloProvider)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './auth/AuthContext';
import App from './App';
import './styles/index.css';

//<Route path="/" element={<Home />}/>
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink
} from "@apollo/client";


const client = new ApolloClient({
  link: new HttpLink({
    uri:"https://tunnel-nevertheless-foreign-oven.trycloudflare.com/graphql"
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
          <App/>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
)

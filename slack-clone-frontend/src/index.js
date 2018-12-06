import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache()

const client =  new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000'
  })
});

const App = () => (
  <ApolloProvider client={client}>
    <Pages />;
  </ApolloProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

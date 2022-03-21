import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styled/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <GlobalStyles />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

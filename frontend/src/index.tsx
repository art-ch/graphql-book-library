import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styled/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
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

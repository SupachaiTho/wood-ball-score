import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './tailwind.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import store from '@/app/store';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

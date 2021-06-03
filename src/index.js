import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import AppRouter from '@/router/index.tsx'
import stores from './store';
import 'antd/dist/antd.css'
ReactDOM.render(
    <React.StrictMode>
      <Provider {...stores}>
        <AppRouter />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),    
);
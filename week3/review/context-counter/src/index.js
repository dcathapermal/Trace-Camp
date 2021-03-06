import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App';
import { CounterProvider} from 'context/CounterContext/CounterContext'

const root = {
    <CounterProvider>
    <App />;
    </CounterProivder>
} 

ReactDOM.render(root, document.getElementById('root'));
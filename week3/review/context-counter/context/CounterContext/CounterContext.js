import React from 'react';

const CounterContext = React.createContext();
export default CounterContext;

export const CounterProvider = props => {
    return <CounterContext.Provider>{props.children}</CounterContext.Provider>
}
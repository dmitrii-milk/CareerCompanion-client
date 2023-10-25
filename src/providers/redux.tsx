import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store';

const store = setupStore();

interface IReduxProvider extends PropsWithChildren {}

export const ReduxProvider: React.FC<IReduxProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

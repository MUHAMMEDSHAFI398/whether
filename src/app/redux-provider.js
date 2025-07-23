// app/redux-provider.js
'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store'; // adjust path if needed

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

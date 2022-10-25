import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      // Higher order component
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp;
import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      // Higher order component
      <Provider store={store}>
          <Toaster /> {/* It is better to put here because it will render in all the pages */}
          <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp;
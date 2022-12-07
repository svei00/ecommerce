import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "next-auth/react";
import { Session } from 'next-auth';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{session: Session;}>) {
  return (
      // Higher order component
      <SessionProvider session={session}>
        <Provider store={store}>
            <Toaster /> {/* It is better to put here because it will render in all the pages */}
            <Component {...pageProps} />
        </Provider>
      </SessionProvider>
  );
}

export default MyApp;
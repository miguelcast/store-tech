import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import Navigation from './navigation';
import apolloClient from './config/apollo';
import makeStore from './config/store';

const { store, persistor } = makeStore();

function Index() {
  const [ isLoaded ] = useFonts({
    'Muli-Black': require('../assets/fonts/Muli-Black.ttf'),
    'Muli-Medium': require('../assets/fonts/Muli-Medium.ttf'),
    'Muli-ExtraLight': require('../assets/fonts/Muli-ExtraLight.ttf'),
  });

  if (!isLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<AppLoading />} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Navigation />
          </ApplicationProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default Index;

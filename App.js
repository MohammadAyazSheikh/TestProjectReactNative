import React from 'react';
import RootStack from './src/routes/rootStackNavigation';
import { configureStore } from './src/redux/configStore';
import { Provider } from 'react-redux';

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  )
}

export default App;
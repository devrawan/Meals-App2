import 'react-native-gesture-handler';
import React from 'react';


import StoreSplash from './src/Screens/App4/StoreSplash'

import { observer } from 'mobx-react'


const App = observer(() => {
  return (
    <StoreSplash />
  );
})

export default App;

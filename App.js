import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './src/telas/Principal';
import Sobre from './src/telas/Sobre';
import DesenvolvimentodeSistemas from './src/telas/DesenvolvimentodeSistemas';
import Admnistração from './src/telas/Admnistração';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Desenvolvimento de Sistemas" component={DesenvolvimentodeSistemas} />
        <Stack.Screen name="Admnistração " component={Admnistração} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

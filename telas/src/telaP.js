import React from 'react';
import { View, Button } from 'react-native';

const telaP = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('Sobre')}
      />
      <Button
        title="Desenvolvimento de Sistemas"
        onPress={() => navigation.navigate('Desenvolvimento de Sistemas')}
      />
      <Button
        title="Administração"
        onPress={() => navigation.navigate('Admnistração ')}
      />
    </View>
  );
}

export default telaP;

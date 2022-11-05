import { 
  Button,
  StyleSheet, 
  TextInput, 
  View 
} from 'react-native';

//https://reactnative.dev/docs/components-and-apis
import {useState} from 'react';

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const capturarTexto = (lembreteDigitado) =>{
    lembreteDigitado = lembreteDigitado.toUpperCase()
    // Não faça isso!!!
    // lembrete = lembreteDigitado

    // Faça isso!!!
    setLembrete(lembreteDigitado)
  }

  const adicionarLembrete = () => {
    console.log("Adicionando...", lembrete)
    setLembrete('')
  }
  // Single Source of Truth
  return (
    <View style = {{padding: 40}}>
      <View>
        <TextInput
          style={{borderBottonColor: '#CCC', borderBottomWidth: 2, padding: 12, 
          marginBottom: 4}}
          placeholder="Lembrar..."
          onChangeText={capturarTexto}
          value={lembrete}
        />
        <Button
          title = 'OK'
          onPress={adicionarLembrete}
        />
      </View>
      <View>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({
    
});

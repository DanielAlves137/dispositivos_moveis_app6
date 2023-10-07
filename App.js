import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {

    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
  
    const gerarNumeroAleatorio = () => {
      const numero = Math.floor(Math.random() * 11); // Gera um número aleatório entre 0 e 99
      setNumeroAleatorio(numero);
    };
  
  let img = 'https://static.wikia.nocookie.net/enter-the-matrix/images/8/84/Matrix.png/revision/latest?cb=20131202023025&path-prefix=pt-br';

  return (
    <View style={styles.container}>
      <View>
        <Text style = {styles.titulo}>Jogo do Numero Aleatório</Text>
      </View>
      <View>
        <Image
        source = {{ uri: img }}
        style = {styles.imagem}
        />
      </View>
      <View>
        <Text style={styles.titulo}>Número Aleatório:</Text>
        <Text style={styles.resultado}>{numeroAleatorio !== null ? numeroAleatorio : '-'}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.verificar} onPress={gerarNumeroAleatorio}>
          <Text>Gerar numero</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
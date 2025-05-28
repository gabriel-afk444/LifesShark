import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function Paiva() {
  return (
    <ScrollView style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Recife_-_Pernambuco_-_Brasil%282%29.jpg' }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia do Paiva</Text>
      <Text style={styles.text}>
        Localizada entre o Cabo de Santo Agostinho e Jaboatão dos Guararapes, a Praia do Paiva é conhecida por sua beleza natural, tranquilidade e sofisticação.
        Com águas claras, coqueiros e áreas preservadas, é ideal para quem busca um refúgio mais exclusivo.
      </Text>

      <Text style={styles.subtitle}>Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 5h20 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 11h30 - 0.2m</Text>
        <Text style={styles.tideText}>Maré Alta: 17h40 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h50 - 0.3m</Text>
      </View>

      <Text style={styles.subtitle}>Linhas de Ônibus</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>- 198 - Paiva / Barro</Text>
        <Text style={styles.tideText}>- 199 - Paiva / Candeias</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  tideBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  tideText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

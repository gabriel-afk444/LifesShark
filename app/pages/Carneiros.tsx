import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function Carneiros() {
  return (
    <ScrollView style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/dicas-praia-dos-carneiros-capa2019-01.jpg' }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia dos Carneiros</Text>
      <Text style={styles.text}>
        Localizada no município de Tamandaré, em Pernambuco, a Praia dos Carneiros é famosa por suas águas calmas, coqueiros e a charmosa capela de São Benedito à beira-mar.
        É um dos destinos mais paradisíacos do litoral nordestino.
      </Text>

      <Text style={styles.subtitle}>Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 5h10 - 2.6m</Text>
        <Text style={styles.tideText}>Maré Baixa: 11h20 - 0.2m</Text>
        <Text style={styles.tideText}>Maré Alta: 17h30 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h50 - 0.3m</Text>
      </View>

      <Text style={styles.subtitle}>Linhas de Ônibus</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>- 195 - Barreiros / Recife (via Carneiros)</Text>
        <Text style={styles.tideText}>- 195-A - Tamandaré / Terminal Integrado</Text>
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

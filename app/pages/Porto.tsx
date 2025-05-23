import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function Porto() {
  return (
    <ScrollView style={styles.container}>
      {}
      <Image
        source={{
          uri: 'https://pousadadasgalinhas.com.br/wp-content/uploads/2024/07/porto-de-galinhas-2.webp',
        }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia de Porto de Galinhas</Text>
      <Text style={styles.text}>
        Localizada no litoral de Pernambuco, a Praia de Porto de Galinhas é um dos destinos mais populares do Brasil. Com suas águas cristalinas, piscinas naturais e recifes de corais, é um lugar perfeito para mergulho e lazer.
      </Text>

      <Text style={styles.subtitle}>Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 4h30 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 10h40 - 0.3m</Text>
        <Text style={styles.tideText}>Maré Alta: 16h55 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h10 - 0.4m</Text>
      </View>

      <Text style={styles.subtitle}>Ônibus para Porto de Galinhas</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Linha 1: Terminal de Ônibus Recife - Porto de Galinhas</Text>
        <Text style={styles.tideText}>Linha 2: Boa Viagem - Porto de Galinhas</Text>
        <Text style={styles.tideText}>Linha 3: Aeroporto Internacional - Porto de Galinhas</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4', 
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
  },
  tideText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

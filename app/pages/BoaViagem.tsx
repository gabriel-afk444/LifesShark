import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function BoaViagem() {
  return (
    <ScrollView style={styles.container}>
      {/* Imagem da Praia de Boa Viagem */}
      <Image
        source={{ uri: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2024/03/Portal-da-CopabarraME.jpg?quality=70&strip=info&w=1280&h=720&crop=1' }} // Substitua com a URL ou require para imagem local
        style={styles.image}
      />

      <Text style={styles.title}>Praia de Boa Viagem</Text>
      <Text style={styles.text}>
        Localizada em Recife, Pernambuco, a Praia de Boa Viagem é uma das mais famosas do Nordeste brasileiro.
        Com águas mornas e recifes que formam piscinas naturais na maré baixa, é ideal para banho e lazer.
      </Text>

      <Text style={styles.subtitle}>Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 4h30 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 10h40 - 0.3m</Text>
        <Text style={styles.tideText}>Maré Alta: 16h55 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h10 - 0.4m</Text>
      </View>

      {/* Seção de ônibus logo abaixo da Tábua de Marés */}
      <Text style={styles.subtitle}>Ônibus que Passam na Praia de Boa Viagem</Text>
      <View style={styles.busBox}>
        <Text style={styles.busText}>- Linha 103 (Boa Viagem x Centro)</Text>
        <Text style={styles.busText}>- Linha 107 (Boa Viagem x Aeroporto)</Text>
        <Text style={styles.busText}>- Linha 109 (Boa Viagem x Barra de Jangada)</Text>
        <Text style={styles.busText}>- Linha 130 (Boa Viagem x Caxangá)</Text>
        {/* Adicione mais linhas de ônibus conforme necessário */}
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
    height: 200, // Ajuste o tamanho conforme necessário
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
  busBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
  },
  busText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

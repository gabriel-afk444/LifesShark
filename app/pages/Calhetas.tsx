import React from 'react';
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function Calhetas() {
  return (
    <ScrollView style={styles.container}>
      {}
      <Image
        source={{ uri: 'https://caminhosmelevem.com/wp-content/uploads/2023/08/calhetas-pernambuco-edit-1.jpg' }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia de Calhetas</Text>
      <Text style={styles.text}>
        Situada no município de Cabo de Santo Agostinho, a Praia de Calhetas é uma pequena enseada com águas cristalinas e rodeada por morros cobertos de vegetação.
        É ideal para quem busca tranquilidade, trilhas e paisagens deslumbrantes.
      </Text>

      <Text style={styles.subtitle}>Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 5h00 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 11h10 - 0.3m</Text>
        <Text style={styles.tideText}>Maré Alta: 17h20 - 2.3m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h30 - 0.4m</Text>
      </View>

      <Text style={styles.subtitle}>Linhas de Ônibus</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>- 196 - Cabo / Recife</Text>
        <Text style={styles.tideText}>- 197 - Pontezinha / Calhetas</Text>
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

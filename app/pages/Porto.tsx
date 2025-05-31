import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';

type Clima = {
  temperature: number;
  weathercode: number;
  windspeed: number;
  humidity: number;
};

export default function Porto() {
  const [clima, setClima] = useState<Clima | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarClima() {
      try {
        const resposta = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-8.51&longitude=-35.01&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&timezone=auto'
        );
        const json = await resposta.json();
        const atual = json.current;
        setClima({
          temperature: atual.temperature_2m,
          weathercode: atual.weathercode,
          windspeed: atual.windspeed_10m,
          humidity: atual.relative_humidity_2m,
        });
      } catch (error) {
        console.error('Erro ao buscar clima:', error);
      } finally {
        setCarregando(false);
      }
    }

    buscarClima();
  }, []);

  const traduzirClima = (codigo: number) => {
    const mapa: { [key: number]: string } = {
      0: 'Céu limpo',
      1: 'Principalmente limpo',
      2: 'Parcialmente nublado',
      3: 'Nublado',
      45: 'Nevoeiro',
      48: 'Nevoeiro com geada',
      51: 'Garoa leve',
      53: 'Garoa moderada',
      55: 'Garoa intensa',
      61: 'Chuva leve',
      63: 'Chuva moderada',
      65: 'Chuva intensa',
      80: 'Chuvas fracas',
      81: 'Chuvas moderadas',
      82: 'Chuvas fortes',
    };
    return mapa[codigo] || 'Condição desconhecida';
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://pousadadasgalinhas.com.br/wp-content/uploads/2024/07/porto-de-galinhas-2.webp' }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia de Porto de Galinhas</Text>
      <Text style={styles.text}>
        Localizada no litoral de Pernambuco, a Praia de Porto de Galinhas é um dos destinos mais populares do Brasil. Com suas águas cristalinas, piscinas naturais e recifes de corais, é um lugar perfeito para mergulho e lazer.
      </Text>

      <Text style={styles.subtitle}>☀️ Clima Atual</Text>
      {carregando ? (
        <ActivityIndicator size="large" color="#0080ff" />
      ) : (
        clima && (
          <View style={styles.tideBox}>
            <Text style={styles.tideText}>🌡️ Temperatura: {clima.temperature}°C</Text>
            <Text style={styles.tideText}>☁️ Condição: {traduzirClima(clima.weathercode)}</Text>
            <Text style={styles.tideText}>💧 Umidade: {clima.humidity}%</Text>
            <Text style={styles.tideText}>💨 Vento: {clima.windspeed} km/h</Text>
          </View>
        )
      )}

      <Text style={styles.subtitle}>🌊 Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 4h30 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 10h40 - 0.3m</Text>
        <Text style={styles.tideText}>Maré Alta: 16h55 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h10 - 0.4m</Text>
      </View>

      <Text style={styles.subtitle}>🚌 Ônibus para Porto de Galinhas</Text>
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
    marginBottom: 20,
  },
  tideText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

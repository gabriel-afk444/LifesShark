import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';

type Clima = {
  temperature: number;
  weathercode: number;
  windspeed: number;
  humidity: number;
};

export default function BoaViagem() {
  const [clima, setClima] = useState<Clima | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarClima() {
      try {
        const resposta = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-8.12&longitude=-34.9&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&timezone=auto'
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

  const renderClima = () => {
    if (!clima) return null;

    const descricao = traduzirClima(clima.weathercode);

    return (
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>🌡️ Temperatura: {clima.temperature}°C</Text>
        <Text style={styles.tideText}>☁️ Condição: {descricao}</Text>
        <Text style={styles.tideText}>💨 Vento: {clima.windspeed} km/h</Text>
        <Text style={styles.tideText}>💧 Umidade: {clima.humidity}%</Text>
      </View>
    );
  };

  const traduzirClima = (codigo: number) => {
    const descricoes: { [key: number]: string } = {
      0: 'Céu limpo',
      1: 'Principalmente limpo',
      2: 'Parcialmente nublado',
      3: 'Nublado',
      45: 'Nevoeiro',
      48: 'Nevoeiro com geada',
      51: 'Garoa leve',
      53: 'Garoa moderada',
      55: 'Garoa densa',
      61: 'Chuva leve',
      63: 'Chuva moderada',
      65: 'Chuva intensa',
      80: 'Chuvas fracas',
      81: 'Chuvas moderadas',
      82: 'Chuvas fortes',
    };
    return descricoes[codigo] || 'Condição desconhecida';
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2024/03/Portal-da-CopabarraME.jpg?quality=70&strip=info&w=1280&h=720&crop=1' }}
        style={styles.image}
      />

      <Text style={styles.title}>Praia de Boa Viagem</Text>
      <Text style={styles.text}>
        Localizada em Recife, Pernambuco, a Praia de Boa Viagem é uma das mais famosas do Nordeste brasileiro.
        Com águas mornas e recifes que formam piscinas naturais na maré baixa, é ideal para banho e lazer.
      </Text>

      <Text style={styles.subtitle}>☀️ Clima Atual</Text>
      {carregando ? <ActivityIndicator size="large" color="#008ff5" /> : renderClima()}

      <Text style={styles.subtitle}>🌊 Tábua de Marés - Hoje</Text>
      <View style={styles.tideBox}>
        <Text style={styles.tideText}>Maré Alta: 4h30 - 2.5m</Text>
        <Text style={styles.tideText}>Maré Baixa: 10h40 - 0.3m</Text>
        <Text style={styles.tideText}>Maré Alta: 16h55 - 2.4m</Text>
        <Text style={styles.tideText}>Maré Baixa: 23h10 - 0.4m</Text>
      </View>

      <Text style={styles.subtitle}>🚌 Ônibus que Passam na Praia</Text>
      <View style={styles.busBox}>
        <Text style={styles.busText}>- Linha 103 (Boa Viagem x Centro)</Text>
        <Text style={styles.busText}>- Linha 107 (Boa Viagem x Aeroporto)</Text>
        <Text style={styles.busText}>- Linha 109 (Boa Viagem x Barra de Jangada)</Text>
        <Text style={styles.busText}>- Linha 130 (Boa Viagem x Caxangá)</Text>
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
  busBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  busText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

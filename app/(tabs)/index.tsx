import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image } from 'expo-image';
import { Link, RelativePathString } from 'expo-router';
import { useState } from 'react';
import { FlatList, ImageBackground, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {

const praias = [
  {
    id: 1,
    nome: 'Praia de Boa Viagem',
    imagem: 'https://viagemeturismo.abril.com.br/wp-content/uploads/2024/03/Portal-da-CopabarraME.jpg?crop=1&resize=1212,909',
    rota: "/pages/BoaViagem"
  },
  {
    id: 2,
    nome: 'Porto de Galinhas',
    imagem: 'https://pousadadasgalinhas.com.br/wp-content/uploads/2024/07/porto-de-galinhas-2.webp',
    rota: "/pages/Porto"
  },
  {
    id: 3,
    nome: 'Praia dos Carneiros',
    imagem: 'https://magazine.zarpo.com.br/wp-content/uploads/2021/06/capa-praia-dos-carneiros.jpg',
    rota: "/pages/Carneiros"
  },
  {
    id: 4,
    nome: 'Praia de Calhetas',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8a/a6/8f/vista-da-praia.jpg?w=1200&h=-1&s=1',
    rota: "/pages/Calhetas"
  },
  {
    id: 5,
    nome: 'Praia do Paiva',
    imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f2/6f/55/photo4jpg.jpg?w=900&h=500&s=1',
    rota: "/pages/Paiva"
  }
];

const [searchText, setSearchText] = useState('');

const praiasFiltradas = praias.filter(praia =>
  praia.nome.toLowerCase().includes(searchText.toLowerCase())
);

  return ( 
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      
      headerImage={
        <Image
          source={require('@/assets/images/LifeShark.png')}
          style={styles.reactLogo}
        />
      }>

  <View style={{ padding: 10, zIndex: 2 }}>
  <TextInput
    placeholder="Buscar praia..."
    value={searchText}
    onChangeText={setSearchText}
    style={{
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      padding: 10,
      fontSize: 16,
    }}
  />
</View>

    {searchText !== '' ? (
  <View style={styles.listContainer}>
    <FlatList
      horizontal
      data={praiasFiltradas}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.lista}
      renderItem={({ item }) => (
         <Link href={item.rota as `${RelativePathString}`}>
        <View style={styles.card} key={item.id}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <Text style={styles.nome}>{item.nome}</Text>
        </View>
        </Link>
      )}
    />
  </View>
) : (
  <>
    

    <View style={styles.listContainer}>
      
<FlatList
  horizontal
  data={praias}
  keyExtractor={(item) => item.id.toString()}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.lista}
  renderItem={({ item }) => (
    <Link href={item.rota as `${RelativePathString}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{uri: item.imagem}} style={styles.imagem} />
        <Text style={styles.nome}>{item.nome}</Text>
      </TouchableOpacity>
    </Link>
  )}
/>
    </View>
    

     <ImageBackground
    source={require('@/assets/images/texturazul.png')}
    style={styles.background}
    resizeMode='cover'>
     
     <View style={styles.align}>
      <TouchableOpacity onPress={() => Linking.openURL('https://g1.globo.com/pb/paraiba/noticia/2025/05/08/sem-conseguir-mergulhar-tartaruga-marinha-e-resgatada-no-mar-da-praia-de-intermares-em-cabedelo.ghtml')}>
      <ThemedView style={styles.box}>
        <Image
        source={{uri : 'https://s2.glbimg.com/vdf5mXnag-wEufOrvPTdjmUADME=/346x195/smart/http%3A//i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/i/k/e3ezlnTAONDmJkGtToyA/resgate-tartaruga.jpg'}}
        style = {styles.imageFeed}
        /> 
        <ThemedText style={styles.boxText} type="subtitle">Sem conseguir mergulhar, tartaruga marinha é resgatada no mar da Praia de Intermares, em Cabedelo</ThemedText>
      </ThemedView></TouchableOpacity>


      <TouchableOpacity onPress={() => Linking.openURL('https://g1.globo.com/busca/click?q=noticias+sobre+a+fauna+marinha+e+seus+diversos&p=10&r=1746737483003&u=https%3A%2F%2Fgloboplay.globo.com%2Fv%2F13568110%2F&syn=False&key=1afc546655a94c0cd9f632f2ebc04f6e')}>
      <ThemedView style={styles.box}>
      <Image
        source={{uri : 'https://s03.video.glbimg.com/x216/13568110.jpg'}}
        style = {styles.imageFeed}
        /> 
        <ThemedText style={styles.boxText} type='subtitle'>Tartaruga marinha morre na Praia do Forte, em Cabo Frio</ThemedText>
      </ThemedView></TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://g1.globo.com/busca/click?q=ataque+de+tubarao+recife&p=2&r=1746737695992&u=https%3A%2F%2Fg1.globo.com%2Fpe%2Fpernambuco%2Fne2%2Fvideo%2Fcampanha-orienta-banhistas-sobre-ataques-de-tubarao-no-recife-12404559.ghtml&syn=False&key=03892a1971823e56d6977d9c09fb3afd')}>
      <ThemedView style={styles.box}>
      <Image
        source={{uri : 'https://s04.video.glbimg.com/x216/12404559.jpg'}}
        style = {styles.imageFeed}
        /> 
        <ThemedText style={styles.boxText} type='subtitle'>Campanha orienta banhistas sobre ataques de tubarão no Recife</ThemedText>
      </ThemedView></TouchableOpacity>
    
      <TouchableOpacity onPress={() => Linking.openURL('https://g1.globo.com/pe/pernambuco/noticia/2025/04/08/fotografo-resgata-tubarao-lixa-encalhado-na-praia-do-paiva-em-jaboatao-video.ghtml')}>
      <ThemedView style={styles.box}>
      <Image
        source={{uri : 'https://s2.glbimg.com/2eYnazOjasCHB8My_-YipXpA7y4=/346x195/smart/http%3A//i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/b/A/eWyKEGQSyFC4tNLMAPgw/tubarao-1.png'}}
        style = {styles.imageFeed}
        /> 
        <ThemedText style={styles.boxText}type='subtitle'>Fotógrafo resgata tubarão-lixa encalhado na Praia do Paiva, no Grande Recife</ThemedText>
      </ThemedView></TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://g1.globo.com/jornal-hoje/video/fiscalizacao-e-reforcada-no-grande-recife-apos-2o-ataque-de-tubarao-em-24h-11426926.ghtml')}>
      <ThemedView style={styles.box}>
      <Image
        source={{uri : 'https://s03.video.glbimg.com/x216/11426926.jpg'}}
        style = {styles.imageFeed}
        /> 
        <ThemedText style={styles.boxText} type='subtitle'>Fiscalização é reforçada no Grande Recife após 2º ataque de tubarão em 24h
        </ThemedText>
      </ThemedView></TouchableOpacity>
    </View>
      </ImageBackground>
  </>
)}
     
     </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  listContainer: {
    zIndex: 1, 
    marginBottom: 10, 
  },
  
  background:{
    position:'static',
    
  },
  align:{
    width: '100%', 
    alignItems: 'center', 
    paddingBottom: 20,

 
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 250,
    width: 380,
    bottom: 0,
    left: 0,
    position: 'relative',
  },
  container: {
    flex: 1,
    marginLeft:-40,
  },
  box: {//box da noticia
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%', 
    maxWidth: 350, 
    height: 80,
    backgroundColor: '#2c7aa4',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    elevation: 0,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    alignSelf: 'center',
  },
  boxText: {
    color: '#fff', 
    fontSize: 16,
    flexShrink : 1,
    textAlign:'auto',
  },
  imageFeed:{//imagem que vai ficar ao lado da noticia
    borderRadius: 10,
    height:70,
    width:100,
    
    
    
    
  },

  Content:{
  alignSelf: 'center',
  textAlign: 'center'
  },
    lista: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    marginRight: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  nome: {
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

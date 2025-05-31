import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name='chevron-down.fill'
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projeto LifeShark</ThemedText>
      </ThemedView>
      <ThemedText>LifeShark</ThemedText>
      <Collapsible title="sobre">
        <ThemedText>
          App desenvolvido em React Native para projeto da disciplina Programação para Dispoisitos Móveis
        </ThemedText>
      </Collapsible>

      <Collapsible title="objetivos">
        <ThemedText>
          1- Informações atualizadas sobre clima, marés e linhas de ônibus das praias de Recife{' '}
        </ThemedText>
        <ThemedText>
          2- Promover a conscientização ambiental entre frequentadores das praias, com foco na prevenção de ataques de tubarão{' '}
        </ThemedText>
        <ThemedText>
          3- Fomentar o turismo sustentável e seguro nas praias de Recife, oferecendo conteúdo informativo e educativo de fácil acesso{' '}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Equipe">
        <ThemedText>
          Gabriel F. de Souza
        </ThemedText>
        <ThemedText>
          Gabriel Wanderley C. de Melo
        </ThemedText>
        <ThemedText>
          João Pedro N. S. de Oliveira
        </ThemedText>
        <ThemedText>
          Jurandir de C. Vasconcelos, Lucas M. Tavares, Thiago M. Pinheiro
        </ThemedText>
        <ThemedText>
          Lucas M. Tavares
        </ThemedText>
        <ThemedText>
          Thiago M. Pinheiro
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

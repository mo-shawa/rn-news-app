import { StatusBar, SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';


export default function App() {
  return (
    <SafeAreaView >
      <View>
        <Header />
      </View>
      <View style={styles.container}>
        <Card />
        <Card />
        <Card />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const PRIMARY_COLOR = '#4a67a2'
const LIGHT_COLOR = '#fbfbfc'
const DARK_COLOR = '#fbfbfc'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHT_COLOR,
    width: '100%'
  },
});

import { NativeBaseProvider, StatusBar } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';

import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent //Faz com que a barrinha superior meio que suma e deixe que o conteúdo ocupe a tela toda e não só dps da barrinha superior
      />

      {fontsLoaded ? <Routes/> : <Loading/>}
    </NativeBaseProvider>
  );
}

import 'react-native-gesture-handler';
import react from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PracticeScreen from './android/app/src/screens/PracticeScreen';
// import HomeScreen from './android/app/src/screens/oldHomeScree';
import MainNavigation from './android/app/src/navigation/MainNavigation'
import { SafeAreaView } from 'react-native';
import HomeScreen from './android/app/src/screens/HorizontalList';
const App = ()=>{
  return (
    <SafeAreaView>
       <MainNavigation/> 

    </SafeAreaView>
  );
};

export default App;
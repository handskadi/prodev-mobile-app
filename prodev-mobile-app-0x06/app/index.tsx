import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ImageBackground,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants';
import { AntDesign } from '@expo/vector-icons';
import "@/styles/global.css"

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor='#2B876E' />
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.companyLogo}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>
                Find your favorite place here
              </Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push('/join')}
                >
                  <Text style={{ ...styles.textSmall, color: 'black' }}>
                    Join here
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.transparentButton}
                  onPress={() => router.push('/signin')}
                >
                  <Text style={styles.textSmall}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                <TouchableOpacity onPress={() => router.push('/(home)')}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white' }}>Continue to home</Text>
                    <View style={{ marginLeft: 8 }}>
                      <AntDesign name="arrowright" size={14} color="white" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: Dimensions.get('window').height,
  },
  companyLogo: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: 'center',
  },
  textLarge: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
  transparentButton: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    flex: 1,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
  },
});

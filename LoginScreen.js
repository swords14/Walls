import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ImageBackground,
} from 'react-native';

// Importe o hook useNavigation do React Navigation
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('Teclado está visível!');
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Teclado está oculto!');
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // Use o hook useNavigation para acessar o objeto de navegação
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log(`Login com Email: ${email} e Senha: ${password}`);
    // Lógica de autenticação aqui

    // Simule a autenticação bem-sucedida (substitua por sua lógica real)
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Navegue para a tela principal (HomeScreen)
      navigation.navigate('Home');
    } else {
      // Lidar com autenticação falhada
      console.log('Autenticação falhou. Verifique o email e senha.');
    }
  };

  const handleInstagramLogin = () => {
    console.log('Login com Instagram');
  };

  const handleGoogleLogin = () => {
    console.log('Login com Google');
  };

  const handleFacebookLogin = () => {
    console.log('Login com Facebook');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/418/400/HD-wallpaper-your-name-anime.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.content}>
          <Text style={styles.title}>UltraVisionWalls</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialLoginButton, { backgroundColor: '#bc2a8d' }]}
            onPress={handleInstagramLogin}
          >
            <Text style={styles.socialLoginButtonText}>Login com Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialLoginButton, { backgroundColor: '#dd4b39' }]}
            onPress={handleGoogleLogin}
          >
            <Text style={styles.socialLoginButtonText}>Login com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.socialLoginButton, { backgroundColor: '#3b5998' }]}
            onPress={handleFacebookLogin}
          >
            <Text style={styles.socialLoginButtonText}>Login com Facebook</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Ajuste a opacidade conforme necessário
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialLoginButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  socialLoginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;

// AboutUsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AboutUsScreen = () => {
  const sendEmail = () => {
    Linking.openURL('mailto:Mateusp7441@gmail.com?subject=Feedback%20App');
  };

  return (
    <View style={styles.container}>
      <AntDesign name="info" size={80} color="#3498db" />
      <Text style={styles.title}>Sobre Nós</Text>
      <Text style={styles.description}>
        Bem-vindo ao nosso aplicativo! Somos uma equipe dedicada a proporcionar as melhores
        experiências para nossos usuários. Se você tiver alguma dúvida, sugestão ou feedback,
        entre em contato conosco.
      </Text>
      <TouchableOpacity style={styles.emailButton} onPress={sendEmail}>
        <AntDesign name="mail" size={24} color="#fff" />
        <Text style={styles.buttonText}>Enviar Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  emailButton: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default AboutUsScreen;

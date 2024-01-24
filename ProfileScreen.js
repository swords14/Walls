// ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfile = () => {
    // Navegar para a tela de edição de perfil
    navigation.navigate('EditProfile');
  };

  const handleChangePassword = () => {
    // Navegar para a tela de solicitação de alteração de senha
    navigation.navigate('ChangePasswordRequestScreen');
  };

  const handleSettings = () => {
    navigation.navigate('Configurations');
  };

const handleAbout = () => {
  navigation.navigate('AboutUsScreen');
};

  const handleLogout = () => {
    alert('Realizar logout');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <TouchableOpacity style={styles.profileOption} onPress={handleEditProfile}>
        <AntDesign name="edit" size={24} color="#3498db" />
        <Text style={styles.profileOptionText}>Editar Perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileOption} onPress={handleChangePassword}>
        <AntDesign name="lock" size={24} color="#3498db" />
        <Text style={styles.profileOptionText}>Alterar Senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileOption} onPress={handleSettings}>
        <Entypo name="cog" size={24} color="#3498db" />
        <Text style={styles.profileOptionText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileOption} onPress={handleAbout}>
        <AntDesign name="infocirlceo" size={24} color="#3498db" />
        <Text style={styles.profileOptionText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileOption} onPress={handleLogout}>
        <AntDesign name="logout" size={24} color="#e74c3c" />
        <Text style={[styles.profileOptionText, { color: '#e74c3c' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3498db',
    marginBottom: 20,
  },
  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 8,
  },
  profileOptionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default ProfileScreen;

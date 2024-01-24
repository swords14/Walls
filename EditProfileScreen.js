// EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleSaveChanges = () => {
    // Lógica para salvar as alterações no perfil
    alert(`Salvando alterações:\nNome: ${name}\nEmail: ${email}\nData de Nascimento: ${dateOfBirth}\nTelefone: ${phone}\nBio: ${bio}\nGênero: ${gender}`);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.imageFrame}>
            {profileImage ? (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            ) : (
              <Text style={styles.addPhotoText}>Adicionar Foto de Perfil</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={gender}
        onChangeText={setGender}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
        <Text style={styles.saveButtonText}>Salvar Alterações</Text>
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
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ecf0f1', // Cor de fundo da moldura
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bdc3c7', // Cor da borda da moldura
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  addPhotoText: {
    color: '#3498db',
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditProfileScreen;

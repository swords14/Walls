// ConfigurationsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, StyleSheet, } from 'react-native';
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const ConfigurationsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [clearData, setClearData] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(true);

  const handleToggleSwitch = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleClearDataToggle = () => {
    setClearData((prevState) => !prevState);
  };

  const handleToggleNotifications = () => {
    setReceiveNotifications((prevState) => !prevState);
  };

  const handleClearCache = () => {
    setClearData(false); // Reset the toggle after clearing cache
    // Lógica para limpar o cache
    alert('Cache limpo!');
  };

  const handleTermsOfService = () => {
    navigation.navigate('TermsOfService');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.configOption}>
        <Text style={styles.optionText}>Modo Noturno</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#3498db" }}
          thumbColor={isDarkMode ? "#f4f3f4" : "#f0f0f0"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleSwitch}
          value={isDarkMode}
        />
      </View>

      <View style={styles.configOption}>
        <Text style={styles.optionText}>Idioma</Text>
        <Picker
          style={styles.languagePicker}
          selectedValue={language}
          onValueChange={handleLanguageChange}
        >
          <Picker.Item label="Inglês" value="en" />
          <Picker.Item label="Português" value="pt" />
          {/* Adicione mais idiomas conforme necessário */}
        </Picker>
      </View>

      <View style={styles.configOption}>
        <Text style={styles.optionText}>Apagar Dados</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#3498db" }}
          thumbColor={clearData ? "#f4f3f4" : "#f0f0f0"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleClearDataToggle}
          value={clearData}
        />
      </View>

      <View style={styles.configOption}>
        <Text style={styles.optionText}>Receber Notificações</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#3498db" }}
          thumbColor={receiveNotifications ? "#f4f3f4" : "#f0f0f0"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleNotifications}
          value={receiveNotifications}
        />
      </View>

      <TouchableOpacity style={styles.configOption} onPress={handleClearCache}>
        <Text style={styles.optionText}>Limpar Cache</Text>
        <Ionicons name="ios-trash-bin" size={24} color="#3498db" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.configOption} onPress={handleTermsOfService}>
        <Text style={styles.optionText}>Termos de Serviço</Text>
        <MaterialIcons name="description" size={24} color="#3498db" />
      </TouchableOpacity>

      {/* Adicione outras opções de configurações conforme necessário */}
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
  configOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  languagePicker: {
    height: 30,
    width: 150,
    marginLeft: 10,
  },
});

export default ConfigurationsScreen;

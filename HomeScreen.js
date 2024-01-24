// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [wallpapers, setWallpapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Exemplo de dados de wallpaper (substitua isso pelos seus dados reais)
  const dummyWallpapers = [
    { id: '1', imageUri: 'https://img.freepik.com/fotos-premium/arvore-sentada-no-topo-de-uma-montanha-ao-lado-de-um-corpo-de-agua-generativa-ai_900370-195.jpg' },
    { id: '2', imageUri: 'https://img.freepik.com/fotos-gratis/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia_188544-15662.jpg' },
    { id: '3', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNj8LNczSOM7P3rNmVmWFEqIkjv2Wnki-RqCNi3v_VIkcY2kRMIfZ8IpBVm-Yugzyun8c&usqp=CAU' },
    { id: '4', imageUri: 'https://www.pixground.com/wp-content/uploads/2023/10/Anime-Sunset-Sky-AI-Generated-4K-Wallpaper.jpg' },
    { id: '5', imageUri: 'https://i2.wp.com/wallpapercave.com/wp/wp6343813.jpg' },
    { id: '6', imageUri: 'https://img.freepik.com/premium-photo/abstract-bright-landscape-exotic-scene-digital-generated-tourism-travel-theme-illustration_840789-2233.jpg'},
    { id: '7', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dXA2tjUjH8IlCv6JOjcUXE9ZzP3xhazA5vp5sNP2uTZT5u3_XOfhmJ7a3lHpqo7_EMU&usqp=CAU'},
    { id: '8', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_z61u6nznLIa1fnRBYVug_2vlx-buZrXrc0SS7o97cFFkhwTBh6h7D2SaU_WWenjseE&usqp=CAU'},
    { id: '9', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZZ4zf7t1YlleIBfx-ONfq2gQG-XmDV1NbZ2mErzmI2PtnN5xh5-jdJMPg8fp_IGkQcg&usqp=CAU'},
    { id: '10', imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMRZsTqnUyqfb2h-8LI0zqYoZ4OmwNwv9OxfSQ4gwDmITAvLGcXcizTsFTW9XxcKVfSs&usqp=CAU'},

  ];

  useEffect(() => {
    // Carregar wallpapers (pode ser uma chamada de API)
    setWallpapers(dummyWallpapers);
  }, []);

  const handleWallpaperPress = (wallpaper) => {
    // Navegar para a tela de visualização em tela cheia ou detalhes do wallpaper
    alert(`Abrir tela de detalhes para o wallpaper ${wallpaper.id}`);
    // navigation.navigate('WallpaperDetails', { wallpaper });
  };

  const handleSearch = () => {
    // Lógica de pesquisa aqui
    alert(`Pesquisar por: ${searchQuery}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Wallpapers</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar"
            placeholderTextColor="#ccc"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.wallpaperItem}
            onPress={() => handleWallpaperPress(item)}
          >
            <Image source={{ uri: item.imageUri }} style={styles.wallpaperImage} />
            <View style={styles.overlay}>
              <Text style={styles.overlayText}>Detalhes</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Add')}>
          <AntDesign name="pluscircleo" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => navigation.navigate('Profile')}>
          <AntDesign name="user" size={24} color="#fff" />
          <Text style={styles.bottomBarText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  searchButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallpaperItem: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
    position: 'relative',
  },
  wallpaperImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#3498db',
    borderTopWidth: 1,
    borderTopColor: '#2980b9',
  },
  bottomBarButton: {
    alignItems: 'center',
  },
  bottomBarText: {
    color: '#fff',
  },
});

export default HomeScreen;

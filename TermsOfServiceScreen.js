// TermsOfServiceScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const TermsOfServiceScreen = () => {
  const termsText = `
Termos de Serviço

Estes Termos de Serviço ("Termos") regem o uso do nosso aplicativo móvel ("Serviço") fornecido por [Seu Nome ou Nome da Empresa] ("nós", "nosso" ou "nos").

Ao acessar ou usar o Serviço, você concorda com estes Termos. Se você discordar de qualquer parte dos termos, não use nosso Serviço.

Conteúdo

Nosso Serviço permite que você visualize, vincule e compartilhe conteúdo. Você concorda em não modificar, copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos derivados, transferir ou vender qualquer informação ou serviços obtidos por meio do nosso Serviço.

Privacidade

Sua privacidade é importante para nós. Leia nossa Política de Privacidade [inserir link para a política de privacidade] para entender como tratamos suas informações.

Contas de Usuário

Ao criar uma conta conosco, você deve fornecer informações precisas e completas. Você é responsável por manter a confidencialidade de sua conta e senha.

Modificações

Reservamo-nos o direito de modificar ou substituir estes Termos a qualquer momento. Ao continuar a acessar ou usar nosso Serviço após essas modificações, você concorda com os Termos revisados. Se você não concordar com os novos termos, pare de usar o Serviço.

Rescisão

Podemos encerrar ou suspender seu acesso imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos.

Links para Outros Sites

Nosso Serviço pode conter links para sites de terceiros que não são de propriedade ou controlados por nós. Não temos controle e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites de terceiros.

Lei Aplicável

Estes Termos serão regidos e interpretados de acordo com as leis do [Inserir jurisdição], sem levar em consideração suas disposições de conflito de leis.

Ao acessar ou usar o Serviço, você concorda com estes Termos. Se você não concordar com qualquer parte destes Termos, você não tem permissão para acessar o Serviço.

Estes Termos constituem o acordo completo entre nós em relação ao nosso Serviço, substituindo e substituindo quaisquer acordos anteriores que possamos ter entre nós sobre o Serviço.

Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco
  `;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Termos de Serviço</Text>
      <View style={styles.termsContainer}>
        <Text>{termsText}</Text>
      </View>
    </ScrollView>
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
  termsContainer: {
    marginBottom: 20,
  },
});

export default TermsOfServiceScreen;

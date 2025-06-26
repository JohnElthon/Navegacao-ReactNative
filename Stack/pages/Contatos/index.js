import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';// Hooks para navegação
//  e acesso à rota

export default function Sobre() {

    const navigation = useNavigation();// Permite controlar a navegação
    const route = useRoute();
    // Permite acessar os dados da rota atual (como os parâmetros)


    // Define dinamicamente o título da tela:
    // Se 'nome' estiver vazio, mostra "Página de contato sem login";
    // Senão, usa o nome recebido por parâmetro
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Página de contato sem login' : route.params?.nome
        })

    }, [])


    function handleHome() {
        navigation.dispatch(StackActions.popToTop())
        //Função que limpa a pilha de navegação e retorna para a tela inicial (Home)
    }
    return (
        <View style={styles.container}>
            <Text>Página Contatos</Text>
            <Text>{route.params?.nome}</Text>
            {/* Exibe o nome recebido por parâmetro, se existir.
      Usamos 'route.params?.nome' com o operador '?.' (encadeamento opcional)
     para evitar erro caso 'params' seja undefined. Isso garante que o app
     não quebre se nenhum parâmetro for passado. */}
            <Text>{route.params?.email}</Text>
            <Button title='Ir para Home' onPress={handleHome}></Button>
            <Button title='Voltar' onPress={() => navigation.goBack()}></Button>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

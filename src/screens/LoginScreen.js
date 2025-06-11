import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/imgs/Captura de tela 2025-06-10 224332.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.card}>
                <Text style={styles.title}>Bem-Vindo de Volta!</Text>
                <Text style={styles.subtitle}>
                    Entre na sua conta para acessar suas receitas favoritas
                </Text>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={20} color="#E4899D" style={styles.icon} />
                    <TextInput
                        placeholder="Insira seu Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholderTextColor="#E4899D"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock" size={20} color="#E4899D" style={styles.icon} />
                    <TextInput
                        placeholder="Insira sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        style={styles.input}
                        placeholderTextColor="#E4899D"
                        secureTextEntry
                    />
                </View>

                <View style={styles.options}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            status={lembrar ? 'checked' : 'unchecked'}
                            onPress={() => setLembrar(!lembrar)}
                            color="#E4899D"
                        />
                        <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.link}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.button, { marginBottom: 10 }]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton} onPress={() => navigation.navigate('Home')}>
                    <AntDesign name="google" size={20} color="#fff" />
                    <Text style={styles.googleButtonText}>Continuar com Google</Text>
                </TouchableOpacity>
                <Text style={styles.cadastro}>
                    Não tem uma conta?{' '}
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        Cadastre-se aqui
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFEDED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 80,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: '85%',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    title: {
        fontSize: 22,
        color: '#E4899D',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#D94F6D',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E4899D',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: '100%',
        height: 50,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        color: '#000',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        marginLeft: 5,
        color: '#a3a3a3',
    },
    link: {
        color: '#E4899D',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#E4899D',
        paddingVertical: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    cadastro: {
        marginTop: 15,
        color: '#a3a3a3',
    },
    googleButton: {
        backgroundColor: '#E4899D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 10,
        width: '100%',
    },
    googleButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
    },
});

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
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
import { firebase } from '../../firebaseConfig';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState(false);
    const navigation = useNavigation();

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: '484689572987-6q938fj981d3rl3g1sflqi9oot57h60a.apps.googleusercontent.com',
    });

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
            firebase.auth().signInWithCredential(credential)
                .then(async (result) => {
                    const user = result.user;
                    const ref = firebase.firestore().collection('usuarios').doc(user.uid);
                    const snap = await ref.get();
                    if (!snap.exists) {
                        await ref.set({
                            nome: user.displayName,
                            email: user.email,
                            foto: user.photoURL,
                            criadoEm: new Date(),
                        });
                    }
                })
                .catch(error => alert('Erro login Google: ' + error.message));
        }
    }, [response]);

    const handleLogin = async () => {
        try {
            const cred = await firebase.auth().signInWithEmailAndPassword(email, senha);
            const ref = firebase.firestore().collection('usuarios').doc(cred.user.uid);
            const snap = await ref.get();
            if (!snap.exists) {
                await ref.set({
                    email: cred.user.email,
                    criadoEm: new Date(),
                });
            }
        } catch (error) {
            alert('Erro: ' + error.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo/texto superior */}
            <Text style={styles.logo}>Na{'\n'}Panela</Text>

            <View style={styles.card}>
                <Text style={styles.title}>Bem-Vindo de Volta!</Text>
                <Text style={styles.subtitle}>Entre na sua conta para acessar suas receitas favoritas</Text>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="email" size={20} color="#e17897" style={styles.icon} />
                    <TextInput
                        placeholder="Insira seu Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholderTextColor="#e17897"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons name="lock" size={20} color="#e17897" style={styles.icon} />
                    <TextInput
                        placeholder="Insira sua senha"
                        value={senha}
                        onChangeText={setSenha}
                        style={styles.input}
                        placeholderTextColor="#e17897"
                        secureTextEntry
                    />
                </View>

                <View style={styles.options}>
                    <View style={styles.checkboxContainer}>
                        <Checkbox
                            status={lembrar ? 'checked' : 'unchecked'}
                            onPress={() => setLembrar(!lembrar)}
                            color="#e17897"
                        />
                        <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.link}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.separator}>
                    <View style={styles.line} />
                    <Text style={styles.ou}>ou</Text>
                    <View style={styles.line} />
                </View>

                <TouchableOpacity
                    style={styles.googleButton}
                    disabled={!request}
                    onPress={() => promptAsync()}
                >
                    <AntDesign name="google" size={20} color="#fff" />
                    <Text style={styles.googleButtonText}>Continuar com Google</Text>
                </TouchableOpacity>

                <Text style={styles.cadastro}>
                    Não tem uma conta?{' '}
                    <Text
                        style={styles.link}
                        onPress={() => navigation.navigate('Cadastro')} // nome da sua tela de registro
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
        backgroundColor: '#ffe6ec',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 34,
        color: '#e17897',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: 'cursive',
        lineHeight: 38,
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
        color: '#e17897',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: '#a3a3a3',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#e17897',
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
        color: '#e17897',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#e17897',
        paddingVertical: 12,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    ou: {
        marginHorizontal: 10,
        color: '#a3a3a3',
    },
    googleButton: {
        backgroundColor: '#e17897',
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
    cadastro: {
        marginTop: 15,
        color: '#a3a3a3',
    },
});

import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { criarAluno } from "../services/api";

export default function CadastrarAlunoScreen({ navigation }) {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [nota, setNota] = useState("");

    async function salvar() {
        if (!nome) return Alert.alert("Erro", "O nome é obrigatório.");

        await criarAluno({
            nome,
            idade: Number(idade),
            nota: Number(nota),
        });

        Alert.alert("Sucesso", "Aluno cadastrado!");
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar Aluno</Text>

            <Text>Nome</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <Text>Idade</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={idade}
                onChangeText={setIdade}
            />

            <Text>Nota</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={nota}
                onChangeText={setNota}
            />

            <Button title="Salvar" onPress={salvar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: "#AAA",
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
    },
});

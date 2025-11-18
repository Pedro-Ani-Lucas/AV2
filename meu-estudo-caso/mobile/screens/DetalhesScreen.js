import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { atualizarAluno } from "../services/api";

export default function DetalhesScreen({ route, navigation }) {
    const aluno = route.params.aluno;

    const [nome, setNome] = useState(aluno.nome);
    const [idade, setIdade] = useState(aluno.idade?.toString() || "");
    const [nota, setNota] = useState(aluno.nota?.toString() || "");

    async function salvar() {
        await atualizarAluno(aluno.id, {
            nome,
            idade: Number(idade),
            nota: Number(nota),
        });

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Editar Aluno</Text>

            <Text>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />

            <Text>Idade:</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={idade}
                onChangeText={setIdade}
            />

            <Text>Nota:</Text>
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

import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { listarAlunos } from "../services/api";

export default function AlunosScreen({ navigation }) {
    const [alunos, setAlunos] = useState([]);

    async function carregar() {
        try {
            const data = await listarAlunos();
            setAlunos(data);
        } catch (err) {
            console.log("Erro ao carregar alunos:", err);
        }
    }

    useEffect(() => {
        const unsub = navigation.addListener("focus", carregar);
        return unsub;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Alunos</Text>
            <View style={{ marginBottom: 10 }}>
                <Button
                    title="Adicionar Aluno"
                    onPress={() => navigation.navigate("Cadastrar")}
                />
            </View>
            <FlatList
                data={alunos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Detalhes", { aluno: item })}
                    >
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text>ID: {item.id}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    titulo: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
    card: {
        padding: 15,
        backgroundColor: "#EEE",
        borderRadius: 10,
        marginBottom: 10,
    },
    nome: { fontSize: 18, fontWeight: "bold" },
});

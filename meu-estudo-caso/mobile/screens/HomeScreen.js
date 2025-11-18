import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Menu Principal</Text>

            <Button title="Alunos" onPress={() => navigation.navigate("Alunos")} />
        </View>
    );
}

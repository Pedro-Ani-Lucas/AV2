import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AlunosScreen from "./screens/AlunosScreen";
import DetalhesScreen from "./screens/DetalhesScreen";
import CadastrarAlunoScreen from "./screens/CadastrarAlunoScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Alunos" component={AlunosScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
                <Stack.Screen name="Cadastrar" component={CadastrarAlunoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

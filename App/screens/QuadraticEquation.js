import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonStyle from "../styles/ButtonStyle";
import FormStyle from "../styles/FormStyle";
import Separator from "../Components/Separator";
import { ScrollView } from "react-native-gesture-handler/lib/commonjs";

const QuadraticEquation = ({ navigation }) => {
    const [a, onChangeA] = useState();
    const [b, onChangeB] = useState();
    const [c, onChangeC] = useState();
    const [x, setX] = useState();

    const calculateEquation = e => {
        let discriminating = Math.pow(b, 2) - (4 * a * c);
        if (discriminating > 0) {
            // Two solution
            let x1 = (-b + Math.pow((Math.pow(b, 2) - (4 * a * c)), 1 / 2)) / (2 * a);
            let x2 = (-b - Math.pow((Math.pow(b, 2) - (4 * a * c)), 1 / 2)) / (2 * a);

            setX(`x1 = ${x1.toFixed(2)}; x2 = ${x2.toFixed(2)}`);
        } else if (discriminating == 0) {
            // One solution
            let x1 = (-b) / (2 * a);
            setX(`x = ${x1.toFixed(2)}`);
        } else {
            // No solution
            let x1 = (-b) / (2 * a);
            setX(`No existe solución`);
        }
    };

    return (
        <ScrollView>
            <View style={FormStyle.container}>
                <Text></Text>
                <View>
                    <Text style={FormStyle.textInput}>a</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeA}
                        value={a}
                        keyboardType="decimal-pad"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>b</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeB}
                        value={b}
                        keyboardType="decimal-pad"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>c</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeC}
                        value={c}
                        keyboardType="decimal-pad"
                    ></TextInput>
                </View>
                <Separator />
                <TouchableOpacity
                    style={ButtonStyle.appButtonContainer}
                    onPress={() => calculateEquation()}
                >
                    <Text style={ButtonStyle.appButtonText}>Calcular</Text>
                </TouchableOpacity>

                <View style={FormStyle.responseView}>
                    <Text style={FormStyle.responseText}>{x}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default QuadraticEquation;
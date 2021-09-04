import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonStyle from "../styles/ButtonStyle";
import FormStyle from "../styles/FormStyle";
import Separator from "../Components/Separator";
import { ScrollView } from "react-native-gesture-handler";

const Salary = () => {
    const [name, onChangeName] = useState();
    const [base, onChangeBase] = useState();
    const [x, setX] = useState();

    const calculateSalary = e => {
        let n = `${name}`

        if ((n.trim() === "") || isNaN(base) || base === undefined || base == 0 || base < 0) {
            Alert.alert('Ingrese valores válidos');
        } else {
            let isss = base * 0.03
            let afp = base * 0.04
            let rent = base * 0.05
            let salary = (base - (isss + afp + rent)).toFixed(2)

            setX(`${name} su salario neto es: $${salary}`);
        }
    };

    return (
        <ScrollView>
            <View style={FormStyle.container}>
                <Text></Text>
                <View>
                    <Text style={FormStyle.textInput}>Nombre</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeName}
                        value={name}
                        keyboardType="default"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Salario base</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeBase}
                        value={base}
                        keyboardType="numeric"
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.discountTitle}>Decuentos</Text>
                    <Text style={styles.discountValue}>ISSS = 3%, AFP = 4%, RENTA = 5%</Text>
                </View>
                <Separator />
                <TouchableOpacity
                    style={ButtonStyle.appButtonContainer}
                    onPress={() => calculateSalary()}
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

const styles = StyleSheet.create({
    discountTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#737373'
    },
    discountValue: {
        fontSize: 12,
        color: '#737373'
    }
});

export default Salary;
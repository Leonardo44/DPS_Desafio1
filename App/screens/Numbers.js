import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonStyle from "../styles/ButtonStyle";
import FormStyle from "../styles/FormStyle";
import Separator from "../Components/Separator";
import { ScrollView } from "react-native-gesture-handler/lib/commonjs";

const Numbers = () => {
    const [nOne, onChangeNOne] = useState();
    const [nTwo, onChangeNTwo] = useState();
    const [nThree, onChangeNThree] = useState();
    const [nFour, onChangeNFour] = useState();
    const [order, setOrder] = useState();
    const [nHigher, setNHiger] = useState();
    const [nSmaller, setNSmaller] = useState();

    const calculate = e => {
        if (isNaN(nOne) || nOne === undefined || nOne == 0 || nOne === 0 || nOne < 0 ||
            isNaN(nTwo) || nTwo === undefined || nTwo == 0 || nTwo === 0 || nTwo < 0 ||
            isNaN(nThree) || nThree === undefined || nThree == 0 || nThree === 0 || nThree < 0 ||
            isNaN(nFour) || nFour === undefined || nFour == 0 || nFour === 0 || nFour < 0) {
            Alert.alert('Ingrese valores válidos');
        } else {
            let numbers = [nOne, nTwo, nThree, nFour].sort(function (a, b) { return a - b });
            let smaller = parseFloat(numbers[0]);
            let higher = parseFloat(numbers[3]);

            setOrder(`Orden: ${numbers}`);
            setNHiger(`Número mayor${(smaller > 10) ? ` + 10` : ``}: ${(higher + 10).toFixed(2)}`);
            setNSmaller(`Número menor${(higher < 50) ? ` - 5` : ``}: ${(smaller - 5).toFixed(2)}`);
        }
    };

    return (
        <ScrollView>
            <View style={FormStyle.container}>
                <Text></Text>
                <View>
                    <Text style={FormStyle.textInput}>Número 1</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeNOne}
                        value={nOne}
                        keyboardType="numeric"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Número 2</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeNTwo}
                        value={nTwo}
                        keyboardType="numeric"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Número 3</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeNThree}
                        value={nThree}
                        keyboardType="numeric"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormStyle.textInput}>Número 4</Text>
                    <TextInput
                        style={FormStyle.input}
                        onChangeText={onChangeNFour}
                        value={nFour}
                        keyboardType="numeric"
                    ></TextInput>
                </View>
                <View>
                    <Text style={styles.discountTitle}>No se aceptan números negativos ni cero</Text>
                </View>
                <Separator />
                <TouchableOpacity
                    style={ButtonStyle.appButtonContainer}
                    onPress={() => calculate()}
                >
                    <Text style={ButtonStyle.appButtonText}>Calcular</Text>
                </TouchableOpacity>

                <View style={FormStyle.responseView}>
                    <Text style={FormStyle.responseText}>{order}</Text>
                    <Text style={FormStyle.responseText}>{nHigher}</Text>
                    <Text style={FormStyle.responseText}>{nSmaller}</Text>
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
    }
});

export default Numbers;
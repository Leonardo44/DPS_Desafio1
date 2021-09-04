import React from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Separator from "../Components/Separator";
import ButtonStyle from "../styles/ButtonStyle";

const Menu = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Ejercicio #1</Text>
                    <Text style={styles.decription}>Calculadora de ecuación cuadrática</Text>
                    <TouchableOpacity
                        style={ButtonStyle.appButtonContainer}
                        onPress={() => navigation.navigate('Equation')}
                    >
                        <Text style={ButtonStyle.appButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Ejercicio #2</Text>
                    <Text style={styles.decription}>Calculadora de salario neto</Text>
                    <TouchableOpacity
                        style={ButtonStyle.appButtonContainer}
                        onPress={() => navigation.navigate('Salary')}
                    >
                        <Text style={ButtonStyle.appButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Ejercicio #3</Text>
                    <Text style={styles.decription}>Calculadora de numero mayor y menor</Text>
                    <TouchableOpacity
                        style={ButtonStyle.appButtonContainer}
                        onPress={() => navigation.navigate('Numbers')}
                    >
                        <Text style={ButtonStyle.appButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        fontWeight: "bold"
    },
    decription: {
        textAlign: "center",
        fontSize: 16
    }
});

export default Menu;
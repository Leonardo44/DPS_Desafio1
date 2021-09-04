import React from "react";
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler/lib/commonjs";

const Separator = () => (
    <View style={styles.separator} />
);

const Menu = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Ejercicio #1</Text>
                    <Text style={styles.decription}>Calculadora de ecuación cuadrática</Text>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={() => navigation.navigate('Equation')}
                    >
                        <Text style={styles.appButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Ejercicio #2</Text>
                    <Text style={styles.decription}>Calculadora de salario neto</Text>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={() => navigation.navigate('Salary')}
                    >
                        <Text style={styles.appButtonText}>Abrir</Text>
                    </TouchableOpacity>
                </View>
                <Separator />
                <View>
                    <Text style={styles.title}>Ejercicio #3</Text>
                    <Text style={styles.decription}>Calculadora de numero mayor y menor</Text>
                    <TouchableOpacity
                        style={styles.appButtonContainer}
                        onPress={() => navigation.navigate('Numbers')}
                    >
                        <Text style={styles.appButtonText}>Abrir</Text>
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
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    appButtonContainer: {
        marginTop: 8,
        elevation: 8,
        backgroundColor: "#145DA0",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
        height: 44,
        flex: 1,
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});


export default Menu;
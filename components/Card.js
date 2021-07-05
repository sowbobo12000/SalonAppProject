import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                { props.children}
                {/* <Card>
                    <Text>Hello</Text> << .children
                </Card> */}

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height:100,
        borderRadius: 6,
        elevation: 3,
        backgroundColor:'#E6E6E2',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginHorizontal: 20,
        marginVertical: 4

    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical:10

    }
});
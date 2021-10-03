import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDeleteGoal.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text> {props.title} </Text>
            </View>
        </TouchableOpacity>

    );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: "black",
        borderWidth: 1,
        width: '80%',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#abc'
    }
});
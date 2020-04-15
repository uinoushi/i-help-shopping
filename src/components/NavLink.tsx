import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { withNavigation } from '@react-navigation/compat';

const NavLink = ({ navigation, text, linkText, routeName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{text} </Text>
            <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
                <Text style={styles.link}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 40,
        right: 0,
        left: 0
    },
    textStyle: {
        fontSize: 16
    },
    link: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '600'
    }
});

export default withNavigation(NavLink);
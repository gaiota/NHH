import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './LoginStyles';
import { Images } from '../../Themes'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image source={Images.icon_galota} style={styles.logo} />
                <View style={styles.containerAction}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.textButton}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
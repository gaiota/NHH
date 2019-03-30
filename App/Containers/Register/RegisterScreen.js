import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './RegisterStyles';
import { Images } from '../../Themes';
import Utils from '../../Utils/Utils';
import StringUtils from '../../Utils/StringUtils';
import { connect } from 'react-redux';
import UserActions from '../../Redux/UserRedux'

class RegisterScreen extends Component {

    constructor() {
        super()
        this.state = {
            fullname: "",
            email: "",
            password: "",
            passwordConfirm: "",
            isRegiter:""
        }
    }

    render() {
        var { fullname, email, password ,passwordConfirm} = this.state
        return (
            <View style={styles.container}>

                <Image source={Images.icon_galota} style={styles.logo} />
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder={"Fullname"}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({
                                fullname: text
                            })
                        }}
                        value={fullname}
                    />
                    <TextInput
                        placeholder={"Email"}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }}
                        value={email}
                    />
                    <TextInput
                        placeholder={"Password"}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                        value={password}
                    />
                    <TextInput
                        placeholder={"Confirm password"}
                        style={styles.input}
                        onChangeText={(text) => {
                            this.setState({
                                passwordConfirm: text
                            })
                        }}
                        value={passwordConfirm}
                    />
                </View>
                <View style={styles.containerAction} onPress={() => this.props.onRegiter()}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.textButton}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onRegiter = () => {
        const { fullname, email, password, passwordConfirm } = this.state;
        if (Utils.isUndefined(fullname) || Utils.isUndefined(email) || Utils.isUndefined(password) || Utils.isUndefined(passwordConfirm)) {
            Utils.showMessage("Please enter full information")
        } else if (!StringUtils.validatePassword(password)) {
            Utils.showMessage("Password length must be longer than 6 characters")
        } else if (!StringUtils.validatePassword(passwordConfirm)) {
            Utils.showMessage("Password length must be longer than 6 characters")
        } else if (password !== password) {
            Utils.showMessage("Password is not same")
        } else {
            this.state.onRequestApi = true

            var params = {
                fullname: fullname,
                email: email,
                password: password
            }
            this.state.isRegiter = true

            this.props.register(params)
        }
    }

    componentWillReceiveProps(newProps){
        if(!Utils.isUndefined(newProps.user)&&this.state.isRegiter){
            Utils.showMessage("Register success");
            this.props.navigation.navigate("LoginScreen")
        }
    }
}

const mapStateToProps = (state) => {
    const { user } = state.user
    return {
        user
    }
}

const mapDispatchToProps =(dispatch)=>({
    register:(params)=>dispatch(UserActions.register(params))
})

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen)
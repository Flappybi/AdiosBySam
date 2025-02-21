import React from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { CustomButton } from '../components/Button';
import { CustomHeader } from '../components/Header';
import Colors from '../constants/Colors';
import { LargeText, MediumText, SmallText } from '../components/Text';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    const navigation = useNavigation();

    const validateRegisterForm = yup.object().shape({
        name: yup.string()
            .required('Name is required'),
        email: yup.string()
            .email('Please enter valid email!')
            .required('Email is required'),
        phone: yup.string()
            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number!')
            .required('Phone is required'),
        password: yup.string()
            .required('Password is required'),
        passwordConfirmation: yup.string()
            .oneOf([yup.ref('password')], "Password didn't match!")
            .required('Password confirmation is required'),
    });

    return (
        <View style={styles.mainContainer}>
            <CustomHeader
                textToShow='Create Account'
                isStackScreen
                headerCustomStyle={{ backgroundColor: Colors.WHITE }}
            />
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    passwordConfirmation: '',
                }}
                validationSchema={validateRegisterForm}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched,
                }) => (
                    <ScrollView style={styles.contentContainer}>
                        <LargeText textToShow='Register now at Adios' />
                        <SmallText textToShow='Please fill out the form below!' />

                        <SmallText textToShow='Name' />
                        <View style={styles.input}>
                            <Icon
                                name='account'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                placeholder='Name'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.name && touched.name ?
                                <SmallText
                                    textToShow={errors.name}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }

                        <SmallText textToShow='Email' />
                        <View style={styles.input}>
                            <Icon
                                name='email'
                                type='material-community'
                                color={Colors.GRAY}
                            />
                            <TextInput
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                placeholder='Email'
                                style={styles.innerInput}
                            />
                        </View>
                        {
                            errors.email && touched.email ?
                                <SmallText
                                    textToShow={errors.email}
                                    textCustomStyle={styles.errorMessage}
                                />
                                :
                                null
                        }
                        

                        {/* code for input phone & error message */}

                        {/* code for input password & error message */}

                        {/* code for input passwordConfirmation & error message */}

                        <View style={styles.bottomContentContainer}>
                            <CustomButton
                                textToShow='Register'
                                buttonCustomStyle={styles.registerButton}
                            />
                            <MediumText textToShow='Or' />
                            <View style={styles.questionContainer}>
                                <MediumText textToShow='Already have an account? ' />
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <MediumText
                                        textToShow='Login'
                                        textCustomStyle={styles.loginText}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        padding: 8,
        paddingHorizontal: 16,
    },
    input: {
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginTop: 0,
        fontSize: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    innerInput: {
        flex: 1,
    },
    errorMessage: {
        color: 'red',
        marginTop: 0,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    registerButton: {
        marginTop: 16,
    },
    bottomContentContainer: {
        alignItems: 'center',
    },
    questionContainer: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    loginText: {
        color: Colors.PRIMARY,
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;      
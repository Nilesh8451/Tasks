import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as yup from 'yup';
import {login} from '../redux/action/loginAction';

import {connect} from 'react-redux';
import axios from 'axios';

const loginSchema = yup.object({
  email: yup.string().required().min(4).email(),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric Characters'),
});

/**
 * @author Nilesh Ganpat Chavan
 * @description This shows logged in screen.Which containes email and password field.
 * @param {navigation object} navigation Which is userful to traverse throung different routes available with
 * this object
 * @returns jsx which contains input to perform log in.
 */

function Login({isLoading, error, navigation}) {
  const [securePassword, setSecurePassword] = useState(true);
  const [eyeStyle, setEyeStyle] = useState('eye-slash');

  useEffect(() => {
    if (error) {
      Alert.alert('OOPS!', 'Wrong Username or Password');
    }
  }, [error]);

  handleEyeClick = () => {
    setSecurePassword(!securePassword);
    if (eyeStyle === 'eye-slash') {
      setEyeStyle('eye');
    } else {
      setEyeStyle('eye-slash');
    }
  };

  return isLoading === false ? (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values, action) => {
            // console.log('Call The Login APi');
            axios
              .post('http://180.149.241.208:3001/login', {
                user_email: values.email,
                user_pass: values.password,
              })
              .then((res) => {
                // console.log('Success');
                Alert.alert('hooray!', res.user_name);
                action.resetForm();
              })
              .catch((e) => {
                // console.log('Login Error', e);
              });
          }}>
          {(formikProps) => (
            <View style={styles.mainDiv}>
              <Text style={styles.companyName}>
                Neo<Text style={styles.redText}>SCRUM</Text>
              </Text>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardHeading}>User-Login</Text>
                  <Text style={styles.inputHeading}>Email:</Text>
                  <TextInput
                    style={styles.input}
                    value={formikProps.values.email}
                    onChangeText={formikProps.handleChange('email')}
                    onBlur={formikProps.handleBlur('email')}
                  />
                  <Text style={styles.errorText}>
                    {formikProps.touched.email && formikProps.errors.email}
                  </Text>

                  <Text style={styles.inputHeading}>Password:</Text>
                  <View style={{justifyContent: 'center'}}>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={securePassword}
                      value={formikProps.values.password}
                      onChangeText={formikProps.handleChange('password')}
                      onBlur={formikProps.handleBlur('password')}
                    />
                    <FontAwesome5
                      name={eyeStyle}
                      color={'black'}
                      solid
                      size={20}
                      style={{
                        position: 'absolute',
                        right: 10,
                        paddingTop: 10,
                        opacity: 0.6,
                      }}
                      onPress={() => handleEyeClick()}
                    />
                  </View>
                  <Text style={styles.errorText}>
                    {formikProps.touched.password &&
                      formikProps.errors.password}
                  </Text>

                  <View style={styles.buttonDiv}>
                    <View style={styles.button}>
                      <Button
                        title="Login"
                        onPress={formikProps.handleSubmit}
                      />
                    </View>
                    <View style={[styles.button, styles.oppositeBut]}>
                      <Button
                        title="Registration"
                        color="black"
                        onPress={() => navigation.navigate('Registration')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  ) : (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    height: '100%',
    flexDirection: 'column',
  },
  mainDiv: {
    height: '90%',
    maxWidth: 600,
    justifyContent: 'center',
    marginTop: 4,
  },
  companyName: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
  },
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  cardContent: {
    marginHorizontal: 15,
    marginVertical: 40,
  },
  cardHeading: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'gray',
    padding: 5,
    fontSize: 15,
    paddingLeft: 10,
  },
  inputImage: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
  inputImageBox: {
    backgroundColor: 'gray',
    padding: 7,
    marginRight: 10,
  },
  inputHeading: {
    marginTop: 10,
    fontSize: 17,
  },
  buttonDiv: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    marginRight: 20,
  },
  oppositeBut: {},
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 2,
    textTransform: 'capitalize',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    isLoading: state.userReducer.isLoading,
    error: state.userReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

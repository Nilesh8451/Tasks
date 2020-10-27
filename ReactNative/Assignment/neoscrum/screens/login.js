import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as yup from 'yup';
import {login} from '../redux/action/loginAction';
import {globalStyle} from '../shared/globalStyle/style';
import {connect} from 'react-redux';
import CustomButton from '../shared/customButton';

const loginSchema = yup.object({
  email: yup.string().required().min(4).email(),
  password: yup.string().required().min(6).max(12),
  // .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric Characters'),
});

/**
 * @author Nilesh Ganpat Chavan
 * @description This shows logged in screen.Which containes email and password field.
 * @param {navigation,user,isLoading,error,login}: navigation Which is userful to traverse throung different routes available with
 * this object.user contain logged in user information, isLoading is a redux state will be boolean true indicate
 * calling of api is going and false indicate no api calling is running, error is a object if we will get any error
 * while api call, login is function we can call to perform login in to the application
 * @returns jsx which contains input to perform log in.
 */

function Login({user, isLoading, error, login, navigation}) {
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
      <ScrollView style={{flex: 1, marginTop: 30}}>
        <View style={styles.container}>
          <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={loginSchema}
            onSubmit={(values, action) => {
              login(values);
            }}>
            {(formikProps) => (
              <View style={globalStyle.mainDiv}>
                <Text style={globalStyle.companyName}>
                  Neo<Text style={globalStyle.redText}>SCRUM</Text>
                </Text>
                <View style={globalStyle.card}>
                  <View style={globalStyle.cardContent}>
                    <Text style={globalStyle.cardHeading}>User Login</Text>
                    <Text style={globalStyle.inputHeading}>Email:</Text>
                    <TextInput
                      style={styles.input}
                      value={formikProps.values.email}
                      onChangeText={formikProps.handleChange('email')}
                      onBlur={formikProps.handleBlur('email')}
                    />

                    {formikProps.touched.email && formikProps.errors.email && (
                      <Text style={globalStyle.errorText}>
                        {formikProps.touched.email && formikProps.errors.email}
                      </Text>
                    )}

                    <Text style={globalStyle.inputHeading}>Password:</Text>
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

                    {formikProps.touched.password &&
                      formikProps.errors.password && (
                        <Text style={globalStyle.errorText}>
                          {formikProps.touched.password &&
                            formikProps.errors.password}
                        </Text>
                      )}

                    <View style={globalStyle.buttonDiv}>
                      <View style={globalStyle.button}>
                        <CustomButton
                          color="red"
                          disabled={false}
                          title="LOGIN"
                          onPress={formikProps.handleSubmit}
                        />
                      </View>
                      <View style={[globalStyle.button]}>
                        <CustomButton
                          color="#2B7DE9"
                          disabled={false}
                          title="REGISTER"
                          onPress={() => navigation.navigate('Registration')}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        marginTop: 30,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('ForgotPassword');
                        }}>
                        <Text style={{fontSize: 18}}>Forgot Password?</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
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

  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'gray',
    padding: 5,
    fontSize: 16,
    paddingVertical: 7,
    paddingLeft: 10,
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

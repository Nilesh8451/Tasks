import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup.string().required().min(4).email(),
  password: yup
    .string()
    .required()
    .min(6)
    .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric Characters'),
});

function Login({navigation}) {
  const [securePassword, setSecurePassword] = useState(true);
  const [eyeColor, setEyeColor] = useState('black');

  handleEyeClick = () => {
    setSecurePassword(!securePassword);
    if (eyeColor === 'black') {
      setEyeColor('blue');
    } else {
      setEyeColor('black');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values, action) => {
            console.log('Call The Login APi');
            action.resetForm();
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
                      name={'eye-slash'}
                      color={eyeColor}
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
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    height: '100%',
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
  },
  mainDiv: {
    height: '90%',
    justifyContent: 'center',
    marginTop: 4,
    // backgroundColor: 'pink',
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
    // backgroundColor: 'red',
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
    // textAlign: 'center',
    marginTop: 5,
    marginLeft: 2,
    textTransform: 'capitalize',
  },
});

export default Login;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {globalStyle} from '../shared/globalStyle/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Formik} from 'formik';
import * as yup from 'yup';

import Toast from 'react-native-simple-toast';
import CustomButton from '../shared/customButton';

const mySchema = yup.object({
  optInput: yup
    .string()
    .required()
    .matches(/^\d{4}$/, 'Must contain only 4 digit number'),
  password: yup
    .string()
    .required()
    .min(8)
    .max(12)
    .matches(/^[a-zA-Z0-9_]*$/, 'Must Be Alphanumeric Characters'),
  confirmPassowrd: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Must be same as password'),
});

/**
 * @author Nilesh Ganpat Chavan
 * @description This screen gives feature of changing Password if user has forgot.User need to enter
 * verification code send on his/her email id which is entered in previous screen.And after that field to
 * set new Password and conform password.
 * @param {navigation} object: through which we can navigate.
 * @returns jsx which contains input field to get verification code, new password.
 */

function SetPassword({navigation}) {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureCPassword, setSecureCPassword] = useState(true);
  const [PEyeStyle, setPEyeStyle] = useState('eye-slash');
  const [CPEyeStyle, setCPEyeStyle] = useState('eye-slash');

  handlePasswordEyeClick = () => {
    setSecurePassword(!securePassword);
    if (PEyeStyle === 'eye-slash') {
      setPEyeStyle('eye');
    } else {
      setPEyeStyle('eye-slash');
    }
  };

  handleCPasswordEyeClick = () => {
    setSecureCPassword(!secureCPassword);
    if (CPEyeStyle === 'eye-slash') {
      setCPEyeStyle('eye');
    } else {
      setCPEyeStyle('eye-slash');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <View style={globalStyle.forgotSetPasswordNavHeader}>
          <FontAwesome5
            name={'arrow-left'}
            color={'black'}
            solid
            size={23}
            style={{marginLeft: 20}}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ScrollView>
          <View style={globalStyle.forgotSetPasswordContainer}>
            <Formik
              initialValues={{
                optInput: '',
                password: '',
                confirmPassowrd: '',
              }}
              validationSchema={mySchema}
              onSubmit={(values, action) => {
                console.log(values);
                Toast.show('Your Password Changed Successfully', Toast.LONG);
                navigation.popToTop();
                action.resetForm();
              }}>
              {(formikProps) => (
                <View style={globalStyle.forgotSetPasswordMainDiv}>
                  <Text style={globalStyle.companyName}>
                    Neo<Text style={globalStyle.redText}>SCRUM</Text>
                  </Text>
                  <View style={globalStyle.forgotSetPasswordCard}>
                    <View style={globalStyle.forgotSetPasswordCardContent}>
                      <View>
                        <FontAwesome5
                          name={'key'}
                          color={'black'}
                          solid
                          size={18}
                          style={{
                            position: 'relative',
                            left: 13,
                            top: 35,
                            opacity: 0.5,
                          }}
                          onPress={() => {}}
                        />
                        <TextInput
                          style={globalStyle.forgotSetPasswordInput}
                          keyboardType="number-pad"
                          placeholder="Enter OTP"
                          value={formikProps.values.optInput}
                          onChangeText={formikProps.handleChange('optInput')}
                          onBlur={formikProps.handleBlur('optInput')}
                        />

                        {formikProps.touched.optInput &&
                          formikProps.errors.optInput && (
                            <Text style={globalStyle.errorText}>
                              {formikProps.touched.optInput &&
                                formikProps.errors.optInput}
                            </Text>
                          )}
                      </View>
                      <View>
                        <View style={{justifyContent: 'center'}}>
                          <FontAwesome5
                            name={'lock'}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'relative',
                              left: 13,
                              top: 35,
                              opacity: 0.5,
                            }}
                            onPress={() => handleEyeClick()}
                          />
                          <TextInput
                            style={globalStyle.forgotSetPasswordInput}
                            placeholder="Enter New Password"
                            secureTextEntry={securePassword}
                            value={formikProps.values.password}
                            onChangeText={formikProps.handleChange('password')}
                            onBlur={formikProps.handleBlur('password')}
                          />
                          <FontAwesome5
                            name={PEyeStyle}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 18,
                              opacity: 0.6,
                            }}
                            onPress={() => handlePasswordEyeClick()}
                          />
                        </View>

                        {formikProps.touched.password &&
                          formikProps.errors.password && (
                            <Text style={globalStyle.errorText}>
                              {formikProps.touched.password &&
                                formikProps.errors.password}
                            </Text>
                          )}
                      </View>

                      <View>
                        <View style={{justifyContent: 'center'}}>
                          <FontAwesome5
                            name={'lock'}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'relative',
                              left: 13,
                              top: 35,
                              opacity: 0.5,
                            }}
                            onPress={() => handleEyeClick()}
                          />
                          <TextInput
                            style={globalStyle.forgotSetPasswordInput}
                            placeholder="Enter Password Again"
                            secureTextEntry={secureCPassword}
                            value={formikProps.values.confirmPassowrd}
                            onChangeText={formikProps.handleChange(
                              'confirmPassowrd',
                            )}
                            onBlur={formikProps.handleBlur('confirmPassowrd')}
                          />
                          <FontAwesome5
                            name={CPEyeStyle}
                            color={'black'}
                            solid
                            size={18}
                            style={{
                              position: 'absolute',
                              right: 13,
                              paddingTop: 18,
                              opacity: 0.6,
                            }}
                            onPress={() => handleCPasswordEyeClick()}
                          />
                        </View>

                        {formikProps.touched.confirmPassowrd &&
                          formikProps.errors.confirmPassowrd && (
                            <Text style={globalStyle.errorText}>
                              {formikProps.touched.confirmPassowrd &&
                                formikProps.errors.confirmPassowrd}
                            </Text>
                          )}
                      </View>

                      <View style={globalStyle.forgotSetPasswordButtonDiv}>
                        <View style={styles.button}>
                          <CustomButton
                            color="red"
                            disabled={false}
                            title="SUBMIT"
                            onPress={formikProps.handleSubmit}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {},
  oppositeBut: {},
});

export default SetPassword;

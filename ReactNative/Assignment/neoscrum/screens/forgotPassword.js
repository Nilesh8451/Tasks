import React from 'react';
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
import CustomButton from '../shared/customButton';

const mySchema = yup.object({
  email: yup.string().required().min(4).email(),
});

/**
 * @author Nilesh Ganpat Chavan
 * @description This screen gives feature of changing Password if user has forgot.User just need to enter
 * his/her email id.And then he/she will be redirected towards Set Password Screen.
 * @param {navigation} object: through which we can navigate.
 * @returns jsx which contains one input to get user email id.
 */

function ForgotPassword({navigation}) {
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
                email: '',
              }}
              validationSchema={mySchema}
              onSubmit={(values, action) => {
                console.log(values);
                navigation.navigate('SetPassword');
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
                        <Text
                          style={{
                            marginLeft: 7,
                            fontSize: 19,
                            marginBottom: -7,
                          }}>
                          Forgot Password?
                        </Text>
                        <FontAwesome5
                          name={'envelope'}
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
                          placeholder="Enter Email"
                          value={formikProps.values.email}
                          onChangeText={formikProps.handleChange('email')}
                          onBlur={formikProps.handleBlur('email')}
                        />

                        {formikProps.touched.email &&
                          formikProps.errors.email && (
                            <Text style={globalStyle.errorText}>
                              {formikProps.touched.email &&
                                formikProps.errors.email}
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

export default ForgotPassword;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from 'react-native';
import {globalStyle} from '../shared/globalStyle/style';
import ImagePicker from 'react-native-image-picker';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {baseUrl, regEndPoint} from '../shared/baseUrl';
import CustomButton from '../shared/customButton';

const regSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(2)
    .matches(/^[a-zA-Z]+$/, 'Must contain only alphabets'),
  email: yup.string().required().min(4).email(),
});

/**
 * @author Nilesh Ganpat Chavan
 * @description This shows Registration screen.Which containes name email and profile image field.
 * @param {navigation object} navigation Which is userful to traverse throung different routes available with
 * this object
 * @returns jsx which contains input to perform registration.
 */

function Registration({navigation}) {
  const [imageData, setImageData] = useState({});

  const handleChooseFile = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response ', response);
      if (response?.didCancel !== true) {
        setImageData(response);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={{flex: 1, marginTop: 30}}>
        <View style={styles.container}>
          <Formik
            initialValues={{name: '', email: ''}}
            validationSchema={regSchema}
            onSubmit={(values, action) => {
              if (!imageData.type) {
                Alert.alert(
                  'OOPS!',
                  'Profile Image Is Required Please Select',
                  [{text: 'Understood'}],
                );
              } else {
                // user_name: values.name,
                // user_email: values.email,
                // profile_image: imageData.fileName,

                const data = new FormData();
                data.append('user_name', values.name);
                data.append('user_email', values.email);
                data.append('profile_image', imageData.fileName);

                axios
                  .post(`${baseUrl}/${regEndPoint}`, data, {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                  })
                  .then((res) => {
                    // console.log('Success', res);
                    Alert.alert('hooray!', res.data.message);
                    action.resetForm();
                    setImageData({});
                    navigation.goBack();
                  })
                  .catch((e) => {
                    Alert.alert('OOPS!', 'Something Went Wrong');
                    // console.log('Registartion Error', e, e.response);
                    action.resetForm();
                    setImageData({});
                  });
              }
            }}>
            {(formikProps) => (
              <View style={{...globalStyle.mainDiv, marginTop: 0}}>
                <Text style={globalStyle.companyName}>
                  Neo<Text style={globalStyle.redText}>SCRUM</Text>
                </Text>
                <View style={globalStyle.card}>
                  <View style={globalStyle.cardContent}>
                    <Text style={globalStyle.cardHeading}>Admin</Text>
                    <Text style={globalStyle.inputHeading}>Employee Name:</Text>
                    <TextInput
                      style={styles.input}
                      value={formikProps.values.name}
                      onChangeText={formikProps.handleChange('name')}
                      onBlur={formikProps.handleBlur('name')}
                    />

                    {formikProps.touched.name && formikProps.errors.name && (
                      <Text style={globalStyle.errorText}>
                        {formikProps.touched.name && formikProps.errors.name}
                      </Text>
                    )}

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

                    <Text style={globalStyle.inputHeading}>Profile Image:</Text>
                    <TouchableWithoutFeedback onPress={handleChooseFile}>
                      <View style={styles.inputImage}>
                        <Text style={styles.inputImageBox}>Choose File</Text>
                        <Text numberOfLines={1}>
                          {imageData.fileName || 'No File Chosen'}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>

                    <View style={globalStyle.buttonDiv}>
                      <View style={globalStyle.button}>
                        <CustomButton
                          color="red"
                          disabled={false}
                          title="REGISTER"
                          onPress={formikProps.handleSubmit}
                        />
                      </View>
                      <View style={[styles.button]}>
                        <CustomButton
                          color="#2B7DE9"
                          disabled={false}
                          title="LOGIN"
                          onPress={() => navigation.goBack()}
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'gray',
    padding: 5,
    paddingVertical: 7,
    fontSize: 16,
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
    padding: 10,
    marginRight: 10,
  },
});

export default Registration;

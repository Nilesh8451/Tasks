import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Formik} from 'formik';
import * as yup from 'yup';

const regSchema = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().min(4).email(),
});

function Registration({navigation}) {
  const [imageData, setImageData] = useState({});

  handleChooseFile = () => {
    console.log('Pressed');
    const options = {};
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response ', response);
      if (response?.didCancel !== true) {
        setImageData(response);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          initialValues={{name: '', email: ''}}
          validationSchema={regSchema}
          onSubmit={(values, action) => {
            // console.log(values, imageData);

            if (!imageData.type) {
              Alert.alert('OOPS!', 'Profile Image Is Required Please Select', [
                {text: 'Understood'},
              ]);
            } else {
              console.log('Call The Reg API');
              action.resetForm();
            }
          }}>
          {(formikProps) => (
            <View style={styles.mainDiv}>
              <Text style={styles.companyName}>
                Neo<Text style={styles.redText}>SCRUM</Text>
              </Text>
              <View style={styles.card}>
                <View style={styles.cardContent}>
                  <Text style={styles.cardHeading}>Admin</Text>
                  <Text style={styles.inputHeading}>Employee Name:</Text>
                  <TextInput
                    style={styles.input}
                    value={formikProps.values.name}
                    onChangeText={formikProps.handleChange('name')}
                    onBlur={formikProps.handleBlur('name')}
                  />
                  <Text style={styles.errorText}>
                    {formikProps.touched.name && formikProps.errors.name}
                  </Text>

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

                  <Text style={styles.inputHeading}>Profile Image:</Text>
                  <TouchableWithoutFeedback onPress={handleChooseFile}>
                    <View style={styles.inputImage}>
                      <Text style={styles.inputImageBox}>Choose File</Text>
                      <Text>No File Chosen</Text>
                    </View>
                  </TouchableWithoutFeedback>

                  <View style={styles.buttonDiv}>
                    <View style={styles.button}>
                      <Button
                        title="Registration"
                        onPress={formikProps.handleSubmit}
                      />
                    </View>
                    <View style={[styles.button, styles.oppositeBut]}>
                      <Button
                        title="Login"
                        color="black"
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'gray',
  },
  mainDiv: {
    height: '90%',
    justifyContent: 'center',
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
    marginVertical: 30,
  },
  cardHeading: {
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: 'gray',
    padding: 5,
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
    marginTop: 25,
  },
  button: {
    marginRight: 20,
  },
  oppositeBut: {},
  errorText: {
    color: 'red',
    marginBottom: 3,
    // textAlign: 'center',
    marginTop: 5,
    marginLeft: 2,
    textTransform: 'capitalize',
  },
});

export default Registration;

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {addFeedback} from '../redux/action/feedbackAction';
import {Formik} from 'formik';

/**
 * @author Nilesh Ganpat Chavan
 * @description This screen shows others users of this app based on if the current logged in user already
 * responded with feedback for that user or not.If logged in user already responded for other user then that user
 * is not shown in this screen.
 * @returns jsx which contains card of different users
 */

function AddFeedback({feedback, addFeedback}) {
  handleSubmit = (item, inVal) => {
    // console.log('Clicked submit with value and itemno', inVal, item);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardMainDiv}>
          {feedback.map((item) => {
            return (
              <Formik
                key={item.receiver_id}
                initialValues={{feedbackInput: '', user: ''}}
                onSubmit={(values, action) => {
                  console.log('Call The Login APi');
                  handleSubmit(item, values.feedbackInput);
                  action.resetForm();
                }}>
                {(formikProps) => (
                  <View style={styles.card}>
                    <ImageBackground
                      source={require('../assets/images/backImg.jpg')}
                      style={{
                        width: '99.5%',
                        opacity: 1,
                        borderWidth: 0,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <LinearGradient
                        colors={['transparent', 'white', 'white']}
                        style={[styles.linearGradient]}>
                        <View style={styles.userInfo}>
                          <View style={styles.imageView}>
                            <Avatar
                              size={90}
                              rounded
                              source={{
                                uri: item.image_path,
                                // 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                              }}
                            />
                          </View>
                          <Text style={styles.receiverName}>
                            {item.receiver_name}
                          </Text>
                        </View>
                      </LinearGradient>
                    </ImageBackground>

                    <View style={styles.formView}>
                      <TextInput
                        style={styles.input}
                        multiline
                        numberOfLines={4}
                        placeholder="Write your feedback here"
                        maxLength={100}
                        value={formikProps.values.feedbackInput}
                        onChangeText={formikProps.handleChange('feedbackInput')}
                      />
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.smallText}>Max 100 characters</Text>
                        <Text style={{...styles.smallText, marginRight: 10}}>
                          {formikProps.values.feedbackInput.length}/100
                        </Text>
                      </View>

                      <View style={styles.button}>
                        <Button
                          title="Submit Feedback"
                          onPress={formikProps.handleSubmit}
                          disabled={
                            formikProps.values.feedbackInput.length == 0
                              ? true
                              : false
                          }
                        />
                      </View>
                    </View>
                  </View>
                )}
              </Formik>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardMainDiv: {
    flex: 1,
    paddingVertical: 30,
    alignItems: 'center',
  },
  card: {
    width: '80%',
    maxWidth: 600,
    backgroundColor: 'white',
    marginBottom: 30,
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 7,
  },
  userInfo: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiverName: {
    fontSize: 19,
    marginTop: 16,
    fontWeight: 'bold',
  },
  formView: {
    width: '86%',
    marginTop: 0,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  smallText: {
    marginTop: 2,
    marginLeft: 10,
    opacity: 0.6,
    fontSize: 12,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 6,
    marginTop: 20,
    marginBottom: 10,
  },
  linearGradient: {
    height: 250,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});

const mapStateToProps = (state) => {
  return {
    feedback: state.feedbackReducer.feedback,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFeedback: (feedback) => dispatch(addFeedback(feedback)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFeedback);

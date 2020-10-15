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

function AddFeedback() {
  const [feedbackInput, setFeedbackInput] = useState('');

  handleSubmit = () => {
    console.log('Clicked submit with value', feedbackInput);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardMainDiv}>
          <View style={styles.card}>
            <ImageBackground
              source={require('../images/back7.jpg')}
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
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
                  </View>
                  <Text style={styles.receiverName}>Sukhmeet Singh</Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            <View style={styles.formView}>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                placeholder="Write your feedback here"
                value={feedbackInput}
                maxLength={110}
                onChangeText={(val) => setFeedbackInput(val)}
              />
              <Text style={styles.smallText}>Max 100 characters</Text>
              <View style={styles.button}>
                <Button title="Submit Feedback" onPress={handleSubmit} />
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <ImageBackground
              source={require('../images/back7.jpg')}
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
                        uri:
                          'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                      }}
                    />
                  </View>
                  <Text style={styles.receiverName}>Sukhmeet Singh</Text>
                </View>
              </LinearGradient>
            </ImageBackground>

            <View style={styles.formView}>
              <TextInput
                style={styles.input}
                multiline
                numberOfLines={4}
                placeholder="Write your feedback here"
                value={feedbackInput}
                maxLength={110}
                onChangeText={(val) => setFeedbackInput(val)}
              />
              <Text style={styles.smallText}>Max 100 characters</Text>
              <View style={styles.button}>
                <Button title="Submit Feedback" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  cardMainDiv: {
    flex: 1,
    paddingVertical: 30,
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  card: {
    width: '80%',
    // height: 430,
    // backgroundColor: 'gray',
    backgroundColor: 'white',
    marginBottom: 30,
    alignItems: 'center',
    borderRadius: 8,
    // borderWidth: 0.1,
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
    // backgroundColor: 'red',
  },
  imageView: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'pink',
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
    // backgroundColor: 'pink',
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
    // flex: 1,
    height: 250,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    // borderRadius: 5,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
});

export default AddFeedback;

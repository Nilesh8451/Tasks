import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Card from '../shared/card';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReviewForm from '../screens/ReviewForms';
export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {title: 'Hera Pheri is Awesome', rating: 5, body: 'lorem ipsum', key: '1'},
    {
      title: 'Hera Pheri is Awesome 2',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Hera Pheri is Awesome 3',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    console.log('Hello ', review);
    setReviews((curReviews) => {
      return [review, ...curReviews];
    });
    setModalOpen(false);
  };

  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <MaterialCommunityIcons
              style={[styles.modalToggle, styles.modalClose]}
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialCommunityIcons
        style={styles.modalToggle}
        name="plus"
        size={24}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <Card>
              <Text
                style={{
                  marginTop: 10,
                }}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalClose: {
    marginTop: 20,
  },
});

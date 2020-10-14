import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({addReview}) {
  return (
    <View>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
          addReview(values);
        }}>
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange('title')}
              value={formikProps.values.title}
            />

            <TextInput
              style={styles.input}
              multiline
              placeholder="Review Body"
              onChangeText={formikProps.handleChange('body')}
              value={formikProps.values.body}
            />

            <TextInput
              style={styles.input}
              placeholder="Review (1-5)"
              onChangeText={formikProps.handleChange('rating')}
              value={formikProps.values.rating}
              keyboardType="numeric"
            />

            <Button
              title="submit"
              color="maroon"
              onPress={formikProps.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
  },
});

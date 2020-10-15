import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(4),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1-5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values, action) => {
          console.log(values);
          action.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Review Title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={styles.text}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>

            <TextInput
              style={styles.input}
              multiline
              placeholder="Review Body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={styles.text}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Review (1-5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur("rating")}
              keyboardType="numeric"
            />
            <Text style={styles.text}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>

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
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  text: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

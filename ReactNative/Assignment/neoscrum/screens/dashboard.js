import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getFeedback} from '../redux/action/feedbackAction';
/**
 * @author Nilesh Ganpat Chavan
 * @description This screen shows feedback given by other users of the app.So that user can userstand what
 * other think about you without knowing who wrote this feedback.
 * @returns jsx which contains card of feedback receives from other users
 */

function Dashboard() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardMainDiv}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>Feedback</Text>
              <Text>in 6 hours</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.bodyText}>
                Your program is very understandable
              </Text>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.footerContent}>
                <Text style={styles.footerText}>sent by : Steve Jobs</Text>
                <Text style={styles.footerText}>posted on : 2 feb 2015</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>Feedback</Text>
              <Text>in 6 hours</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.bodyText}>
                Your program is very understandable
              </Text>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.footerContent}>
                <Text style={styles.footerText}>sent by : Steve Jobs</Text>
                <Text style={styles.footerText}>posted on : 2 feb 2015</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>Feedback</Text>
              <Text>in 6 hours</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.bodyText}>
                Her kitchen appears unused. No plantain peels huddled in the
                corner. No orphan mustard seeds sajhsa.
              </Text>
            </View>
            <View style={styles.cardFooter}>
              <View style={styles.footerContent}>
                <Text style={styles.footerText}>sent by : Steve Jobs</Text>
                <Text style={styles.footerText}>posted on : 2 feb 2015</Text>
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
    height: '100%',
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
    height: 285,
    backgroundColor: 'white',
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 7,

    borderRadius: 7,
  },
  cardHeader: {
    width: '90%',
    padding: 15,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0e884',
  },
  cardBody: {
    width: '90%',
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  bodyText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  cardFooter: {
    width: '90%',
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 14,
  },
});

const mapStateToProps = (state) => {
  return {
    feedback: state.feedbackReducer.feedback,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeedback: (id) => dispatch(getFeedback(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

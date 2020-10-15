import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

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
    height: 285,
    // backgroundColor: 'gray',
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
    // backgroundColor: 'yellow',
    height: 100,
  },
  bodyText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  cardFooter: {
    width: '90%',
    // backgroundColor: 'yellow',
    alignItems: 'flex-end',
  },
  footerText: {
    fontSize: 14,
  },
});

export default Dashboard;

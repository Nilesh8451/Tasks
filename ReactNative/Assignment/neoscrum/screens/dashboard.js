import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getDashboard} from '../redux/action/feedbackAction';
/**
 * @author Nilesh Ganpat Chavan
 * @description This screen shows feedback given by other users of the app.So that user can userstand what
 * other think about you without knowing who wrote this feedback.
 * @param {dashboard,user,getDashboard} : dashboard is data which contain all feedback given to user, user
 * contain logged in user information. getDashboard is a function from which we can store data in dashboard coming from
 * api call.
 * @returns jsx which contains card of feedback receives from other users
 */

function Dashboard({dashboard, user, getDashboard}) {
  useEffect(() => {
    getDashboard(user.token);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {dashboard.lenth > 0 ? (
          <View style={styles.cardMainDiv}>
            {dashboard.map((item, index) => (
              <View style={styles.card} key={index}>
                <View style={styles.cardHeader}>
                  <Text>Feedback</Text>
                  <Text>
                    in{' '}
                    {parseInt(
                      (new Date().getTime() -
                        new Date(item.posting_date).getTime()) /
                        3600 /
                        1000,
                    )}{' '}
                    hours
                  </Text>
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.bodyText}>{item.feedback_data}</Text>
                </View>
                <View style={styles.cardFooter}>
                  <View style={styles.footerContent}>
                    <Text style={styles.footerText}>
                      sent by : Anonymous user
                    </Text>
                    <Text style={styles.footerText}>
                      posted on :
                      {String(new Date(item.posting_date).toDateString())}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.cardMainDiv}>
            <Text style={{fontSize: 20, marginTop: 50}}>
              You Have No Feedback
            </Text>
          </View>
        )}
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
    dashboard: state.feedbackReducer.dashboard,
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDashboard: (id) => dispatch(getDashboard(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

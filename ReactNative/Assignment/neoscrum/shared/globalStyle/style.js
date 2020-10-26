import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  mainDiv: {
    height: '90%',
    maxWidth: 600,
    marginTop: 40,
    // alignItems: 'center',
    justifyContent: 'center',
  },

  companyName: {
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
  },

  redText: {
    color: 'red',
  },

  card: {
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderWidth: 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },

  cardContent: {
    marginHorizontal: 15,
    marginVertical: 40,
  },

  cardHeading: {
    fontSize: 21,
  },

  inputHeading: {
    marginTop: 20,
    fontSize: 18,
  },

  buttonDiv: {
    flexDirection: 'row',
    marginTop: 30,
  },

  button: {
    marginRight: 20,
  },

  errorText: {
    color: 'red',
    marginBottom: 3,
    marginTop: 5,
    marginLeft: 2,
    textTransform: 'capitalize',
  },

  forgotSetPasswordContainer: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgotSetPasswordNavHeader: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  forgotSetPasswordMainDiv: {
    flex: 1,
    height: '100%',
    width: '90%',
    maxWidth: 600,
    justifyContent: 'center',
    marginTop: 35,
    marginBottom: 50,
  },
  forgotSetPasswordCard: {
    marginTop: 10,
  },

  forgotSetPasswordCardContent: {
    marginHorizontal: 15,
    marginVertical: 20,
  },

  forgotSetPasswordInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 12,
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 2,
  },

  forgotSetPasswordButtonDiv: {
    flexDirection: 'column',
    marginTop: 25,
  },
});

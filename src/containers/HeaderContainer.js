import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header/Header';

const HeaderContainer = props => <Header {...props} />

const mapStateToProps = () => {
  return {

  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
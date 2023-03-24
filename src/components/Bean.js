import React from 'react';
import NewBeanForm from './NewBeanForm';
import BeanList from './BeanList';
import BeanDetail from './BeanDetail';
import EditBeanForm from './EditBeanForm';

class DisplayControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false,
      mainBeanList = [],
      selectedBean: null,
      editing: false
    };
  }














  render () {
    let currentlyVisibleState = null;
    let buttonText = null;

  }
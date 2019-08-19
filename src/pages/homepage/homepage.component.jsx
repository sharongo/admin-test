import React, { Component } from "react";
import Searchbar from "../../components/search-bar/search-bar.component";
import Operators from "../../components/operators/operators.component";
import AddOperator from "../../components/add-operator/add-operator.component";
import EditOperator from '../../components/edit-operator/edit-operator.component'

import {showEditModal} from '../../redux/operator/operator.actions'

import { connect } from 'react-redux'

const HomePage = () => {



    return (
      <div>
        <Searchbar />
        <Operators/>
        <AddOperator  />
        <EditOperator />
      </div>
    );
  
}

export default connect(null) (HomePage);

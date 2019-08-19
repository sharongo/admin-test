import React, { useState } from "react";
import { connect } from 'react-redux';
import { showModal, searchOperators } from '../../redux/operator/operator.actions'


import { Form, Input, Button } from "antd";

const SearchBar = ({ showModal, form, searchOperators, operators }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    
    searchOperators(query)
  };

  const onChange = e => {
    setQuery({
      query: e.target.value
    })
  }
  
  console.log(operators)

  const { getFieldDecorator } = form;
  return (
    <Form layout="inline" onSubmit={e => handleSubmit(e)}>
      <Form.Item label="manage operators">
        <Button type="primary" onClick={() => showModal()}>
          הוספת מפעיל
        </Button>
      </Form.Item>
      <Form.Item >
        {getFieldDecorator("search", {
          rules: [
            {
              required: false,
              message: 'search operators'
            }
          ]
        })(<Input placeholder="search" value={query} onChange={(e) => onChange(e)} />)}
      </Form.Item>
    </Form>
  );
};

const WrappedSearchBar = Form.create({ name: "search_bar" })(SearchBar);

const mapStateToProps = state => ({
  operators: state.operator.operators
})

export default connect(mapStateToProps, { showModal, searchOperators })(WrappedSearchBar);

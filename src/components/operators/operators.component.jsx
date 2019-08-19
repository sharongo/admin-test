import React, { Component, useEffect } from "react";
import { connect } from "react-redux";

import { Table, Form, Checkbox, Row, Col, Button, Input, Select } from "antd";

import { getOperators, showEditModal } from "../../redux/operator/operator.actions";

const { Option } = Select;

const columns = [
  { title: "שם מפעיל", dataIndex: "name", key: "name" },
  { title: "מספר המפעיל במערכת", dataIndex: "systemId", key: "systemId" },
  {
    title: "סטטוס ניהולי",
    dataIndex: "managementStatus",
    key: "managementStatus"
  },
  {
    title: "סטטוס תפעולי",
    dataIndex: "operationalStatus",
    key: "operationalStatus"
  },
  { title: "איש קשר", dataIndex: "contactName", key: "contactName" },
  {
    title: "מועד שאילתא היסטוריה אחרונה",
    dataIndex: "lastHistoryQuery",
    key: "lastHistoryQuery"
  },
  {
    title: "מועד שליפה אחרון",
    dataIndex: "lastSelectQuery",
    key: "lastSelectQuery"
  },
  {
    title: "מועד שליפה תקינה אחרונה",
    dataIndex: "lastProperSelectQurey",
    key: "lastProperSelectQurey"
  }
];

const Operators = ({ getOperators, visible, showEditModal, operators, editVisible }) => {

  useEffect(() => {
    getOperators();
  }, [visible, editVisible])



  const renderEditForm = (record) => {


    return (
      <Form layout="vertical">
        <Form.Item>
          <span style={{ fontWeight: "bold" }} className="ant-form-text">
            {record.firstName + " " + record.lastName}
          </span>
          <span className="ant-form-text">{record.email}</span>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "bold" }} className="ant-form-text">
            {record.name}
          </span>
          <span className="ant-form-text">{record.phone}</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" shape="round" onClick={() => showEditModal(record.id)}>
            עדכון פרטי מפעיל
          </Button>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={4}>
              <Checkbox value="A">מפעיל בתקופת יישום</Checkbox>
            </Col>
            <Col span={8}>
              <span className="ant-form-text">
                {" "}
                תדירות שליפת מידע: <Input size="small" />
              </span>
            </Col>
            <Col span={8}>
              <span>מערכת חיווי:</span>
              <Select defaultValue="גוגל" style={{ width: 120 }}>
                <Option value="גוגל">גוגל</Option>
              </Select>
            </Col>
            <span className="ant-form-text">כתובת לשאילת נסיעות</span>
          </Row>
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={4}>
              <Checkbox value="B">שמירת תוכן מסרים</Checkbox>
            </Col>
            <Col span={8}>
              <span className="ant-form-text">
                מס תחנות קודמות לשליפה: <Input size="small" />
              </span>
            </Col>
            <Col span={8}>
              <span>גרסת פרוטוקול</span>
              <Select defaultValue="vm" style={{ width: 120 }}>
                <Option value="vm">vm</Option>
              </Select>
            </Col>
            <span className="ant-form-text">כתובת לשאילתת היסטורה:</span>
          </Row>
        </Form.Item>
        <Form.Item>
          <Checkbox value="C">יישום שאילתא היסטוריה</Checkbox>
        </Form.Item>
      </Form>
    );
  }

  return (
    <Table
      columns={columns}
      expandedRowRender={(record) => renderEditForm(record)}
      dataSource={operators}
    />
  );

}

const mapStateToProps = state => ({
  operators: state.operator.operators,
  visible: state.operator.visible,
  editVisible: state.operator.editVisible
});

export default connect(
  mapStateToProps,
  { getOperators, showEditModal }
)(Operators);

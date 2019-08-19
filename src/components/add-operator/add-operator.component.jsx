import React, { useState } from "react";
import { addOperator, closeModal } from "../../redux/operator/operator.actions";
import { connect } from 'react-redux';

import { Modal, Button, Form, Input, Row, Col, Select } from "antd";

const { Option } = Select;

const AddOperator = ({ visible, handleOk, closeModal, addOperator }) => {
  const [formData, setFormData] = useState({
    contactName: "",
    dataRetrieveFrequency: "",
    email: "",
    firstName: "",
    futureDerivesUrl: "",
    id: "",
    systemId: "",
    indicationSystem: "",
    lastHistoryQuery: "",
    lastName: "",
    lastProperSelectQurey: "",
    lastSelectQuery: "",
    managementStatus: "",
    name: "",
    numberOfStationsBeforeRetrieve: "",
    operationalStatus: "",
    phone: ""
  });

  //const[visible, setVisible] = useState(false);

  const {
    contactName,
    dataRetrieveFrequency,
    email,
    firstName,
    futureDerivesUrl,
    id,
    systemId,
    indicationSystem,
    lastHistoryQuery,
    lastName,
    lastProperSelectQurey,
    lastSelectQuery,
    managementStatus,
    name,
    numberOfStationsBeforeRetrieve,
    operationalStatus,
    phone
  } = formData;





  const handleSubmit = e => {
    e.preventDefault();

    addOperator(formData);
    setFormData({
      ...formData,
      contactName: "",
      dataRetrieveFrequency: "",
      email: "",
      firstName: "",
      futureDerivesUrl: "",
      id: "",
      systemId: "",
      indicationSystem: "",
      lastHistoryQuery: "",
      lastName: "",
      lastProperSelectQurey: "",
      lastSelectQuery: "",
      managementStatus: "",
      name: "",
      numberOfStationsBeforeRetrieve: "",
      operationalStatus: "",
      phone: ""
    })

  };

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleCancel = e => {
    closeModal();
  }



  return (
    <div>
      <Modal
        width={1000}
        title="הוספת מפעיל"
        visible={visible}
        onOk={() => handleCancel()}
        onCancel={() => handleCancel()}
      >
        <Form onSubmit={e => handleSubmit(e)}>
          <Row>
            <Col span={4}>
              <Form.Item label="מספר המפעיל במערכת">
                <Input name="systemId" value={systemId} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
              <Form.Item label="שם מפעיל">
                <Input name="name" value={name} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
            <Form.Item label="סטטוס תפעולי">
                <Input name="operationalStatus" value={operationalStatus} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="שם פרטי">
                <Input name="firstName" value={firstName} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
              <Form.Item label="שם משפחה">
                <Input name="lastName" value={lastName} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
            <Form.Item label="סטטוס ניהולי">
                <Input name="managementStatus" value={managementStatus} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="טלפון">
                <Input name="phone" value={phone} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
              <Form.Item label="דואר אלקטרוני">
                <Input name="email" value={email} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
              <Form.Item label="מועד שליפה אחרון">
                <Input name="lastSelectQuery" value={lastSelectQuery} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="איש קשר">
                <Input name="contactName" value={contactName} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
            <Col style={{ paddingLeft: "50px" }} span={8}>
              <Form.Item label="מועד שליפה תקינה אחרונה">
                <Input name="lastProperSelectQurey" value={lastProperSelectQurey} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="תדירות שליפת מידע">
                <Input
                  name="dataRetrieveFrequency"
                  value={dataRetrieveFrequency}
                  onChange={e => onChange(e)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="מספר תחנות קודמות לשליפה">
                <Input
                  name="numberOfStationsBeforeRetrieve"
                  value={numberOfStationsBeforeRetrieve}
                  onChange={e => onChange(e)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <span>מערכת חיווי:</span>{" "}
              <Select defaultValue="Select" style={{ width: 120 }}>
                <Option value="google" />
                <Option value="amazon" />
              </Select>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col span={8}>
              <span>גסת פרוטוקול:</span>{" "}
              <Select defaultValue="Select" style={{ width: 120 }}>
                <Option value="vm">Select</Option>
                <Option value="vw">Select</Option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="כתובת לשליפת נסיעות מתוכננות">
                <Input name="futureDerivesUrl" value={futureDerivesUrl} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item label="כתובת לשאילתא היסטוריה">
                <Input name="lastHistoryQuery" value={lastHistoryQuery} onChange={e => onChange(e)} />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">Add Operator</Button>
        </Form>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => ({
  visible: state.operator.visible
})

export default connect(mapStateToProps, { addOperator, closeModal })(AddOperator);

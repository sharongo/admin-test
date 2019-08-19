import React, { useState } from "react";
import { editOperator, closeEditModal } from "../../redux/operator/operator.actions";
import { connect } from 'react-redux';

import { Modal, Button, Form, Input, Row, Col, Select } from "antd";

const { Option } = Select;

const EditOperator = ({ editVisible, handleOk, closeEditModal, editOperator, operatorId }) => {

    const [formData, setFormData] = useState({
        contactName: "",
        dataRetrieveFrequency: "",
        email: "",
        firstName: "",
        futureDerivesUrl: "",
        id: "",
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


    const {
        contactName,
        dataRetrieveFrequency,
        email,
        firstName,
        futureDerivesUrl,
        id,
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

        editOperator(operatorId ,formData);
        setFormData({
            ...formData,
            contactName: "",
            dataRetrieveFrequency: "",
            email: "",
            firstName: "",
            futureDerivesUrl: "",
            id: "",
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
        closeEditModal();
    }



    return (
        <div>
            <Modal
                width={1000}
                title="עדכון מפעיל"
                visible={editVisible}
                onOk={() => handleCancel()}
                onCancel={() => handleCancel()}
            >
                <Form onSubmit={e => handleSubmit(e)}>
                    <Row>
                        {/* <Col span={4}>
                            <Form.Item label="מספר המפעיל במערכת">
                                <Input name="systemId" value={systemId} onChange={e => onChange(e)} />
                            </Form.Item>
                        </Col> */}
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
                    <Button type="primary" htmlType="submit">Edit Operator</Button>
                </Form>
            </Modal>
        </div>
    );
};  

const mapStateToProps = state => ({
    editVisible: state.operator.editVisible,
    operatorId: state.operator.operatorId
})

export default connect(mapStateToProps, { editOperator, closeEditModal })(EditOperator);

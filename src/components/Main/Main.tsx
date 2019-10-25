import React from 'react';
import Form from '../Form/Form';
import List from '../List/List';
import { Layout, Row, Col, Divider } from 'antd';
import { layoutStyles } from './MainStyles';

export const Main = () => (
  <Layout style={layoutStyles}>
    <Divider>Create task</Divider>
    <Row type="flex" justify="center">
      <Col>
        <Form/>
      </Col>
    </Row>
    <Divider>List of tasks</Divider>
    <Row type="flex" justify="center">
      <Col span="6">
        <List/>
      </Col>
    </Row>
  </Layout>
);

export default Main;

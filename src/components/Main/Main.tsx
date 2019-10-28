import React from 'react';
import { Divider, Layout, Row } from 'antd';
import { layoutStyles } from './MainStyles';
import FormContainer from '../../containers/FormContainer';
import ListContainer from '../../containers/ListContainer';
import DarkMode from '../DarkMode/DarkMode';
import Filter from '../Filter/Filter';

export const Main = () => (
  <Layout style={layoutStyles}>
    <Row type="flex" justify="center" style={{ margin: '30px 0' }}>
      <DarkMode />
    </Row>
    <Divider>Create task</Divider>
    <Row type="flex" justify="center">
      <FormContainer />
    </Row>
    <Row type="flex" justify="center" style={{ margin: '30px 0' }}>
      <Filter />
    </Row>
    <Divider>List of tasks</Divider>
    <Row type="flex" justify="center">
      <ListContainer />
    </Row>
  </Layout>
)

export default Main

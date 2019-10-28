import React from 'react'
import { Divider, Layout, Row } from 'antd'
import { layoutStyles } from './MainStyles'
import FormContainer from '../../containers/FormContainer'
import ListContainer from '../../containers/ListContainer'
import FilterContainer from '../../containers/FilterContainer'
import DarkModeContainer from '../../containers/DarkModeContainer'

export const Main = () => (
  <Layout style={layoutStyles}>
    <Row type="flex" justify="center" style={{ margin: '30px 0' }}>
      <DarkModeContainer />
    </Row>
    <Divider>Create task</Divider>
    <Row type="flex" justify="center">
      <FormContainer />
    </Row>
    <Row type="flex" justify="center" style={{ margin: '30px 0' }}>
      <FilterContainer />
    </Row>
    <Divider>List of tasks</Divider>
    <Row type="flex" justify="center">
      <ListContainer />
    </Row>
  </Layout>
)

export default Main

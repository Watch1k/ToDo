import React from 'react'
import { Divider, Layout, Row } from 'antd'
import { layoutMainStyles } from './MainStyles'
import FormContainer from '../../containers/FormContainer'
import List from '../List'
import DarkMode from '../DarkMode'
import Filter from '../Filter'
import { Strings } from '../../enums/strings'
import { useListConnect } from '../../useConnect'

const Main = () => {
  const { todos } = useListConnect()

  return (
    <Layout style={layoutMainStyles} data-testid='main'>
      <Divider>{Strings.mainCreateTusk}</Divider>
      <Row type='flex' justify='center'>
        <FormContainer />
      </Row>
      <Row type='flex' justify='center' style={{ margin: '30px 0' }}>
        <Filter />
      </Row>

      <Divider>{Strings.mainListOfTasks}</Divider>
      <Row type='flex' justify='center'>
        <List todos={todos} />
      </Row>

      <Divider>{Strings.darkMode}</Divider>
      <Row type='flex' justify='center' style={{ margin: '30px 0' }}>
        <DarkMode />
      </Row>
    </Layout>
  )
}

export default Main

import React, { useState } from 'react'
import { AutoComplete, Button, Divider, Form, Icon, Input, Layout } from 'antd'
import { useSearchConnect } from '../../useConnect'
import { autocompleteSearchStyles, layoutSearchStyles } from './SearchStyles'
import { Strings } from '../../enums/strings'
import List from '../List'
import { AutoCompleteProps } from 'antd/es/auto-complete'
import { ITodo } from '../../interfaces/state'

const Search = () => {
  const { todos } = useSearchConnect()
  const [items, setItems] = useState<ITodo[]>([])

  const onSelect: AutoCompleteProps['onSelect'] = value => {
    setItems(todos.filter(_ => _.id.toString() === value))
  }

  const onSubmit: React.FormEventHandler = e => e.preventDefault()

  return (
    <Layout style={layoutSearchStyles}>
      <List todos={items} />
      <Divider>{Strings.search}</Divider>
      <Form onSubmit={onSubmit}>
        <AutoComplete
          className='global-search'
          defaultActiveFirstOption={false}
          size='large'
          style={autocompleteSearchStyles}
          dataSource={todos.map(_ => (
            <AutoComplete.Option key={_.id}>{_.text}</AutoComplete.Option>
          ))}
          onSelect={onSelect}
          placeholder='input here'
          filterOption={(inputValue, option) => {
            if (typeof option.props.children === 'string') {
              return option.props.children
                .toUpperCase()
                .includes(inputValue.toUpperCase())
            }
            return false
          }}
        >
          <Input
            suffix={
              <Button
                className='search-btn'
                style={{ marginRight: -12 }}
                size='large'
                type='primary'
              >
                <Icon type='search' />
              </Button>
            }
          />
        </AutoComplete>
      </Form>
    </Layout>
  )
}

export default Search

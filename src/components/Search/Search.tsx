import React from 'react'
import { AutoComplete, Button, Divider, Icon, Input, Layout, List } from 'antd'
import { useSearchConnect } from '../../useConnect'
import { autocompleteSearchStyles, layoutSearchStyles } from './SearchStyles'
import { Strings } from '../../enums/strings'

const Search = () => {
  const { todos } = useSearchConnect()

  return (
    <Layout style={layoutSearchStyles}>
      <AutoComplete
        className='global-search'
        size='large'
        style={autocompleteSearchStyles}
        dataSource={todos.map(_ => (
          <AutoComplete.Option key={_.id}>{_.text}</AutoComplete.Option>
        ))}
        placeholder='input here'
        filterOption={(inputValue, option) => {
          if (typeof option.props.children === 'string') {
            return (
              option.props.children
                .toUpperCase()
                .indexOf(inputValue.toUpperCase()) !== -1
            )
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
      <Divider>{Strings.results}</Divider>
      <List />
    </Layout>
  )
}

export default Search

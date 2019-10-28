import React, { useState } from 'react'
import { Card, Radio } from 'antd'
import { VisibilityFilters } from '../../constants'
// import { filterStyles } from './FilterStyles'
import { IVisibilityFilterProps } from '../../containers/FilterContainer'
import { RadioChangeEvent } from 'antd/es/radio'
import { filterStyles } from './FilterStyles'

const Filter = (props: IVisibilityFilterProps) => {
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters
  const [value, setValue] = useState(SHOW_ALL)

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value)
    props.setVisibilityFilter(e.target.value)
  }

  return (
    <Card title="Filter:" style={filterStyles}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={SHOW_ALL}>Show all</Radio>
        <Radio value={SHOW_COMPLETED}>Show completed</Radio>
        <Radio value={SHOW_ACTIVE}>Show active</Radio>
      </Radio.Group>
    </Card>
  )
}

export default Filter

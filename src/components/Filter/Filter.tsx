import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import { VisibilityFilters } from '../../constants';
import { RadioChangeEvent } from 'antd/es/radio';
import { filterStyles } from './FilterStyles';
import { useFilterConnect } from '../../useConnect/filter';

const Filter = () => {
  const { visibilityFilter, setVisibilityFilter } = useFilterConnect();
  const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;
  const [value, setValue] = useState(visibilityFilter);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setVisibilityFilter(e.target.value);
  };

  return (
    <Card title="Filter:" style={filterStyles}>
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={SHOW_ALL}>Show all</Radio>
        <Radio value={SHOW_COMPLETED}>Show completed</Radio>
        <Radio value={SHOW_ACTIVE}>Show active</Radio>
      </Radio.Group>
    </Card>
  );
};

export default Filter;

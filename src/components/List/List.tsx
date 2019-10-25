import React from 'react';
import { List } from 'antd';
import Item from '../Item/IItem';

const ToDoList = () => (
  <List
    dataSource={[{ name: 'kek1' }, { name: 'kek2' }]}
    renderItem={item => (
      <Item item={item}/>
    )}
  />
);

export default ToDoList;

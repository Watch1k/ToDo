import React, { useState } from 'react';
import { Button, Input, List } from 'antd';
import { inputStyles } from './ItemStyles';

interface IItem {
  name: string;
}

interface IProps {
  item: IItem;
}

const Item = ({ item }: IProps) => {
  const [isEdit, setEdit] = useState(false);
  const [value, setValue] = useState(item.name);

  const handleEdit = () => {
    setEdit(true);
  };

  const handleConfirm = () => {
    setEdit(false);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  };

  const getActionButtons: () => React.ReactElement[] = () => ([
    isEdit
      ? (<Button
          key="btn_3"
          size="small"
          icon="check"
          onClick={handleConfirm}
        />
      ) : (<Button
        key="btn_1"
        size="small"
        icon="edit"
        onClick={handleEdit}
      />)
    ,
    <Button
      key="btn_2"
      size="small"
      icon="delete"
    />,
  ]);

  return (
    <List.Item
      actions={getActionButtons()}
    >
      <List.Item.Meta title={
        isEdit
          ? (<Input style={inputStyles} value={value} onChange={handleChange}/>)
          : (<p style={inputStyles}>{value}</p>)
      }/>
    </List.Item>
  );
};

export default Item;

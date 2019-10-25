import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { iconStyles } from './FormStyles';

const ToDoForm = () => {
  const handleSubmit = () => {
  };

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          prefix={<Icon type="unordered-list" style={iconStyles}/>}
          placeholder="New task..."
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ToDoForm;

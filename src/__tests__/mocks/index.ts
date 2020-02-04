import { IProps } from '../../components/Item/Item';

export const itemProps: IProps = {
  item: {
    text: 'test item #1',
    completed: false,
    id: +Date(),
  },
  deleteTodo: jest.fn(),
  editTodo: jest.fn(),
  toggleTodo: jest.fn(),
};

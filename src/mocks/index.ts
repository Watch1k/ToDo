import { ITodo } from '../interfaces/state'

export const fakeTask1: ITodo = {
  text: 'New task #1',
  id: new Date().valueOf(),
  completed: false,
}

export const fakeTask2: ITodo = {
  text: 'New task #2',
  id: new Date().valueOf() + 1,
  completed: true,
}

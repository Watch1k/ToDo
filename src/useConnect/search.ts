import { useSelector } from 'react-redux'
import { IState } from '../interfaces/state'

export const useSearchConnect = () => {
  const todos = useSelector((state: IState) => state.todos)

  return {
    todos,
  }
}

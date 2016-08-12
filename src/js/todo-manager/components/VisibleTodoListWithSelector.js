import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import createGetVisibleTodosSelector from '../selectors';

const makeMapStateToProps = () => {
  const getVisibleTodos = createGetVisibleTodosSelector();
  return (state) => {
    console.log('Triggering mapStateToProps: TodoListContainer ...');
    return {
      todos: getVisibleTodos(state)
    };
  };
};

export default connect(makeMapStateToProps, { toggleTodo })(TodoList);

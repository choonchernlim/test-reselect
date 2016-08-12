import React from 'react';
import Paper from 'material-ui/Paper';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoListWithSelector from './VisibleTodoListWithSelector';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Todo Manager With Selector</h1>

    <p>A simple todo app using Redux.</p>

    <AddTodo />
    <VisibleTodoListWithSelector />
    <Footer />

    <br />
    <Paper style={{ padding: 10 }}>
      <h1>What's going on?</h1>

      <p>
        This demo illustrates a scenario where clicking on the "INCREMENT NUMBER" button
        will NEVER trigger the filtering on the Todo list.
      </p>

      <ul>
        <li>Open up browser console.</li>
        <li>Click on "INCREMENT NUMBER" button a few times.</li>
        <li>For each button click, <code>>> EXPENSIVE FILTERING</code> will never appear in the
          console log.
        </li>
      </ul>

      <h2>Why?</h2>

      <p>
        While this action still triggers all React containers listening to the store
        to recompute, Reselect's selector prevents Todo list filtering from happening through
        memoization. It will only perform the filtering if any of the states listened by
        TodoListContainer (<code>todos</code> and <code>visibilityFilter</code>) changes.
      </p>
    </Paper>
  </Container>
);

import React from 'react';
import Paper from 'material-ui/Paper';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Container from '../../common/components/Container';

export default () => (
  <Container>
    <h1>Todo Manager Without Using Selector</h1>

    <AddTodo />
    <VisibleTodoList />
    <Footer />

    <br />
    <Paper style={{ padding: 10 }}>
      <h1>What's going on?</h1>

      <p>
        This demo illustrates a scenario where clicking on the "INCREMENT NUMBER" button
        will always trigger the filtering on the Todo list.
      </p>

      <ul>
        <li>Open up browser console.</li>
        <li>Click on "INCREMENT NUMBER" button a few times.</li>
        <li>For each button click, <code>>> EXPENSIVE FILTERING</code> appears in the console log.
        </li>
      </ul>

      <h2>Why?</h2>

      <p>
        Although this action has nothing to do with Todo list filtering, it causes a state
        change in the Redux store, which triggers all React containers listening to the store
        to recompute.
      </p>

      <p>
        As a result, this process can quickly become very expensive if the app has many containers
        doing post-processing to prepare the data for the components.
      </p>
    </Paper>
  </Container>
);

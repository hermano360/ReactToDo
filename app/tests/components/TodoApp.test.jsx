var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');


describe('TodoApp',()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });
  it('should add todo item when valid text is input',()=>{
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);

  });
  it('should not add todo item when invalid text is input',()=>{
    var todoText = '';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0]).toNotExist();

  });
})

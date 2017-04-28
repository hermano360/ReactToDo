var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList',()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });
  it('should render one Todo component for each todo Item',()=>{
    var todos=[
      {id:1,text:'Do Something'},
      {id:2,text:'Check Mail'}
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

    expect(todoComponents.length).toBe(todos.length);
  })
})

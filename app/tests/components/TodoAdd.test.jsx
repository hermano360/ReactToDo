var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {TodoAdd} = require('TodoAdd');



describe('TodoAdd',()=>{
  it('should exist', ()=>{
    expect(TodoAdd).toExist();
  });
  it('should call dispatch ADD_TODO when valid todo text',()=>{
    var todoText= "Something awesome";
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAdd));

    todoAdd.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
  it('should not call dispatch addTodo when invalid text',()=>{
    var todoText = '';
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAdd));

    todoAdd.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})

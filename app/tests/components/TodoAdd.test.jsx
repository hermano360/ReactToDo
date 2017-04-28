var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');



describe('TodoAdd',()=>{
  it('should exist', ()=>{
    expect(TodoAdd).toExist();
  });
  it('should call onAddTodo if valid entry',()=>{
    var todoText = 'hey';
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAdd));

    todoAdd.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });
  it('should not call onAddTodo if valid entry',()=>{
    var todoText = '';
    var spy = expect.createSpy();
    var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAdd));

    todoAdd.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
})

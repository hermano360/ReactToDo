var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');


describe('Todo',()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id on click',()=>{
    var todoData = {
      id:0,
      text: 'Test Features',
      completed: false
    };
    var spy = expect.createSpy();
    //key only necessary if there are multiple ones being rendered in a list
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));

    //fix $el selector to pick the root element
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});

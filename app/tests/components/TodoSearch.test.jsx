var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=>{
  it('should exist',()=>{
    expect(TodoSearch).toExist();
  });

  it('should call onSearch when input changes',()=>{
    var searchText = 'Something';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.refs.searchText.value=searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false,searchText);
  });

  it('should call onSearch when checkbox changes',()=>{
    var checkBoxStatus = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.refs.showCompleted.checked=checkBoxStatus;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalled(checkBoxStatus,'');
  });
});

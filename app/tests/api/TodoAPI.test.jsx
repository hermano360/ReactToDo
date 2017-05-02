var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {

  //test lifecycle methods
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
    expect(TodoAPI).toExist();
  });

  describe('setTodos',()=>{
      it('should set valid todos array',()=>{
        var todos =[{
          _id:23,
          text:'Test all a files',
          completed:false
        }];
        TodoAPI.setTodos(todos);

        var actualTodos =JSON.parse(localStorage.getItem('todos'));
        expect(actualTodos).toEqual(todos);
      });
      it('should not set invalid todos array',()=>{
        var todos ='not an array';
        TodoAPI.setTodos(todos);

        // var actualTodos =JSON.parse(localStorage.getItem('todos'));
        // expect(actualTodos).toNotEqual(todos);
        expect(localStorage.getItem('todos')).toBe(null);
      });
    });
  describe('getTodos',()=>{
    it('should return empty array for bad localStoage data',()=>{
      localStorage.setItem('todos','bad localStorageData');
      var storedTodos = TodoAPI.getTodos();
      expect(storedTodos).toEqual([]);
    });
    it('should return todo with valid localStorage data',()=>{
      var todos =[{
        _id:23,
        text:'Test all a files',
        completed:false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var storedTodos = TodoAPI.getTodos();
      expect(storedTodos).toEqual(todos);
    });
  });

});

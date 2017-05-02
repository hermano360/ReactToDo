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
  describe('filterTodos',()=>{
    var todos = [{
      id:1,
      text:"first",
      completed: false
    },{
      id:2,
      text:"second",
      completed: true
    },{
      id:3,
      text:"third",
      completed:false
    }]
    it('should return all items when showCompleted true',()=>{
      var returnedArray = TodoAPI.filterTodos(todos,true,"");
      expect(returnedArray.length).toBe(todos.length);
    });
    it('should return non-completed todos when showCompleted false',()=>{
      var nonCompleted = 0;
      todos.forEach((todo)=>{
        if(!todo.completed){
          nonCompleted++;
        }
      });
      var returnedArray = TodoAPI.filterTodos(todos,false,"");
      expect(returnedArray.length).toBe(nonCompleted);

    });
  });

});

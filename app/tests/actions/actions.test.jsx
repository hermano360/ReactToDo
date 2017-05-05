var expect = require('expect');
var actions = require('actions');

describe('Actions',()=>{
  it('Should generate search text action',()=>{
    var action = {
      type:'SET_SEARCH_TEXT',
      searchText:'Brown Cow'
    };
    var res = actions.setSearchText(action.searchText);
    expect(action).toEqual(res);
  });

  it('Should generate add todo action',()=>{
    var action = {
      type:'ADD_TODO',
      text:'Brown Cow'
    };
    var res = actions.addTodo(action.text);
    expect(action).toEqual(res);
  });

  it('Should toggle show completed action',()=>{
    var action = {
      type:'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(action).toEqual(res);
  });
    it('Should toggle todo',()=>{
      var action = {
        type:'TOGGLE_TODO',
        id:1
      };
      var res = actions.toggleTodo(action.id);
      expect(action).toEqual(res);
    });
    it('Should generate addTodos action object',()=>{
      var todos = [{
        text:'hey',
        id:1,
        completed:false,
        createdAt: 123,
        completedAt: undefined
      },{
        text:'whats up',
        id:2,
        completed:false,
        createdAt: 123,
        completedAt: undefined
      }];
      var action = {
        type:'ADD_TODOS',
        todos
      };
      var res = actions.addTodos(todos);
      expect(res).toEqual(action);

    })
});

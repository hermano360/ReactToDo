var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers',()=>{
  describe('searchTextReducer',()=>{
    it('should set searchText',()=>{
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'Hello'
      };
      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer',()=>{
    it('should toggle showCompleted',()=>{
      var action ={
        type:'TOGGLE_SHOW_COMPLETED'
      };
      var state = false
      var res = reducers.showCompletedReducer(df(state),df(action));
      expect(res).toEqual(!state);
    });
  });

  describe('todosReducer',()=>{
    it('should add new todo',()=>{
      var action = {
        type:'ADD_TODO',
        text: 'Hello'
      };
      var state = [];
      var res = reducers.todosReducer(df(state),df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toBe(action.text);
      expect(res[0].completed).toBe(false);
      expect(res[0].createdAt).toBeA('number');
      expect(res[0].completedAt).toBe(undefined);
    });

    it('should toggle todo',()=>{
      var action = {
        type:'TOGGLE_TODO',
        id: 0
      };
      var todos = [
        {
          text:'hello',
          id:0,
          completed:false,
          createdAt: 124,
          completedAt: undefined
        }
      ];
      var res = reducers.todosReducer(df(todos),df(action));
      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBeA('number');
      var newRes = reducers.todosReducer(df(res),df(action));
      expect(newRes[0].completed).toBe(false);
      expect(newRes[0].completedAt).toEqual(undefined);
    })
  });
});

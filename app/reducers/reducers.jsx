var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state='', action)=>{
  switch(action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state=false, action)=>{
  switch(action.type){
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  };
};

export var todosReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_TODO':
      return [...state,
        {
          text:action.text,
          id:uuid(),
          completed:false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo)=>{
        if(todo.id === action.id){
          var nextCompleted = !todo.completed;
          return {
            ...todo,
            completed:nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          }
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
}

// export var addTodo = (text)=>{
//   return {
//     type:'ADD_TODO',
//     text
//   }
// }

//
// export var toggleTodoReducer = (state,action){
//   switch(action.type){
//     case 'TOGGLE_TODO':
//     default:
//       return state
//   }
// }
// export var toggleTodo = (id) => {
//   return {
//     type:'TOGGLE_TODO',
//     id
//   }
// }

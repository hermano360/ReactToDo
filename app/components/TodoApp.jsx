var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoAPI = require('TodoAPI');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText:'',
      todos: TodoAPI.getTodos()
    }
  },
  componentDidUpdate: function(){
    var todos = this.state.todos;
    TodoAPI.setTodos(todos);
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;

      }
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
  handleAddTodo: function(text){
    if(text && text.length>0){
      this.setState({
        todos:[...this.state.todos,
          {
            text:text,
            id:uuid(),
            completed:false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      })
    }
  },
  handleSearch: function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  render: function(){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos  = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return(
    <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
      <TodoAdd onAddTodo={this.handleAddTodo}/>
    </div>
)
  }
});

module.exports = TodoApp;

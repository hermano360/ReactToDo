var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText:'',
      todos: [
      {id:uuid(),text:'Walk the dog',completed:false},
      {id:uuid(), text:'Clean the yard',completed:false},
      {id:uuid(),text:'Do Homework',completed:true},
      {id:uuid(),text:'Make Bed',completed:false},
      {id:uuid(),text:'Master React',completed:true}
      ]
    }
  },
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
  handleAddTodo: function(text){
    if(text && text.length>0){
      this.setState({
        todos:[...this.state.todos, {text:text,id:uuid(), completed:false}]
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
    var {todos} = this.state;
    return(
    <div>
      <TodoSearch onSearch={this.handleSearch}/>
      <TodoList todos={todos} onToggle={this.handleToggle}/>
      <TodoAdd onAddTodo={this.handleAddTodo}/>
    </div>
)
  }
});

module.exports = TodoApp;

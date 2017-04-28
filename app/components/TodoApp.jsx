var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      showCompleted: false,
      searchText:'',
      todos: [
      {id:1,
      text:'Walk the dog'},
      {id:2,
      text:'Clean the yard'},
      {id:3,
      text:'Do Homework'},
      {id:4,
      text:'Make Bed'},
      {id:5,
      text:'Master React'}
      ]
    }
  },
  handleAddTodo: function(text){
    var todos = this.state.todos;
    todos.push({id:todos.length+1,text:text});
    
    this.setState({
      todos:todos
    })
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
      <TodoList todos={todos}/>
      <TodoAdd onAddTodo={this.handleAddTodo}/>
    </div>
)
  }
});

module.exports = TodoApp;

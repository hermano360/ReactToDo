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
      {id:uuid(),text:'Walk the dog'},
      {id:uuid(), text:'Clean the yard'},
      {id:uuid(),text:'Do Homework'},
      {id:uuid(),text:'Make Bed'},
      {id:uuid(),text:'Master React'}
      ]
    }
  },
  handleAddTodo: function(text){
    if(text && text.length>0){
      this.setState({
        todos:[...this.state.todos, {text:text,id:uuid()}]
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
      <TodoList todos={todos}/>
      <TodoAdd onAddTodo={this.handleAddTodo}/>
    </div>
)
  }
});

module.exports = TodoApp;

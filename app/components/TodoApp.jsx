var React = require('react');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
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
    alert(text);
    var {todos} = this.state;
    this.setState({
      //
    })
  },
  render: function(){
    var {todos} = this.state;
    return(
    <div>
      <TodoList todos={todos}/>
      <TodoAdd onAddTodo={this.handleAddTodo}/>
    </div>
)
  }
});

module.exports = TodoApp;

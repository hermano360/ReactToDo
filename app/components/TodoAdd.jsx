var React = require('react');

var TodoAdd = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText && todoText.length){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function(){
    return(
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} className="">
          <input type="text" ref="todoText" placeholder="Enter What you would like to do!"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = TodoAdd;

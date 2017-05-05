var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var TodoAdd = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if(todoText && todoText.length){
      this.refs.todoText.value = '';
      var {dispatch} = this.props;
      dispatch(actions.startAddTodo(todoText));
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

export default connect()(TodoAdd);

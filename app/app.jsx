var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(()=> {
	console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Hey now'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<TodoApp/>
	</div>,
	document.getElementById('app')
);

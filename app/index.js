var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
});

ReactDOM.render(
    <HelloWorld name="Adarsh"/>,
    document.getElementById('app')
);

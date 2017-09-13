import React from 'react';

class Instrom extends React.Component {
    constructor (){
        super();
        this.state = {
            display: 'none'
        }
    }
    handleClick() {
        
    }
    render() {
        return(
            <div onClick = {this.handleClick.bind(this)} className = "move">
                方块
            </div>
        )
    }
    
var LikeButton = React.createClass({
    getInitialState: function() {
      return {liked: false};
    },
    handleClick: function(event) {
      this.setState({liked: !this.state.liked});
    },
    render: function() {
      var text = this.state.liked ? 'like' : 'haven\'t liked';
      return (
        <p onClick={this.handleClick}>
          You {text} this. Click to toggle.
        </p>
      );
    }
  });
  
  ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
  );
  var Input = React.createClass({
    getInitialState: function() {
      return {value: 'Hello!'};
    },
    handleChange: function(event) {
      this.setState({value: event.target.value});
    },
    render: function () {
      var value = this.state.value;
      return (
        <div>
          <input type="text" value={value} onChange={this.handleChange} />
          <p>{value}</p>
        </div>
      );
    }
  });
  
  ReactDOM.render(<Input/>, document.body);
  var Hello = React.createClass({
    getInitialState: function () {
      return {
        opacity: 1.0
      };
    },
  
    componentDidMount: function () {
      this.timer = setInterval(function () {
        var opacity = this.state.opacity;
        opacity -= .05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this), 100);
    },
  
    render: function () {
      return (
        <div style={{opacity: this.state.opacity}}>
          Hello {this.props.name}
        </div>
      );
    }
  });
  
  ReactDOM.render(
    <Hello name="world"/>,
    document.body
  );
}
render() {
  return (<div style={{opacity: this.state.opacity}}>
    <Hello name = 'world' />
  </div>)
}
export default Instrom;
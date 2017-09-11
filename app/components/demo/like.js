import React  from 'react';

class Like extends React.Component{
    constructor() {
        super();
        this.state = {
            like: false
        }
    }
    handleClick() {
        this.setState({like:!this.state.like})
    }
    render() {
        var text = this.state.like ? 'like' : 'do not like'
        return(
            
            <p onClick = {this.handleClick}>You {text} this. Click to toggle.</p>
        )
    }
}
export default Like;
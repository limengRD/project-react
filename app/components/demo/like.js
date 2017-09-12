import React  from 'react';

class Like extends React.Component{
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }
    handleClick() {
        this.setState({isLiked:!this.state.isLiked})
    }
    render() {
        var text = this.state.isLiked ? 'like' : 'do not like'
        return(
            
            <p onClick = {this.handleClick.bind(this)}>You {text} this. Click to toggle.</p>
        )
    }
}
export default Like;
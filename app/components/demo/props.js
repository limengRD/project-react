import React from 'react';
class Props extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[2,34]
        }
    }
    render() {
        return (
            <div>{this.state.data}</div>
        );
    }
}
export default Props;
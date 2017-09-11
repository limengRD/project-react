import React from 'react';
class Childre extends React.Component {
    render() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children,function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
}
export default Childre;
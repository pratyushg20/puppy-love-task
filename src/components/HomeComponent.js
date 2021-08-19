import React,{ Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const username = this.props.name;
        const hearts = this.props.hearts_received;

        return(
            <div>Home Page</div>
        );
    }
}

export default Home;
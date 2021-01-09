import React from 'react';

class FetchApi extends React.Component{
    state={
        users: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(result => 
            this.setState({
                users: result
        }))
    }
    

    render(){
        return(
            <div>
                {JSON.stringify(this.state.users)}
            </div>
        )
    }
}

export default FetchApi
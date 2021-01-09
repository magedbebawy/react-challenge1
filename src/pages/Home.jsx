import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div style={style}>
            <Link to='/counter'>Counter App</Link>
            <Link to='/fetchapi'>Fetch API</Link>
            <Link to='/challenge1'>Challenge 1</Link>
            <Link to='/challenge2'>Challenge 2</Link>
            <Link to='/challenge3'>Challenge 3</Link>
        </div>

    )
}
const style = {
    display: 'flex',
    flexDirection: 'column'
}

export default Home
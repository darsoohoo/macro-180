import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Form from './Form';

import { makeStyles } from '@material-ui/core/styles';


const Landing = () => {
    return (
        <Fragment>
            <Navbar />
            <Form />
        </Fragment>
    );
}

export default Landing;

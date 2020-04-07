import React, { Fragment } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import { makeStyles } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';
import Divider from '@material-ui/core/Divider';
import Meals from './Meals';

const useStyles = makeStyles((theme) => ({
    divider: {
      margin: theme.spacing(7),
    }
}));
    

const App = () => {
    const classes = useStyles();
    return (
        <Provider store={store}>
            <div className="App">
                <Navbar />
                <Form />
                <Divider className={classes.divider} variant="middle" />
                <Meals />
            </div>
        </Provider>
    );
}

export default App;

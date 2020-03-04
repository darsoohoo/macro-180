import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
      borderColor: 'green'
    },
  },
  form: {
      marginTop: '40px'
  },
  submitButton: {
    marginLeft: "auto",
    marginRight: theme.spacing(2),
    border: 'solid black'
  }
}));

const FormFields = () => {

  const [values, setValues] = useState({
    name: "",
    date: "",
    protein: "",
    carbohydrate: "",
    fat: "",
    calories: "",
    formData: ""
  })

  const {
    name,
    date,
    protein,
    carbohydrate,
    fat,
    calories,
    formData
  } = values;

  const init = () => {
    setValues({
      ...values,
      formData: new FormData()
    })
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = name => event => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
};


  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
        fetch(`/api/meals/`, {
          method: "POST",
          headers: {
              Accept: "application/json"
          },
          body: formData
        })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });

        setValues({
          ...values,
          name: "",
          date: "",
          protein: "",
          carbohydrate: "",
          fat: "",
          calories: "",
          formData: ""
        });
  };


  const classes = useStyles();
  const timeConverter = () => {
    const date = new Date();
    const month = date.getUTCMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedTime = month + 1 + '/' + day + '/' + year;
    return formattedTime;
  }

  return (
    <form onSubmit={clickSubmit} className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <TextField 
            id="standard-error" 
            label="Name" 
            defaultValue=" " 
            variant="outlined"
            color="secondary"
            
            name='name'
            value={name}
            onChange={handleChange("name")}
        />
        <TextField
          disabled
          label="Date"
          variant="outlined"
          name='date'
          value={timeConverter()}
          onChange={handleChange("date")}
        />
      </div>
      <div>
        <TextField
          id="outlined-error-helper-text"
          label="Protein"
          variant="outlined"
          name='protein'
          value={protein}
          onChange={handleChange("protein")}
        />
        <TextField
          id="filled-error-helper-text"
          label="Carbohydrate"
          variant="outlined"
          name='carbohydrate'
          value={carbohydrate}
          onChange={handleChange("carbohydrate")}
        />
      </div>
      <div>
        <TextField
          id="outlined-error"
          label="Fat"
          variant="outlined"
          name='fat'
          value={fat}
          onChange={handleChange("fat")}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Calories"
          variant="outlined"
          name='calories'
          value={calories}
          onChange={handleChange("calories")}
        />
      </div>
      <CardActions>
         <Button className={classes.submitButton} size="small" type="submit">Submit</Button>
      </CardActions>
    </form>
  );
}

export default FormFields;
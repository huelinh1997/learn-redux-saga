import React from 'react';
import {FormControl, InputLabel, Select, FormHelperText } from '@material-ui/core'
import {withStyles} from '@material-ui/styles'
import styles from './style'

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const SelectStatus = ({
  classes,
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: 'color-native-simple'
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)

export default withStyles(styles)(SelectStatus);

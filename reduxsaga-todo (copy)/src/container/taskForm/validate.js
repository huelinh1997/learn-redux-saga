const validate = (value)=> {
  const err = {}
  const {title} = value;
  if(!title) {
    err.title = "Please enter title!"
  } else if (title.trim() && title.length < 5) {
    err.title = "Title must be 5 characters or more!"
  }
  return err
}

export default validate

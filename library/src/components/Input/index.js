import React from "react";
import Button from "../Button"
import "./style.css"
// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <div className="jumbotron text-left">
      <h1>Book Search</h1>
      <h2>Book</h2>
      <div className="input-group mb-3">
 <input className="form-control" type="text" {...props} />
  <div className="input-group-append">
  <Button
            onClick={props.onClick}
            type="success"
            className="input-lg btn-lg ml-2"
          >
            Search
          </Button>  </div>
</div>

    
    </div>
    
  );
}

export default Input;

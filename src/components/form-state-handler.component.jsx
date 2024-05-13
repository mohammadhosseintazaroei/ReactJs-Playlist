import { useState } from "react";
import "./form-state-handler.styles.css";

function FormStateHandler() {
  const [formState, setFormState] = useState();
  const onChangeInput = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const onButtonClick = () => {
    console.log(formState);
  };
  return (
    <>
      <div className="container">
        <input name="firstname" className="input" onChange={onChangeInput} />
        <input name="lastname" className="input" onChange={onChangeInput} />
        <input name="email" className="input" onChange={onChangeInput} />
        <button type="submit" className="button" onClick={onButtonClick}>
          submit
        </button>
      </div>
    </>
  );
}

export default FormStateHandler;

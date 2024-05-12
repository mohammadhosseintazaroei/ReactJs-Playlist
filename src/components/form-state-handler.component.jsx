import { useState } from "react";
import "./form-state-handler.styles.css";

function FormStateHandler() {
  const [formData, setFormData] = useState();
  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleButtonClick = () => {
    console.log(formData);
  };
  return (
    <div className="container" >
      <input name="firstName" className="input" onChange={handleChangeInput} />
      <input name="lastname" className="input" onChange={handleChangeInput} />
      <input
        name="email"
        type="email"
        className="input"
        onChange={handleChangeInput}
      />
      <button onClick={handleButtonClick} className="button">
        submit
      </button>
    </div>
  );
}

export default FormStateHandler;

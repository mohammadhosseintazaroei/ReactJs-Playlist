import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState();
  const handleChangeInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleButtonClick = () => {
    console.log(formData);
  };
  return (
    <div className="App" style={{ padding: 100 }}>
      <input
        name="firstName"
        style={{ display: "block", marginBottom: 2 }}
        onChange={handleChangeInput}
      />
      <input
        name="lastname"
        style={{ display: "block", marginBottom: 2 }}
        onChange={handleChangeInput}
      />
      <input
        name="phonenumber"
        onChange={handleChangeInput}
        style={{ display: "block", marginBottom: 2 }}
      />
      <button onClick={handleButtonClick}>submit</button>
    </div>
  );
}

export default App;

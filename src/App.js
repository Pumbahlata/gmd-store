import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import FormInput from "./components/FormInput";
import "react-toastify/dist/ReactToastify.css";

const messageSuccess = () => {
  toast.success("Se envio el texto con éxito!", {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

const messageError = () => {
  toast.error("Error al enviar el mensaje", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};

const App = () => {
  const [values, setValues] = useState({
    fullName: "",
    sendText: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      label: "Nombre completo",
      placeholder: "Ingrese nombre completo",
      // errorMessage: "Aca establecer un mensaje para el campo",
      required: true,
    },
    {
      id: 2,
      name: "sendText",
      label: "Texto a enviar",
      placeholder: "Ingrese el mensaje de texto a enviar",
      // errorMessage: "Aca establecer un mensaje para el campo",
      required: true,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault(); //  prevent page refresh
    messageSuccess();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log("Values:", values);

  return (
    <div className="app">
      <form className="form" onSubmit={handleSubmit}>
        <header>{/* <h1>Formulario</h1> */}</header>
        <div className="div-flex">
          {/* <FormInput /> */}
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button type="submit">Enviar</button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default App;

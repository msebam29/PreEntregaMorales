import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Boton from "../Boton";

const LoginScreen = () => {
  const { login, register, googleLogin } = useContext(UserContext)

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(values)
  }

  return (
    <div className="container m-auto flex justify-center">
      <div className="p-8 rounded bg-white">
        <h2 className="text-2xl font-semibold w-80 text-center">Login</h2>
        <hr />

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <input
            className="border p-2"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="border p-2"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />

          <Boton type="submit">
            Ingresar
          </Boton>
        </form>

        <Boton onClick={() => register(values)} children="Registrar"/>
        
        <br />
        <Boton onClick={googleLogin} children="Iniciar sesión con Google"/>
      </div>
    </div>
  )
}

export default LoginScreen;
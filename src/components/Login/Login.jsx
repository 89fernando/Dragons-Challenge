import { Fragment, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"

const Login = () => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { doLogin } = useContext(AuthContext)

  const navigate = useNavigate()

  function validateUser() {
    if (userName === "Admin" && password === "admin") {
        doLogin()
    } else{
        window.alert("Usuário e/ou senha inválidos")
    }
    navigate('/dragons')
  }

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-info">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, esse? </p>
          </div>
          <div className="login-form">
            <h1>Login</h1>
            <p>Nome:</p>
            <input type="text"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <p>Senha:</p>
            <input type="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button
                onClick={() => {
                    validateUser();
                }}
            >Entrar</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login;
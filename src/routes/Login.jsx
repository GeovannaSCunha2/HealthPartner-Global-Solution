import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/formulario.scss'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:5000/users?username=${username}&password=${password}`);
    const users = await response.json();

    if (users.length > 0) {
      alert('Login bem-sucedido!');
      navigate('/Home');
    } else {
      alert('Nome de usuário ou senha incorretos.');
    }
  };

  const handleRegister = () => {
    navigate('/Cadastro');
  };

  return (
    <>
        <div className="textLogin"> 
          <h1>Acesse a nossa plataforma</h1>
          <p>E tenha controle da sua saúde!</p>
        </div>

        <form className="bg-body-tertiary" id='form' onSubmit={handleSubmit}>
        <label>
            Nome de usuário:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Entrar</button>
        <button type="button" onClick={handleRegister}>Não tem login? Cadastre-se!</button>
        </form>
    </>
  );
}

export default Login;
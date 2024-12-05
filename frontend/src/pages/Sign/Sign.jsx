import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import bg from "assets/images/background.jpg";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate(); // Instanciar o useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não coincidem.");
      setSuccessMessage("");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:5000/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Conta criada com sucesso!");
        setErrorMessage("");
        // Redirecionar para a tela de login após um pequeno delay
        setTimeout(() => {
          navigate("/login"); // Substitua "/login" pela rota correta
        }, 2000);
      } else {
        setErrorMessage(data.error || "Erro ao criar conta.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Erro ao conectar com o servidor.");
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = "Login • Carlos Carvalho • Freelance Designer & Developer";
  }, []);  

  return (
    <section
      className="flex min-h-screen items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex w-1/3 flex-col gap-8 text-white mt-10 md:mt-20 bg-gray-900 bg-opacity-75 p-10 rounded-lg shadow-lg">
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          <header className="mb-4 text-3xl font-bold text-center">
            Criar Conta
          </header>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Nome Completo:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full p-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              E-mail:
            </label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@gmail.com"
              className="w-full p-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Senha:
            </label>
            <input
              id="password"
              type="password"
              placeholder="Sua senha"
              className="w-full p-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium"
            >
              Confirmar Senha:
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              className="w-full p-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 text-lg font-semibold text-white bg-green rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Criando Conta..." : "Criar Conta"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
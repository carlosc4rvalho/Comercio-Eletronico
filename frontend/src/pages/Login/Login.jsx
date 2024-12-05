import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "assets/images/background.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Todos os campos devem ser preenchidos.");
      setSuccessMessage("");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(data.message || "Login bem-sucedido!");
        setErrorMessage("");

        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else {
        setErrorMessage(data.error || "Erro ao fazer login.");
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
            Login
          </header>

          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              E-mail:
            </label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@gmail.com"
              className="w-full p-4 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="E-mail"
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
              aria-label="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-4 text-lg font-semibold text-white bg-green rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
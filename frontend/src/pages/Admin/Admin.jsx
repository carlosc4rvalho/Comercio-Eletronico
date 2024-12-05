import React, { useState, useEffect } from "react";
import bg from "assets/images/background.jpg";

function Admin() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/messages");
        const data = await response.json();

        if (response.ok) {
          setMessages(data);
        } else {
          setError("Erro ao carregar mensagens.");
        }
      } catch (error) {
        setError("Erro ao conectar ao servidor.");
      }
    };

    fetchMessages();
  }, []);

  useEffect(() => {
    document.title = "Admin • Carlos Carvalho • Freelance Designer & Developer";
  }, []);  

  return (
    <main
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen"
    >
      <div className="flex flex-col items-center py-10">
        <header className="text-center text-3xl font-bold my-6 text-white">
          Painel de Administração
        </header>

        {error && (
          <p className="text-red-500 text-center font-semibold">{error}</p>
        )}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12">
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg text-white"
              >
                <h3 className="text-lg font-bold mb-2">{message.fullName}</h3>
                <p className="text-sm mb-2">
                  <strong>Email:</strong> {message.email}
                </p>
                <p className="text-sm mb-2">
                  <strong>Telefone:</strong> {message.phone}
                </p>
                <p className="text-sm mb-4">
                  <strong>Mensagem:</strong> {message.message}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-white">
              {error
                ? "Erro ao carregar mensagens."
                : "Nenhuma mensagem encontrada."}
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Admin;
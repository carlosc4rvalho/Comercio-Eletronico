import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitButtonText, setSubmitButtonText] = useState('ENVIAR');
  const [feedback, setFeedback] = useState({ error: null, success: null });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).some((field) => !field)) {
      setFeedback({ error: 'Por favor, preencha todos os campos.', success: null });
      return;
    }

    setFeedback({ error: null, success: null });
    setSubmitButtonText('ENVIANDO...');

    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const firstName = formData.fullName.split(' ')[0];
        setFeedback({ success: `Formulário enviado com sucesso, ${firstName}!`, error: null });
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        setFeedback({ error: errorData.error || 'Erro ao enviar o formulário.', success: null });
      }
    } catch (error) {
      setFeedback({ error: 'Erro ao conectar com o servidor.', success: null });
    } finally {
      setSubmitButtonText('ENVIAR');
    }
  };

  return (
    <section className="flex justify-center bg-purple bg-opacity-0">
      <form
        className="m-8 flex w-full flex-col gap-4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <header>
          <h2 className="text-3xl uppercase font-semibold text-white md:text-5xl">
            Entre em Contato
          </h2>
        </header>

        {['fullName', 'email', 'phone', 'message'].map((field, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <label
              className="text-lg md:text-xl text-white"
              htmlFor={field}
            >
              {field === 'fullName'
                ? 'Nome Completo'
                : field === 'email'
                ? 'Email Corporativo'
                : field === 'phone'
                ? 'Telefone'
                : 'Mensagem'}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                placeholder={`Digite sua ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full rounded-3xl p-6 text-lg md:text-xl text-purple border-2 focus:border-green"
              />
            ) : (
              <input
                id={field}
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                placeholder={`Digite seu ${field === 'fullName' ? 'nome completo' : field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full rounded-3xl p-6 text-lg md:text-xl text-purple border-2 focus:border-green"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="rounded-3xl bg-green p-5 text-2xl font-medium text-purple hover:opacity-75"
        >
          {submitButtonText}
        </button>

        {feedback.error && <span className="text-red-600">{feedback.error}</span>}
        {feedback.success && <span className="text-green-600">{feedback.success}</span>}
      </form>
    </section>
  );
}

export default ContactForm;
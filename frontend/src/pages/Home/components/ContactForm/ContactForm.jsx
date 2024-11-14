import React, { useState, useRef } from 'react';
import SuccessModal from '../SuccessModal';

function ContactForm() {
  const [submitButtonText, setSubmitButtonText] = useState('ENVIAR');
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const section1FirstInput = useRef(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['fullName', 'email', 'phone', 'message'];
    const isValid = requiredFields.every(field => formData[field]);

    if (!isValid) {
      setFormError('Por favor, preencha todos os campos.');
      return;
    }

    // Simulação de sucesso sem enviar os dados para um servidor
    setFormSuccess(true);

    const firstName = formData.fullName.split(' ')[0];
    setFormSuccessMessage(`Formulário enviado com sucesso, ${firstName}!`);

    // Limpeza do formulário após 3 segundos
    setTimeout(() => {
      setFormSuccess(false);
      setFormSuccessMessage('');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 3000);
  };

  const handleCloseModal = () => {
    setFormSuccess(false);
  };

  return (
    <section id='contato' className='flex justify-center bg-purple bg-opacity-0'>
      <form
        id='Contato Formulário'
        name='Contato Formulário'
        className='m-8 flex w-full flex-col gap-4 md:w-1/2'
        onSubmit={handleSubmit}
      >
        <header>
          <h2 className='text-3xl uppercase font-semibold text-white md:text-5xl'>Entre em Contato</h2>
        </header>

        <InputField
          ref={section1FirstInput}
          id='fullName'
          label='Nome Completo'
          type='text'
          placeholder='Digite seu nome completo'
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <InputField
          id='email'
          label='Email Corporativo'
          type='email'
          placeholder='Digite seu email corporativo'
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          id='phone'
          label='Telefone'
          type='tel'
          placeholder='Digite seu telefone'
          value={formData.phone}
          onChange={handleInputChange}
        />
        <div className='flex flex-col gap-2'>
          <label className='text-xl text-white' htmlFor='message'>
            Mensagem:
          </label>
          <textarea
            className='w-full rounded-3xl p-6 text-lg md:text-xl text-purple border-2 focus:border-green'
            id='message'
            placeholder='Digite sua mensagem'
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button
          type='submit'
          className='rounded-3xl bg-green p-5 text-2xl font-medium text-purple hover:opacity-75'
        >
          {submitButtonText}
        </button>

        {formError && <span className='text-red-600'>{formError}</span>}
      </form>

      <SuccessModal
        isOpen={formSuccess}
        message={formSuccessMessage}
        onClose={handleCloseModal}
      />
    </section>
  );
}

const InputField = React.forwardRef(({ id, label, type, placeholder, value, onChange }, ref) => (
  <div className='flex flex-col gap-2'>
    <label className='text-lg md:text-xl text-white' htmlFor={id}>
      {label}:
    </label>
    <input
      ref={ref}
      className='w-full rounded-3xl p-6 text-lg md:text-xl text-purple border-2 focus:border-green'
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
));

export default ContactForm;
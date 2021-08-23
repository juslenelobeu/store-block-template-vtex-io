import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

interface LeadsupmedalProps { }

const CSS_HANDLES = ['container', 'form', 'formGroup', 'textHighlight', 'input', 'btnSubmit']

const Leadsupmedal: StorefrontFunctionComponent<LeadsupmedalProps> = ({ }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let createLead: any = {}

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    createLead = {
      nameLead: name,
      emailLead: email,
      phoneLead: phone,
    }

    localStorage.setItem("lead", JSON.stringify(createLead));

    setName('');
    setEmail('');
    setPhone('');
  }

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <>
      <div className={`${handles.container}`}>
        <h2>Quer receber ofertar imperdíveis e exclusivas?</h2>
        <h3>Faça seu cadastro e receba <span className={`${handles.textHighlight}`}>15% de desconto</span> em sua primeira compra.</h3>
        <form onSubmit={submitForm} className={`${handles.form}`}>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">Nome Completo</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Informe seu nome"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Informe seu email"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">Telefone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Informe seu telefone"
              className={`${handles.input}`}
              required
            />
          </div>
          <button type="submit" className={`${handles.btnSubmit}`}>Cadastrar</button>
        </form>
      </div>
    </>
  )
}

Leadsupmedal.schema = {
  title: 'editor.leadsupmedal.title',
  description: 'editor.leadsupmedal.description',
  type: 'object',
  properties: {},
}

export default Leadsupmedal

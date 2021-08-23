import React, { useState } from 'react'
import Amplify from "aws-amplify";
import { API } from "aws-amplify";

import awsExports from "./react/aws-exports";
Amplify.configure(awsExports);

import { useCssHandles } from 'vtex.css-handles'

interface LeadsupmedalProps { }

const CSS_HANDLES = ['container', 'form', 'formGroup', 'textHighlight', 'input', 'btnSubmit']

const Leadsupmedal: StorefrontFunctionComponent<LeadsupmedalProps> = ({ }) => {

  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  let createLead: any = {}

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    const data = {
      body: {
        name: nameValue,
        email: emailValue,
        phone: phoneValue,
      }
    }

    console.log(data)
    const apiData = await API.post('formapi', '/lead', data)
    console.log(apiData)

    createLead = {
      name: nameValue,
      email: emailValue,
      phone: phoneValue,
    }

    localStorage.setItem("lead", JSON.stringify(createLead));

    alert('Cadastro realizado com sucesso!')

    setNameValue('');
    setEmailValue('');
    setPhoneValue('');
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
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              type="text"
              placeholder="Informe seu nome"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">E-mail</label>
            <input
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              type="email"
              placeholder="Informe seu email"
              className={`${handles.input}`}
              required
            />
          </div>
          <div className={`${handles.formGroup}`}>
            <label htmlFor="" className="f6 b db mb2">Telefone</label>
            <input
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
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

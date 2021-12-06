import React, { useContext } from "react";

import { AuthContext } from "../../context";

export default function Form() {
  const data = useContext(AuthContext);
  const { setContact } = data;

  return (
    <section class='section-main'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "5rem",
        }}
      >
        <button
          onClick={() => setContact(false)}
          type='button'
          class='btn btn-danger'
        >
          voltar
        </button>
      </div>
      <form
        action='https://formsubmit.co/nfescame@gmail.com'
        method='POST'
        class='container'
        style={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        {/* <input
          type='hidden'
          name='_next'
          value='https://nfescame.github.io/Simple-form-send/successfullySent.html'
        /> */}
        <input
          type='hidden'
          name='_autoresponse'
          value='Recebi a sua mensagem, obrigado pelo contato e logo responderei.'
        />

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Nome
          </label>
          <input
            className='form-control'
            type='text'
            name='name'
            placeholder='João'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Email
          </label>
          <input
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='name@example.com'
            type='email'
            name='email'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            Mensagen
          </label>
          <textarea
            className='form-control'
            rows='3'
            name='message'
            cols='30'
          ></textarea>
        </div>

        <button type='submit' class='btn btn-primary'>
          Enviar
        </button>
      </form>
    </section>
  );
}

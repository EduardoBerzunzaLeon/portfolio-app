'use client';

import {
  FocusEvent, ReactNode, createElement, useState,
} from 'react';
import './contact.scss';

export const Contact = () => {
  const [ text, setText ] = useState<string | ReactNode[]>('Nombre completo');

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const label = e.target.nextSibling;
    const labelText = label?.textContent;

    if (label?.nodeName !== 'LABEL' || !labelText) return;

    const letters = Array.from(labelText);

    // eslint-disable-next-line react/no-array-index-key
    setText(letters.map((letter, index) => (createElement('span', {
      className: 'spancito',
      key: `letter${index * 2}`,
      style: { animationDelay: `${50 * (index)}ms` },
    }, letter))));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== '') return;

    const a = e.target.value;
  };

  return (
    <section className="section-contact row row--center">
      <div className="contact col-12">
        <div className="contact__form">
          <form action="#" className="form">
            <h2 className="bg-grad--primary text--center">Contactame</h2>

            <div className="form-group">
              <input
                type="text"
                id="name"
                className="form__input"
                required
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label htmlFor="name" className="form__label">{text}</label>
            </div>

            <div className="form-group">
              <input type="email" id="email" className="form__input" required />
              <label htmlFor="Email" className="form__label">Correo Electrónico</label>
            </div>

            <div className="form-group">
              <textarea id="msj" className="form__input" required />
              <label htmlFor="msj" className="form__label">Mensaje</label>
            </div>

            <button className="btn btn--m btn-primary" type="submit">
              Contact me
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;

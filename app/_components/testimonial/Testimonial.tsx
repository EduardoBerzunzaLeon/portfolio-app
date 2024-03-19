'use client';

import { useState } from 'react';

/* eslint-disable jsx-a11y/control-has-associated-label */
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { FaRegDotCircle, FaRegCircle } from 'react-icons/fa';

import { CardTestimonial } from '../cardTestimonial/CardTestimonial';

import './testimonial.scss';

// https://picsum.photos/id/1011/250/250

// Developer UX / UI
const com = `
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
Lorem ipsum dolor sit amet consectetur adipisicing elit.
`;

const url = 'https://picsum.photos/id/1011/250/250';
const description = 'Developer UX / UI';

const TESTIMONIALS = [
  {
    name: 'eduardo',
    comment: com,
    imgUrl: url,
    nameDescription: description,
  },
  {
    name: 'fatima',
    comment: com,
    imgUrl: url,
    nameDescription: description,
  },
  {
    name: 'fernando',
    comment: com,
    imgUrl: url,
    nameDescription: description,
  },
  {
    name: 'chupi chupi',
    comment: com,
    imgUrl: url,
    nameDescription: description,
  },
  {
    name: 'rosita',
    comment: com,
    imgUrl: url,
    nameDescription: description,
  },
];

export const Testimonial = () => {
  const [ indexSelected, setIndexSelected ] = useState<number>(0);

  const showNewTestimonial = () => {
    setIndexSelected((index) => {
      if (index === TESTIMONIALS.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevTestimonial = () => {
    setIndexSelected((index) => {
      if (index === 0) return TESTIMONIALS.length - 1;
      return index - 1;
    });
  };

  return (
    <section className="testimonial row row--center">
      <h2 className="col-12">Testimonios</h2>
      <div className="testimonial__container col-12">

        <div className="testimonial__content">

          <button onClick={showPrevTestimonial} type="button" className="testimonial__side-control testimonial__side-control--prev">
            <TiArrowLeftThick />
          </button>

          <div className="testimonial__content-visible">

            <div className="testimonial__content-cards" style={{ translate: `${-100 * indexSelected}%` }}>
              {
                TESTIMONIALS.map((testimonial) => (
                  <CardTestimonial
                    {...testimonial}
                    key={testimonial.name}
                  />
                ))
              }
            </div>
          </div>

          <button onClick={showNewTestimonial} type="button" className="testimonial__side-control testimonial__side-control--next">
            <TiArrowRightThick />
          </button>

        </div>

        <div className="testimonial__controls">

          {
            TESTIMONIALS.map(({ name }, index) => (
              <button
                type="button"
                className="testimonial__controls-option "
                onClick={() => setIndexSelected(index)}
                key={name}
              >
                {
                  (index === indexSelected)
                    ? (<FaRegDotCircle className="testimonial__controls-option--active" />)
                    : (<FaRegCircle />)
                }
              </button>

            ))
          }
        </div>

      </div>
    </section>
  );
};

export default Testimonial;

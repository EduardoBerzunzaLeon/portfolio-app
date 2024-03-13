import { FaQuoteRight } from 'react-icons/fa';
import './card-testimonial.scss';

export const CardTestimonial = () => (
  <div className="card-testimonial col-4">
    <div className="content">
      <div className="text">
        <FaQuoteRight className="icon icon--right" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <FaQuoteRight className="icon icon--left" />
      </div>
      <figure>
        <img src="https://picsum.photos/id/1011/250/250" alt="testing" />
        <figcaption>
          <h3>Eduardo berzunza</h3>
          <span>Developer UX / UI</span>
        </figcaption>
      </figure>
    </div>

  </div>
);

export default CardTestimonial;

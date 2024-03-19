import { FaQuoteRight } from 'react-icons/fa';
import './card-testimonial.scss';

interface Props {
  name: string;
  comment: string;
  imgUrl: string;
  nameDescription: string;
}

export const CardTestimonial = ({
  name, comment, imgUrl, nameDescription,
}: Props) => (
  <div className="card-testimonial">
    <div className="content">
      <div className="text">
        <FaQuoteRight className="icon icon--right" />
        <p>{ comment }</p>
        <FaQuoteRight className="icon icon--left" />
      </div>
      <figure>
        <img src={imgUrl} alt="testing" />
        <figcaption>
          <h3>{ name }</h3>
          <span>{ nameDescription }</span>
        </figcaption>
      </figure>
    </div>

  </div>
);

export default CardTestimonial;

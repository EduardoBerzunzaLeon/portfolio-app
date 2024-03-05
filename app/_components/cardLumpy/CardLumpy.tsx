/* eslint-disable jsx-a11y/control-has-associated-label */
import './card-lumpy.scss';

export const CardLumpy = () => (
  <>
    <svg className="goo-filter" viewBox="0 0 1 1">
      <filter id="lumpy">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -20" result="goo" />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>

    <div className="card-lumpy">
      {/* <input type="checkbox" id="toggle" name="toggle" className="toggle" /> */}
      <div className="card-lumpy__container-button">
        <button type="button" className="card-lumpy__button" />
      </div>
      <div className="card-lumpy__content">
        <div className="card-lumpy__content-text">
          <h2>HEAD</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Doloribus libero nostrum
            nobis rem odit accusantium
          </p>
        </div>
        <div className="card-lumpy__bg-content">
          <div className="drip drip--top" />
          <div className="drip drip--top" />
          <div className="drip drip--top" />
        </div>
      </div>

      <div className="card-lumpy__description">
        <div className="card-lumpy__description-content">
          <h2>down side</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="card-lumpy__bg-description">
          <div className="drip drip--bottom" />
          <div className="drip drip--bottom" />
          <div className="drip drip--bottom" />
        </div>
      </div>

    </div>
  </>
);

export default CardLumpy;

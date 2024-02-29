'use client';

import { MouseEvent, useRef } from 'react';

import './about.scss';

export const About = () => {
  // const [ coords, setCoords ] = useState<Coords>({ x: 0, y: 0 });

  const elementRef = useRef(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();

      // currentTarget: element,
      // clientX,
      const {
        clientY,
      } = event;
      const { top, height } = rect;
      const middleY = (height / 2);
      const center = top + middleY;

      const positionY = clientY > center ? clientY - center : center - clientY;
      const offsetY = (positionY / middleY) * 15;

      console.log({
        positionY, top, height, clientY, offsetY, center, middleY,
      });

      // You can now use rect to position other elements or for any other purpose
    }

    const {
      currentTarget: element,
      clientX,
      clientY,
    } = event;

    // console.log(event);
    const positionX = clientX - element.offsetLeft;
    const positionY = clientY - element.offsetTop;

    // console.log({ clientY, element: element.offsetTop });

    const middleX = element.offsetWidth / 2;
    const middleY = element.offsetHeight / 2;

    const offsetX = ((positionX - middleX) / middleX) * 15;
    const offsetY = ((positionY - middleY) / middleY) * 15;
    const delay = '0s';

    // console.log({ positionY, offsetY, middleY, elementY:  });

    element.style.setProperty('--rotateX', `${offsetX}deg`);
    element.style.setProperty('--rotateY', `${-1 * offsetY}deg`);
    element.style.setProperty('--delay', delay);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLElement>) => {
    const { currentTarget: element } = event;
    element.style.setProperty('--rotateX', '0deg');
    element.style.setProperty('--rotateY', '0deg');
    element.style.setProperty('--delay', '.5s');
  };

  return (
    <section className="about">
      <div className="row">
        <div className="about__content col-6">
          <h2>Sobre mi</h2>
          <div className="about__content-text">
            {/* eslint-disable-next-line max-len */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, alias reprehenderit, sint rerum eos magni quas, quidem nemo fuga autem assumenda aliquam dicta tenetur voluptate nulla beatae blanditiis debitis excepturi?</p>
          </div>
        </div>
        <div
          className="about__image col-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={elementRef}
        >
          {/* <img src="./profile.jpg" alt="profile" /> */}
          {/* <img src="https://picsum.photos/id/1011/250/250" alt="test" /> */}
        </div>

      </div>

    </section>
  );
};

export default About;

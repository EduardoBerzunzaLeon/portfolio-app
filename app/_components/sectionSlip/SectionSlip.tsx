'use client';

// document.addEventListener('DOMContentLoaded', function() {
//   var parent = document.querySelector('.splitview'),
//       topPanel = parent.querySelector('.top'),
//       handle = parent.querySelector('.handle'),
//       skewHack = 0,
//       delta = 0;

//   // If the parent has .skewed class, set the skewHack var.
//   if (parent.className.indexOf('skewed') != -1) {
//       skewHack = 1000;
//   }

//   parent.addEventListener('mousemove', function(event) {
//       // Get the delta between the mouse position and center point.
//       delta = (event.clientX - window.innerWidth / 2) * 0.5;

//       console.log({delta, x: event.clientX, size: window.innerWidth});

//       // Move the handle.
//       handle.style.left = event.clientX + delta + 'px';

//       // Adjust the top panel width.
//       topPanel.style.width = event.clientX + skewHack + delta + 'px';
//   });
// });
import { MouseEvent, useRef } from 'react';
import './section-slip.scss';

export const SectionSlip = () => {
  const topPanel = useRef<HTMLDivElement | null>(null);
  const handle = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const { clientX } = event;
    console.log(clientX);
    const skewHack = 1000;
    const delta = (clientX - window.innerWidth / 2) * 0.5;

    handle.current!.style.left = `${event.clientX + delta}px`;
    topPanel.current!.style.width = `${event.clientX + skewHack + delta}px`;
  };

  return (
    <section className="splitview skewed">
      <div className="panel bottom" onMouseMove={handleMouseMove}>
        <div className="content">
          <div className="description">
            <h1>The original image.</h1>
            <p>This is how the image looks like before applying a duotone effect.</p>
          </div>

          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg" alt="Original" />
        </div>
      </div>

      <div className="panel top" ref={topPanel}>
        <div className="content">
          <div className="description">
            <h1>The duotone image.</h1>
            <p>This is how the image looks like after applying a duotone effect.</p>
          </div>

          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/duotone-image.jpg" alt="Duotone" />
        </div>
      </div>

      <div className="handle" ref={handle} />
    </section>
  );
};

export default SectionSlip;

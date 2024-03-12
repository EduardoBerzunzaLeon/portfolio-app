'use client';

import { MouseEvent, useRef } from 'react';
import './section-slip.scss';

export const SectionSlip = () => {
  const topPanel = useRef<HTMLDivElement | null>(null);
  const handle = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!handle.current || !topPanel.current) return;

    const { clientX } = event;
    const skewHack = 1000;
    const delta = (clientX - window.innerWidth / 2) * 0.4;

    const handleLeft = `${event.clientX + delta}px`;
    const panelTopWith = `${event.clientX + skewHack + delta}px`;

    handle.current.style.left = handleLeft;
    topPanel.current.style.width = panelTopWith;
    // handle.current!.style.left = `${event.clientX + delta}px`;
  };

  return (
    <section>
      <div className="splitview skewed" onMouseMove={handleMouseMove}>
        <div className="panel bottom">
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
      </div>
    </section>
  );
};

export default SectionSlip;

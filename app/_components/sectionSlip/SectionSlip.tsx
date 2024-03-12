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
  };

  return (
    <section>
      <div className="split-view" onMouseMove={handleMouseMove}>
        <div className="split-view__panel split-view__panel--bottom">
          <div className="split-view__panel-content">
            <div className="split-view__panel-description split-view__panel-description--right">
              <h2 className="text-grad--primary">Convertir tus sueños</h2>
              <p>Todo lo que has soñado una vez, lo plasmamos en una aplicación web</p>
            </div>

            <figure>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg"
                alt="Original"
              />
              <figcaption>Reinventa Reevoluciona Descubre</figcaption>
            </figure>
          </div>
        </div>

        <div className="split-view__panel split-view__panel--top" ref={topPanel}>
          <div className="split-view__panel-content split-view__panel-content--skew">
            <div className="split-view__panel-description split-view__panel-description--left">
              <h2 className="text-grad--secondary">The duotone image.</h2>
              <p>Todo lo que has soñado una vez, lo plasmamos en una aplicación web</p>
            </div>

            <figure className="split-view__panel__image--top">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/original-image.jpg"
                alt="Duotone"
              />
              <figcaption>Reinventa Reevoluciona Descubre</figcaption>
            </figure>
          </div>
        </div>

        <div className="split-view__handle" ref={handle} />
      </div>
    </section>
  );
};

export default SectionSlip;

import Image from 'next/image';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

import { FloatingBox } from '../floating-box/FloatingBox';
import { Wave } from '../wave/Wave';

import profilePic from './profile.jpg';
import './header.scss';

export const Header = () => (
  <header className="header">

    <FloatingBox />
    <div className="header__text-box">
      <h1 className="test">Hi, I&apos;m Eduardo berzunza</h1>
      <h2>Developer, Full Stack, Web designer</h2>
      <button className="btn btn--l" type="button">Contact me</button>
    </div>

    <figure className="header__profile">
      <Image
        priority
        src={profilePic}
        alt="profile"
      />
      <figcaption className="header__caption">
        <AiOutlineGithub />
        <AiOutlineFacebook />
        <AiOutlineInstagram />
      </figcaption>
    </figure>

    <Wave />

  </header>
);

export default Header;

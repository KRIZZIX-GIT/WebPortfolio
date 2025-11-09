import styles from './Main.module.css';
import React, { useState } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { MdLanguage } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaJsSquare } from "react-icons/fa";
import TypingEffect from '../../components/TextTyping/TypingEffect';

const Main = () => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('EN')

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'EN' ? 'RU' : 'EN'));
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={styles[`${theme === 'light' ? 'container-light' : 'container-dark'}`]}>
      <div className={styles['contact-info-cont']}>
        <div className={styles['left']}>
          <TypingEffect text="- KRIZZIX's Web Portfolio." speed={110} />
        </div>

        <div className={styles['right']}>
          <div className={styles['linklogo']}>
            <a href="https://github.com/KRIZZIX-GIT">
              <FaGithub color='white' size={35} />
            </a>
          </div>

          <div className={styles['devider']}>contacts:</div>

          <div className={styles['linklogo']}>
            <a href="https://discord.com/users/891394523320705054">
              <FaDiscord color='white' size={35} />
            </a>
          </div>

          <div className={styles['linklogo']}>
            <a href="https://t.me/theKRIZZIX">
              <FaTelegram color='white' size={35} />
            </a>
          </div>

          <div className={styles['devider']}></div>

          <div className={styles['linklogo']} onClick={toggleTheme}>
            {theme === 'light' ? <CiDark color='white' size={35} /> : <CiLight color='white' size={35} />}
          </div>

          <div className={styles['linklogo']} onClick={toggleLang}>
            <MdLanguage color='white' size={35} />
			<span>{lang}</span>
          </div>
        </div>
      </div>


      <div className={styles['block-first']}>
      <div className={styles['main-info-block']}>
	  <p style={{ fontSize: '90px', fontWeight: 'bold' }}>Hi, I am KRIZZIX</p>
	  <p style={{ fontSize: '40px' }}>I am a full-stack react developer </p>
	  <p style={{ fontSize: '30px' }}>Roll down to see my knowlege and projects</p>
	  <div><FaReact size={60} /> <BiLogoTypescript size={60}/> <FaJsSquare size={60}/></div>
	  </div>
	  <div className={styles['ex-info-block']}>
		4 <div className={styles['ex-info-block-text']}><span>years</span> <span>of</span> <span>experience</span></div>
	  </div>
	  </div>


      <div className={styles['block-second']}></div>
      <div className={styles['block-last']}></div>
    </div>
  );
}

export default Main;
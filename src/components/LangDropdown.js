import React, { useState, useEffect } from "react";

const LangDropdown = ({ langueges, currentLang, setCurrentLang }) => {
  const [drop, toggleDrop] = useState(false);

  return (
    <>
      <li
        className="nav-item lang-dropdown"
        onClick={() => toggleDrop((d) => !d)}
      >
        <img className="lang-img" src={currentLang.img} />
        <span className="current-lang">{currentLang.lang}</span>
        <ul className={`${drop && "drop"}`}>
          {langueges.map((lang, index) => (
            <li
              onClick={() => {
                setCurrentLang({ img: lang.img, lang: lang.lang });
              }}
              key={index}
            >
              <a href="#">
                <img src={lang.img} />
                <span className="languege-name">{lang.lang}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default LangDropdown;

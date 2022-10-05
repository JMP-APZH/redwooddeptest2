import React from "react";

function TitleScreen(props) {
  return (
    <div id="title-overlay">
      <div id="title-screen-header">
        <div id="logo">Future and Past depending on climate change</div>
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Begin</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>
          <li>
            <span>
              <a href="https://github.com/nashkenazy/generic-vn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </span>
          </li>
          <li />
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;

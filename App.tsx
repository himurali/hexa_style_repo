import * as React from 'react';
import './style.css';
import './hexastyle.css';
import {
  HexGrid,
  Layout,
  Hexagon,
  Text,
  Pattern,
  Path,
  Hex,
} from 'react-hexgrid';

export default function App() {
  return (
    <div>
      <ul id="hexGrid">
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
       
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
       
        
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm3.staticflickr.com/2878/10944255073_973d2cd25c.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
        <li class="hex">
          <a class="hexIn" href="#">
            <img
              src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg"
              alt=""
            />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </li>
      </ul>
      <a
        id="fork"
        target="_blank"
        href="https://github.com/web-tiki/responsive-grid-of-hexagons"
      >
        Fork on GitHub
      </a>
    </div>
  );
}

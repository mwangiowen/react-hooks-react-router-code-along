import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./index.css"

function Home() {
  return (
    <div>
      <h1>Home!</h1>
      <img src="https://i.pinimg.com/564x/62/8a/f7/628af796c988132dc08f7dcea7f19466.jpg"></img>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
      <p>The tranquil beauty of a sun-kissed beach, with golden sands stretching as far as the eye can see, offers a serene escape from the hustle and bustle of everyday life. The gentle sound of waves lapping against the shore creates a soothing melody, while seagulls glide gracefully overhead. The ocean's vast expanse, with its shades of blue meeting the endless horizon, evokes a sense of awe and wonder. It's a place where time seems to stand still, allowing one to bask in the simplicity of nature's wonders and find inner peace.</p>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

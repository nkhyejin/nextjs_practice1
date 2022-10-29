import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx>
        {`
          a {
            color: blue;
          }
        `}
      </style>
    </div>
  );
}

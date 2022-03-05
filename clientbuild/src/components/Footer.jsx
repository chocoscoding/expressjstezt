import home from "../styles/home.module.css";
const Footer = () => {
  return (
    <div className={home.footerbody}>
      Coded and maintained with ❤️ by{" "}
      <a href="https://github.com/chocoscoding">Chocoscoding</a> © 2021 <br /><br />{" "}
      Special thanks to <a href="https://github.com/typicode">Typicode</a> for
      the inspiration🙇‍♂️🙇‍♀️
    </div>
  );
};

export default Footer;

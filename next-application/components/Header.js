import HeaderStyles from "../styles/Header.module.css"

const Header = () => {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span>My code news</span>
      </h1>
      <p className={HeaderStyles.description}>hello welcome to my site let learn together</p>
    </div>
  );
};
{ 
  /* 
    we can add style tag in jsx and use normal className = "name"
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */
}
export default Header;

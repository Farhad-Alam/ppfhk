const Layout = ({ children }) => {
  return (
    <div>
      {/* Fonts start*/}

      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Josefin+Sans:wght@100;200;300;400;500&family=Mali:wght@200;300;400;500&family=Mulish:ital,wght@1,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Josefin+Sans:wght@100;200;300;400;500&family=Mali:wght@200;300;400;500&family=Mulish:ital,wght@1,700&family=Oswald:wght@200;400;600&display=swap"
        rel="stylesheet"
      ></link>
      {/* Fonts end */}
      {children}
    </div>
  );
};

export default Layout;

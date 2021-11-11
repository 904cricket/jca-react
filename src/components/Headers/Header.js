// reactstrap components

const Header = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/JCA-BANNER1.jpg").default +
            ")",
          backgroundSize: "contain",
          backgroundPosition: "center top",
        }}
      ></div>
    </>
  );
};

export default Header;

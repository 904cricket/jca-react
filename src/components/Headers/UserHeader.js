// reactstrap components
import { Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/JCA-BANNER.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">
                Welcome to Jacksonville Cricket Association
              </h1>
              <p className="text-white mt-0 mb-5">
                We are the home of Jacksonville Cricket where we provide the
                best possible cricketing leagues. We host multiple leagues in
                multuple formats. Our goal is to provide the best quality of
                cricket in Jacksonville and to take the crickting expericent to
                Next Level.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;

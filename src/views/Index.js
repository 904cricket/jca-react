// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
} from "reactstrap";

// core components
import { chartOptions, parseOptions } from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const iframe =
    '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F904cricket%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>';

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="App">
                    <h1>Facebook Page</h1>
                    <Iframe iframe={iframe} />,
                  </div>
                </Row>
              </CardHeader>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Our Mission</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Improve the quality of cricket in Jax and surrounding cities
                    and provive the best experience.
                  </h6>
                  <div className="pl-lg-4"></div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Email Address: 904cricket@gmail.com
                          </label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About US</h6>
                  <div className="pl-lg-4"></div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;

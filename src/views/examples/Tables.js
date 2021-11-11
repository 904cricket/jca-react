// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Ground Status</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Ground</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Team</th>
                    <th scope="col">Request By</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">San Jose</span>
                        </Media>
                      </Media>
                    </th>
                    <td>01/01/2021</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        Open
                      </Badge>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Raiders</span>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            Prem the Love Kondam
                          </span>
                        </Media>
                      </Media>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">ACH1</span>
                        </Media>
                      </Media>
                    </th>
                    <td>01/01/2021</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        Open
                      </Badge>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Spartans</span>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Raj D</span>
                        </Media>
                      </Media>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">ACH2</span>
                        </Media>
                      </Media>
                    </th>
                    <td>01/01/2021</td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        Open
                      </Badge>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Jaguars</span>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">Satish B</span>
                        </Media>
                      </Media>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default Tables;

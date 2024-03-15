import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FormattedMessage } from 'react-intl';

function NavBar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/spaces"> <FormattedMessage id='Home'/></Navbar.Brand>
      </Container>
    </Navbar>
  </>
  );
}

export default NavBar;
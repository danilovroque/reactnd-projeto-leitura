import React, { Fragment } from 'react';
import { Container, Button } from 'semantic-ui-react'
import Menu from './Menu'

function App() {
  return (
    <div>
      <Fragment>
        <Menu />
        <Container>
          <Button>
            Teste
          </Button>
        </Container>
      </Fragment>
    </div>
  );
}

export default App;

import React from 'react';
import styles from '../../../../styles/Header.module.css';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const StorefrontHeader: React.FC = ({ children }) => {
  return (
    <Row className={styles.background}>
      <Col md={8} className="mt-2">
        logo
      </Col>

      <Col md={4} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup>
              <FormControl placeholder="Pesquisar produto" />
            </InputGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default StorefrontHeader;
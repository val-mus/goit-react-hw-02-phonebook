import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <Container>
          <h2>{title}</h2>
          {children}
        </Container>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

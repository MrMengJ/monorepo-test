import React, { Component } from 'react';
import styled from 'styled-components';

import styles from './styles/Home.module.css';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Home extends Component {
  render() {
    return <Wrapper className={styles.wrapper}>我是主页</Wrapper>;
  }
}

export default Home;

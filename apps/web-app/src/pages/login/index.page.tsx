import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Login extends Component {
  static fullPage: boolean = true;

  render() {
    return <Wrapper>我是登录页</Wrapper>;
  }
}

export default Login;

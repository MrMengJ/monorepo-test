import { Button, Result } from 'antd';
import React from 'react';

function backToHome() {
  console.log('返回首页');
}

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="抱歉，你访问的页面不存在"
    extra={
      <Button type="primary" onClick={backToHome}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout,Form, Menu, Icon ,Button } from 'antd';
import Demo from './demo';
import Home from './components/home';

const {
  Header, Content, Footer, Sider,
} = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
         <Layout style={{height:"100vh",overflow: 'hidden'}}>
    <Sider  style={{
       height: '100vh', position: 'fixed', left: 0,
    }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          
        ></Form.Item>
        </Form>
        <Menu.Item key="1">
        <Icon type="home" theme="filled" />
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
        <Icon type="fire" theme="filled" />
          <span className="nav-text">Trending</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="heart" theme="filled" />
          <span className="nav-text">Favorite</span>
        </Menu.Item>
        <Menu.Item key="4">
        <Icon type="tag" theme="filled" />
          <span className="nav-text">Recently</span>
        </Menu.Item>
        
      </Menu>
    </Sider>
    <Layout style={{ marginLeft: 200,background: '#000' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <h1 style={{textAlign: 'center'}}>AirSound</h1>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'auto' }}>
        <div style={{ padding: 24, background: '#000', color: '#fff', textAlign: 'center' }}>
         <h2 style={{textAlign:'left'}}>Home</h2>
         <Home />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
      </div>
    );
  }
}

export default App;

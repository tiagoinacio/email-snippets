import React, { Component } from 'react';
import './App.css';

const Item = () => (
  <div className="item">{ this.props.children }</div>
);

class App extends Component {
  render() {
    return (
      <main className="app">
        <header>
          <h1 className="title">Gmail Snippets</h1>
        </header>
        <ul className="list">
          <Item>template 1</Item>
          <Item>template 2</Item>
        </ul>
      </main>
    );
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import Item from './components/item';
// could be fetched from backend
import { snippets } from './utils';
import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <header>
            <h1 className="title">Email Snippets</h1>
        </header>
        <main className="main">
          <ul className="list">
            {
              snippets.map((snippet, index) => (
                <Item
                  onClick={ () => this.handleOnClick(snippet) }
                  key={ index }
                  id={ snippet.id }
                  template={ snippet.template } />
              ))
            }
          </ul>
        </main>
      </Fragment>
    );
  }

  handleOnClick = (snippet) => {
    window.parent.postMessage(snippet, '*');
  }
}

export default App;

import React, { Component, Fragment } from 'react';
import './App.css';

const Item = ({ template, id, ...props }) => (
  <button
    { ...props }
    title={ id }
    className="item">{ template }</button>
);

class App extends Component {

  // could be fetched from backend
  snippets = [
      {
         id: 'thank you',
         template: 'Hello,\n Thank you for your reply.\nBest regards, John Doe',
      },
      {
        id: 'welcome',
        template: 'Hello,\n Welcome to  for your reply.\nBest regards, John Doe'
      },
      {
        id: 'lead',
        template: 'Hello,\n Let me introduce to you our company.'
      },
      {
        id: 'thank you',
        template: 'Hello,\n Thank you for your reply.\nBest regards, John Doe',
     },
     {
       id: 'welcome',
       template: 'Hello,\n Welcome to  for your reply.\nBest regards, John Doe'
     },
     {
       id: 'lead',
       template: 'Hello,\n Let me introduce to you our company.'
     },
  ];

  render() {
    return (
      <Fragment>
        <header>
            <h1 className="title">Email Snippets</h1>
        </header>
        <main className="main">
          <ul className="list">
            {
              this.snippets.map((snippet, index) => (
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

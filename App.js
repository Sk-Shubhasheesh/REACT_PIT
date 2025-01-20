import React from 'react';
import ReactDOM from'react-dom/client';

// JSX -> Similar to HTML like element & it is not part of JSX and without using JSX we can also use react & browser does not understand jsx and babel is transpilation the jsx into react element

const jsxHeading = <h1>I am heading 1 creating using JSX</h1>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading)


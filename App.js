import React from 'react';
import ReactDOM from'react-dom/client';

// JSX -> Similar to HTML like element & it is not part of JSX and without using JSX we can also use react & browser does not understand jsx and babel is transpilation the jsx into react element

const jsxHeading = <h1>I am heading 1 creating using JSX</h1>

// for writing multiline JSX we can use () and inside the jsx we can use JavaScript using crulu bracket { } which is not possible in html so that is one more different between jsx and html 
const age = 21;
const jsxHeading2 = (
    <div>
        <h2 id='heading'>Hello world</h2>
        <p>The age of syam is: {age}</p>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsxHeading2)


import React from 'react';
import ReactDOM from'react-dom/client';
const containerDiv = React.createElement("div", { id: "container" }, [
    React.createElement("div", { id: "container1" }, [
        React.createElement('h1', {}, "I am heading 1"), React.createElement('h1', {}, "I am heading 2")]),
        React.createElement("div", { id: "container2" }, [
            React.createElement('h1', {}, "I am heading 1"), React.createElement('h1', {}, "I am heading 2")])
]
);
console.log(containerDiv); // react element == object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerDiv)
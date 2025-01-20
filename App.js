// Trying to create a structure

{/* <div id="container">
    <h1>I am heading 1</h1>
    <h2>I am Heading 2</h2>
</div> */}

const containerDiv = React.createElement("div",{id:"container"},
    [
        React.createElement('h1',{}, "I am heading 1"),
        React.createElement('h1',{}, "I am heading 2")
    ]
);
console.log(containerDiv); // react element == object

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerDiv)
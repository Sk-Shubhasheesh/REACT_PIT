// Trying to create a structure

{
    /* 
<div id="container">
    <div id="container1">
        <h1>I am heading 1</h1>
        <h2>I am Heading 2</h2>
    </div> 
    <div id="container2">
        <h1>I am heading 1</h1>
        <h2>I am Heading 2</h2>
    </div> 
</div> 



*/}
// 1st Structure
// const containerDiv = React.createElement("div", { id: "container" },
//     [
//         React.createElement('h1', {}, "I am heading 1"),
//         React.createElement('h1', {}, "I am heading 2")
//     ]
// );


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
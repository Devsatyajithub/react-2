/* const heading = React.createElement("h1", {id:"heading"}, "Hello React!");
const root = ReactDOM.createRoot(document.getElementById("root")); */
const parent= React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
        [React.createElement("h1", {}, "I am H1 tage."),
        React.createElement("h2", {}, "I am H1 tage.")
    
 ] ),
 React.createElement("div",{id:"child2"},
        [React.createElement("h1", {}, "I am H1 tage."),
        React.createElement("h2", {}, "I am H1 tage.")
    
 ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
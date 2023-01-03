import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement('h1',{id:'title'},'First Heading');
const heading2 = React.createElement('h2',{id:'tittle2'},'Second Heading');
const divs = React.createElement('div',{id:'main'},[heading, heading2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divs);

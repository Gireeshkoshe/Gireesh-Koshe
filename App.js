const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hiii i am not feeling good"),
            React.createElement("h1",{},"sibling")
        ]
    )
)

const heading=React.createElement("h1",{id:"heading"},"hii i am here");
 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// root.render(heading);
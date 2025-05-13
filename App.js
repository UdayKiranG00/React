const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I am child1 h1 tag"),
        React.createElement("h2", {}, "I am child1 h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am child2 h1 tag"),
        React.createElement("h2", {}, "I am child2 h2 tag")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
const add = (function getAdd() {
  let foo = 0;
  return function() {
    foo = foo + 1;

    return foo;
  };
})();

const React = (function() {
  let _val;
  function useState(initalVal) {
    const state = _val || initalVal;
    const setState = newVal => (_val = newVal);
    return [state, setState];
  }

  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("apple");
  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    text: word => setText(word)
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.text("banana");

var App = React.render(Component);
// const React = (function() {
//     function useState(initalVal) {
//       let _val = initalVal;
//       const state = () => _val;
//       const setState = newVal => (_val = newVal);
//       return [state, setState];
//     }

//     function render() {
//       console.log("object");
//     }
//     return { useState, render };
//   })();

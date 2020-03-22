const add = (function getAdd() {
  let foo = 0;
  return function() {
    foo = foo + 1;

    return foo;
  };
})();

const React = (function() {
  let hooks = [];
  let idx = 0;
  console.log("idx", idx);
  function useState(initalVal) {
    const _idx = idx;
    console.log("_idx", _idx);
    console.log("idx", idx);
    const state = hooks[idx] || initalVal;
    const setState = newVal => {
      console.log("_idx", _idx);
      console.log("idx", idx);

      hooks[_idx] = newVal;
    };
    idx++;

    return [state, setState];
  }

  function render(Component) {
    idx = 0;
    console.log("rendered");
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("apple");
  const [name, setName] = React.useState("tom");
  console.log("component");
  return {
    render: () => console.log({ count, text, name }),
    click: () => setCount(count + 1),
    text: word => setText(word)
  };
}

var App = React.render(Component);
console.log("click");
App.click();
// var App = React.render(Component);
// App.text("hom");

var App = React.render(Component);

// var App = React.render(Component);
// App.click();
// React.render(Component);
// App.text("banana");

// React.render(Component);

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

# Event.target vs Event.currentTarget

## References

- https://developer.mozilla.org/en-US/docs/Web/API/Event/target
- https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

## The Difference

`Event.target` is the **DOM element** on which an event is _actually dispatched_—`Event.target` may or may not have the associated event handlers for the event attached, whereas `Event.currentTarget` is the `EventTarget` who is currently processing the event, meaning it has the event handlers attached to it and those handlers are the ones processing the event at the moment.

Because an event could bubble up or be caputured by one of `Event.target`'s ancestors in a DOM tree, `Event.currentTarget` can be `Event.target` itself or one of its ancestors who has the handlers for the event.

Inside the body of the event handlers, `Event.currentTarget` always refers to the `EventTarget` to which the event handlers are attached, which can also be accessed through `this` context if the listener is defined by the `function` keyword, not by an arrow function expression.

**An event handler defined by the `function` keyword**

```js
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

**An event handler defined by an arrow function**

```js
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

## Example

```js
// Assuming `childDiv` is clicked.
const parentDiv = document.createElement("div");
parentDiv.id = "parent-div";
parentDiv.style.width = "300px";
parentDiv.style.height = "300px";
parentDiv.style.backgroundColor = "red";

document.body.appendChild(parentDiv);

parentDiv.addEventListener("click", (e) => {
  console.log("this is called second.");
  console.log(e.currentTarget.id); // parent-div
  console.log(e.target.id); // child-div
});

const childDiv = document.createElement("div");
childDiv.id = "child-div";
childDiv.style.width = "80%";
childDiv.style.height = "80%";
childDiv.style.backgroundColor = "blue";

parentDiv.appendChild(childDiv);

childDiv.addEventListener("click", (e) => {
  console.log("this is called first.");
  console.log(e.currentTarget.id); // child-div
  console.log(e.target.id); // child-div
});
```

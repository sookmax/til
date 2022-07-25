# Event bubbling and capture

## References

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

## What are they?

<blockquote className="styled">
Event bubbling and capture are terms that describe phases in how the browser handles events targeted at <strong>nested elements</strong>.
</blockquote>

### Bubbling

Imagine there is a `<button>` inside a `<div>`.

If a click event handler is attached to the `<div>`, the event handler will be called when not only the `<div>` is clicked, but also the `<button>` _inside of it_ is clicked. And this behavior is called **bubbling**.

In other words, even if the element that is actually clicked (`event.target`)—in this case the `<button>`—doesn't have an event handler, the event is propagated upwards to the parent (`<div>`) to see if there's any event handler for `click` event and if there is, the handler will be executed.

This behavior is continued until the browser reaches the `<html>` element—or even to the objects that are higher in the hierarchy (`document` or `window`) if they have registered listeners for the event.

**Bubbling** can be prevented by calling `event.stopPropagation()`. The `event` object can be accessed inside the event handler as a first argument.

### Capturing

**Capturing** works in the exact _opposite direction_ to bubbling.

So when an event occurs from an element, the browser will seek and execute the element's ancestors' handlers first _even before_ it tries to call the handlers (if any) attached to the target element itself.

## EventTarget.addEventListener()

When you attach an event handler using `addEventListener()` web api, the default behavior is to **bubble** (propagate upwards). You can switch from bubbling to **capturing** using the third argument of `addEventListener()`.

### Example

```js
// Assuming there is <div id="root"> element in the associated html document.
const div = document.getElementById("root");

// By default the event will bubble.
div.addEventListener("click", () => console.log("clicked"));

// Using the third argument, we can switch to capturing.
div.addEventListener("click", () => console.log("clicked"), true);
// or
div.addEventListener("click", () => console.log("clicked"), {
  capture: true,
});
```

## Remarks

Event bubbling and capturing modes are mutually exclusive—they are one or the other, not both.

<blockquote className="styled">
Events that are bubbling upward through the tree will not trigger a listener designated to use capture.

<span><a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" target="_blank">MDN - EventTarget.addEventListener()</a></span>

</blockquote>

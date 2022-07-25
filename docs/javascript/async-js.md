# Asynchronous JavaScript

## References

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous
- https://eloquentjavascript.net/11_async.html

## Preface

<blockquote className="styled">
<p>
The central part of a computer, the part that carries out the individual steps that
make up our programs, is called the <em>processor</em>. The speed at which something like
a loop that manipulates numbers can be executed depends pretty much entirely on the
speed of the processor.
</p>

<p>
But many programs interact with things outside of the processor. For example they may communicate
over a computer network or request data from the hard disk—which is a lot slower than getting it
from memory.
</p>

<p>
When such a thing is happening, it would be a shame to let the processor sit idle—there might be some other work it could do in the meantime. In part, this is handled by your operating system, which will switch the processor between multiple running programs. But that doesn't help when we want a <em>single</em> program to be able to make progress while it is waiting for a network request.
</p>
</blockquote>

<blockquote className="styled">
<p>
In a <em>synchronous</em> programming model, things happen one at a time. When you call a function that performs a long-running action, it returns only when the action has finished and it can return the result. This stops your program for the time the action takes.
</p>

<p>
An <em>asynchronous</em> model allows multiple things to happen at the same time. When you start an action, your program continues to run. When the action finishes, the program is informed and gets access to the result (for example, the data read from disk).
</p>
</blockquote>

## The Event Loop

<blockquote className="styled">
<p>
Asynchronous behavior happens on its own empty function call stack.
</p>

<p>
A JavaScript environment will run only one program at a time. Because no two things run at the same time, slow-running code might delay the handling of other events.
</p>

<p>
Promises always resolve or reject as a new event. Even if a promise is already resolved, waiting for it will cause your callback to run after the current script finishes, rather than right away.
</p>
</blockquote>

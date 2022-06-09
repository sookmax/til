---
sidebar_position: 1
---

# TDD, Where Dit It All Go Wrong

This section is based on my watching the youtube video called, **TDD, Where Dit It All Go Wrong (Ian Cooper)**

<iframe width="560" height="315" src="https://www.youtube.com/embed/EZ05e7EMOLM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Summary

### Recommended reading

<figure>

<img src="/img/tdd_kent_beck.jpg" style={{height: "400px"}} />

<figcaption align="left"><b>Test-Driven Development by Example by Kent Beck</b></figcaption>

</figure>

Ian says the most important thing to take away from the book is:

> Avoid testing implementation details, test behaviors

### How to do TDD right

:::danger wrong things to do

- Many practice TDD by using _adding a new method to a class_ as the trigger to write a test.
- A test-case per class approach fails to capture the ethos for TDD.
- Adding a new class is not the trigger for writing tests.
- Do not write tests for implementation details &ndash; these change!

:::

:::tip correct things to do

- In TDD, creating a new test is that you have a requirement you want to implement.
- the trigger is implementing a requirement.
- Test the public API.
  - `exports` from a module.
  - the stable idea of your software; how you implement the requirement is unstable.
  - the contract your software has with the world.
- Writing tests to cover the use cases or stories.

:::

The object of TDD is to test _behaviors_ in the system.

> When we write a test, we imagine the perfect interface for our operation. We are telling ourselves a story about how the operation will look from the outside. Our story won't always come true, but it's better to start from the best possible application programming interface (API) and work backward.

The unit of isolation is the _test_, not the thing _under test_ (for example, class).

> We avoid file system, database, simply because these _shared fixture_ elements prevent us running in isolation from other _tests_, or cause our tests to be slow.

When we are focusing on testing individual _methods_ of a class, We can't refactor easily because implementation details are exposed to tests.

### Red-Green-Refactor

> Refactor is the key in this red-green-refactor cycle.

1. **Red** Write a little test that doesn't work, and perhaps doesn't even compile at first in the absence of correct implementation.
2. **Green** Make the test work quickly, committing whatever _sins_ necessary in the process.
   - What we're doing is making the test passed by the quickest (and perhaps dirtiest) process possible.
   - do not try to make it beautiful, do not put patterns in there yet, and just write line after line of code until it works.
3. **Refactor** Eliminate all of the duplications created in merely getting the test to work in _green_ phase (make good code).

> The different phases have different purposes. They call for different styles of solution, different aesthetic viewpoints. The first three phases need to go by quickly, so we get to a known state with the new functionality. **We can commit any number of sins to get there, because speed trumps design, just for that brief moment.**
>
> Kent Beck, TDD by Example

Kent's point is essentially you can't do two things at once easily. You can't both understand the solution to the problem and engineer the code right.

#### Clean Code When?

The refactoring step is when we produce clean code.

- It's when you remove duplication [Beck]
- It's when you sanitize the code smells [Fowler]
- It's when you apply patterns [Kerievsky]

Because now you have a clear idea of what your solution is.

You do not write new unit tests when refactoring to clean code.

Refactoring is a process of safe moves that let you essentially change the design of the code. They do not change the behavior. Your behavior is covered by the original test.

> Dependency is the key problem in software development at all scales
>
> Kent Beck, TDD BY Example

We need to eliminate dependency between our tests and our code.

Coupling is what kills all software so strive to decouple your tests from your implementation details. Focus on your public contract, your stable API and leave your implementation details free of tests and avoid heavy mocking.

This allows us to refactor implementations without changing the tests. Don't bake implementation details into tests!

### Code Smells

<figure>

<img src="/img/fowler_refactoring.jpg" style={{height: "400px"}} />

<figcaption align="left"><b>Refactoring by Martin Fowler</b></figcaption>

</figure>

Fowler's book provides both step-by-step, safe recipes for performing a refactoring as well as outlining the smells in code that trigger those refactorings.

> Refactoring is the process of changing a software system in such a way that it **does not alter the external behavior of the code yet improves its internal structure.** It is a disciplined way to clean up code that minimizes the chances of introducing bugs. In essence when you refactor you are improving the design of the code after it has been written.
>
> Martin Fowler, _Refactoring: Improving the Design of Existing Code_

Kerievsky suggests we don't try to implement patterns in the system under test. We implement patterns as improvements to the code in the refactoring step.

> The ideal step for applying patterns is the refactoring step because at this point I know what the solution is; I've written one (in the green phase). Now I can clean up by making a pattern.

<!---
### Hexagonal Architecture: Ports and Adapters

<figure>

<img src="/img/software_testing_anti_pattern.png" style={{height: "400px"}} />

<figcaption align="left"><b>Software Testing Ice-cream Cone Anti-Pattern</b></figcaption>

</figure>

This is unfortunately the common way that testing occurs in a lot of organizations. Before we release the software, there is a big big wave of manual testing going on, everyone's getting into the system running manual scripts, etc. Then below that there's some sort of big suite of selenium tests and then we have integration tests and the bottom we have a few developer tests.

This is a bit of a disaster, why?

First of all, this is really expensive unrepeatable, so you may want to automate your way out of that situation.

This one is very problematic and I'll tell you why.

If I change my UI to give it a nice classy new look and feel, I may not be changing any of the behaviors of my software. They do exactly the same thing that they did yesterday; I've just cleaned up the UI.

But these tools all break.

I'm driving the tools to test the behavior of my system, but they all break because I changed the way that my widgets work.

So they are very fragile and they also run very slowly. Quite often, when you run them overnight and you get the blame game in the morning. Someone's job in the organization is to determine who is to blame for last night's test failing.

If you have found yourself in a situation where you have somebody whose job every morning is to determine who's to blame for the test failing, you are doing it wrong.

So what you want is what's called the testing pyramid.

<br />

<img src="/img/test-pyramid.png" style={{height: "400px"}} />

The majority of your code should be tested by your developer tests. A small amount of code up here should test your widgets work correctly (UI tests) and in between there's a certain amount of integration testing where the two gets hooked together.
-->

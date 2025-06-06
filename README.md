# TypeScript Concepts - Blog

---
 # 1. Differences between Interfaces and Types in TypeScript

 ---

 TypeScript provides two main ways to define the shape of objects: type and interface.

 interface is best for object shapes and extensibility.

type is best for more complex, flexible type definitions.

# ✅ Interface: Extensible and Mergeable

Interfaces allow declaration merging and can be extended using extends.
```ts
// Declaration merging: both interfaces are merged
interface Person {
    name: string;
}

interface Person {
    age: number;
}

// Interface inheritance
interface Person2 extends Person {
    roll: number;
}

const user: Person2 = {
    name: "Alex",
    age: 18,
    roll: 1
};
```
---
# ✅ Type: More Flexible but Non-Mergeable

Types are more versatile and can represent primitives, unions, tuples, and more. However, they do not support declaration merging.

```ts
// Basic object shape
type Person = {
    name: string;
    age: number;
};

// Type composition using intersections
type Student = Person & {
    roll: number;
};

const student: Student = {
    name: "Jamie",
    age: 20,
    roll: 101
};

// Union type example
type ID = string | number;

let userId: ID = "abc123";
userId = 456;
```
---
# Final Thoughts

Use interface when you’re working with objects and need to extend or merge structures.
Use type when you need flexibility, such as combining multiple types, working with primitives, or defining complex structures.

---
# 2. What is Type Inference in TypeScript? Why is it Helpful?
---
TypeScript is known for its powerful type system, and one of its most helpful features is type inference.In TypeScript Type inference means that TypeScript can automatically figure out the type of a variable, function return, or expression.You don’t always need to write the type — TypeScript will guess it for you!

---

# ✨ Example:
---
```ts
let name = "Alice"; // inferred as string
let age = 30;       // inferred as number
let isActive = true; // inferred as boolean
```
---

Here, TypeScript looks at the value and automatically assigns the correct type. You don’t need to write but you can if you want to.

---

```ts
let name: string = "Alice";
```
---
# Why is Type Inference Helpful?
---
✅ 1. Less Code, Same Safety 
✅ 2. Smarter Function Return Types 
✅ 3. Prevents Errors Automatically

```ts
let score = 100; // TypeScript knows this is a number

function greet(name: string) {
    return "Hello, " + name;
}

// inferred return type: string

function greet(name: string) {
    return "Hello, " + name;
}

// inferred return type: string
```
---

# Final Thoughts
---
Type inference makes TypeScript smarter and your code shorter. It reduces the need for manual annotations while still keeping your code safe and readable.

---

✅ Let TypeScript Inference types when it’s obvious.

✅ Add types manually when it improves clarity or is required.

🚫 Don’t overuse any, as it disables inference and type checking.


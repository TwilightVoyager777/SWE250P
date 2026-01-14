# SWE 250P LAB A - FrontEnd

## 1. Testing Environment

The following environment was used to develop and test the web server code for this assignment:

* **Programming Language & Runtime**
    * Node.js version: v23.3.0
    * npm version: 10.9.0
* **Operating System**
    * macOS (Tahoe 26.2)
* **Computer Architecture**
    * ARM64 (Apple M-series processor)
* **Web Browser Used for Testing**
    * Google Chrome
    * Version: 143.0.7499.193

---

## 2. Description 

### Practice M3 of the React features
1. Class-based React components
2. JSX syntax for defining user interfaces
3. Default props (defaultProps) to provide fallback values when optional props are not supplied
4. ReactDOM.render

### Practice M4 of the TypeScript features
1. tsc command
2. Type Annotations: Explicit typing for variables, function parameters, and return values (string, number, boolean).
3. Type Inference: Automatic type deduction based on assigned values. 
4. Union Types: Variables that can hold multiple types (number | string). 
5. Any Type: Disables type checking for a variable, allowing dynamic typing. 
6. Arrays: Typed arrays using element type annotations (string[]). 
7. Tuples: Fixed-length arrays with specific types for each position ([string, number]). 
8. Enums: Named numeric constants for predefined values. 
9. Function Types: Variables typed as functions with defined parameter and return types. 
10. Optional Parameters: Function parameters marked as optional using ?. 
11. Default Parameters: Function parameters with default values. 
12. Spread Operator: Expands arrays into individual arguments (...args). 
13. Type Aliases: Custom reusable types defined using type. 
14. Type Guards: Runtime checks to narrow types safely using typeof. 
15. Object Types: Inline object shape definitions for structured data. 
16. Arrow Functions: Concise function syntax with type support. 
17. Destructuring: Extracting values from objects and arrays into variables. 
18. Classes: Object-oriented structures with properties, constructors, and methods. 
19. Inheritance: Creating subclasses using extends. 
20. Access Modifiers: Encapsulation using public and private. 
21. Getters and Setters: Controlled access to class properties via get and set. 
22. Static Members: Class-level properties shared across instances. 
23. Abstract Classes: Base classes with abstract methods that must be implemented by subclasses. 
24. Strict Type Checking: Compile-time enforcement through noImplicitAny, strictNullChecks, and related rules.


### Practice M5 of the TypeScript features
1. Interfaces: Used to define object shapes and enforce consistent data structures across the application.
2. Modules: Use import and export statements to organize code into reusable and maintainable files.
3. Namespaces: Group related types and functions under a single logical name to avoid global scope pollution.
4. Decorators: Provide a way to modify or extend class behavior using metadata and annotations.
5. Third-Party Libraries: External packages installed via npm and integrated into the TypeScript project.
6. Type Annotations: Explicit typing for variables, function parameters, and return values (string, number, boolean).
7. Type Inference: Automatic type deduction based on assigned values.
8. Webpack Bundling: Use Webpack to bundle TypeScript modules and dependencies into a single JavaScript output file.
9. Source Maps: Map generated JavaScript code back to original TypeScript source for easier debugging.
10. Debugging Basics: Use compiler errors, console logs, and browser developer tools to identify and fix issues.
---

## 3. Testing Methodology

### Practice M3
1. 2 main source code file: test.jsx, index.html
2. run npx babel main.jsx --out-file main.js
3. go to index.html and open

### Practice M4
1. cd M3
2. run tsc app.ts
3. load up index.html and see alert
4. run tsc -init to Create a new tsconfig.json
5. load up index.html and see alert

### Practice M5

1. add simple.ts and run tsc simple.ts --lib dom,es2015
2. npm init -y
3. npm install webpack
4. npx webpack
5. npx webpack-cli !!!!no more npx webpack init
6. npm run
7. Confirm that the bundled JavaScript file is generated in the output directory.
8. Open the corresponding HTML file in a web browser and verify that the application functions correctly.

#### Debugging TypeScript Code

Debugging TypeScript code is primarily done by analyzing compiler error messages produced by the TypeScript compiler, which provide detailed information about type mismatches and invalid operations. Source maps are used to map the generated JavaScript back to the original TypeScript source, allowing debugging directly in the browser’s developer tools. Additional debugging techniques include inserting console logs, using breakpoints in browser DevTools, and enabling strict compiler options to catch potential issues at compile time before runtime errors occur.



---


## 4. Source Code Submission

The complete source code of the web server is included as part of the assignment submission.

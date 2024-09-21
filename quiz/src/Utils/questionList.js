export const jsBasicQuestions = [
  {
    question: "What is the output of `typeof NaN` in JavaScript?",
    options: ["'number'", "'string'", "'undefined'", "'object'"],
    correctAnswer: 0, // Index of "'number'"
  },
  {
    question:
      "Which of the following is not a primitive data type in JavaScript?",
    options: ["Boolean", "Number", "String", "Array"],
    correctAnswer: 3, // Index of "Array"
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "let variableName;",
      "variable = varName;",
      "var: variableName;",
      "declare variableName;",
    ],
    correctAnswer: 0, // Index of "let variableName;"
  },
  {
    question:
      "What is the correct way to write an arrow function in JavaScript?",
    options: ["function => () {}", "() => {}", "() {} =>", "=> () {}"],
    correctAnswer: 1, // Index of "() => {}"
  },
  {
    question: "Which method is used to find an item in an array?",
    options: [".find()", ".search()", ".locate()", ".match()"],
    correctAnswer: 0, // Index of ".find()"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Spring"],
    correctAnswer: 0, // Index of "React"
  },
  {
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "=", "!"],
    correctAnswer: 1, // Index of "==="
  },
  {
    question: "What does `isNaN()` function do in JavaScript?",
    options: [
      "Checks if a value is a number",
      "Checks if a value is NaN",
      "Converts a value to a number",
      "Checks if a value is not a number",
    ],
    correctAnswer: 3, // Index of "Checks if a value is not a number"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["/* comment */", "<!-- comment -->", "// comment", "# comment"],
    correctAnswer: 2, // Index of "// comment"
  },
  {
    question:
      "Which function is used to parse a string into a floating-point number?",
    options: ["parseFloat()", "parseInt()", "Number()", "toFloat()"],
    correctAnswer: 0, // Index of "parseFloat()"
  },
];
export const reactBasicQuestions = [
  {
    question: "What is React primarily used for?",
    options: [
      "Building user interfaces",
      "Server-side scripting",
      "Database management",
      "File handling",
    ],
    correctAnswer: 0, // Index of "Building user interfaces"
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A lightweight copy of the actual DOM",
      "A type of database",
      "A CSS styling technique",
      "A component lifecycle method",
    ],
    correctAnswer: 0, // Index of "A lightweight copy of the actual DOM"
  },
  {
    question: "What hook is used to manage state in functional components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: 1, // Index of "useState"
  },
  {
    question: "How do you create a React component?",
    options: [
      "By defining a function or class",
      "Using HTML",
      "By writing CSS",
      "Using JavaScript objects",
    ],
    correctAnswer: 0, // Index of "By defining a function or class"
  },
  {
    question: "What is JSX?",
    options: [
      "A syntax extension for JavaScript",
      "A type of CSS",
      "A framework for back-end development",
      "A JavaScript library",
    ],
    correctAnswer: 0, // Index of "A syntax extension for JavaScript"
  },
  {
    question: "What is a prop in React?",
    options: [
      "A way to pass data to components",
      "A function for handling events",
      "A method for state management",
      "A type of hook",
    ],
    correctAnswer: 0, // Index of "A way to pass data to components"
  },
  {
    question: "What method is used to update the state in a class component?",
    options: [
      "this.setState()",
      "this.updateState()",
      "this.changeState()",
      "this.modifyState()",
    ],
    correctAnswer: 0, // Index of "this.setState()"
  },
  {
    question: "Which lifecycle method is called after a component is mounted?",
    options: [
      "componentDidMount",
      "componentWillMount",
      "componentDidUpdate",
      "componentWillUpdate",
    ],
    correctAnswer: 0, // Index of "componentDidMount"
  },
  {
    question: "How can you conditionally render a component in React?",
    options: [
      "Using ternary operators",
      "Using CSS styles",
      "Using props",
      "Using HTML comments",
    ],
    correctAnswer: 0, // Index of "Using ternary operators"
  },
  {
    question: "What is Redux primarily used for?",
    options: [
      "State management",
      "Routing",
      "Styling",
      "Server-side rendering",
    ],
    correctAnswer: 0, // Index of "State management"
  },
];

export const nodeBasicQuestions = [
  {
    question: "What is Node.js primarily used for?",
    options: [
      "Server-side scripting",
      "Client-side scripting",
      "Database management",
      "Frontend development",
    ],
    correctAnswer: 0, // Index of "Server-side scripting"
  },
  {
    question:
      "Which built-in module in Node.js is used to create HTTP servers?",
    options: ["http", "fs", "path", "os"],
    correctAnswer: 0, // Index of "http"
  },
  {
    question: "What does npm stand for?",
    options: [
      "Node Package Manager",
      "Node Project Manager",
      "Node Programming Manager",
      "Node Package Module",
    ],
    correctAnswer: 0, // Index of "Node Package Manager"
  },
  {
    question: "What is the purpose of the `require` function in Node.js?",
    options: [
      "To import modules",
      "To export modules",
      "To read files",
      "To start the server",
    ],
    correctAnswer: 0, // Index of "To import modules"
  },
  {
    question: "Which of the following is a non-blocking operation in Node.js?",
    options: [
      "I/O operations",
      "Variable declaration",
      "Function definition",
      "For loop",
    ],
    correctAnswer: 0, // Index of "I/O operations"
  },
  {
    question: "What is Express.js?",
    options: [
      "A web application framework for Node.js",
      "A database management system",
      "A frontend framework",
      "A CSS library",
    ],
    correctAnswer: 0, // Index of "A web application framework for Node.js"
  },
  {
    question: "Which command is used to install a package with npm?",
    options: [
      "npm install [package-name]",
      "npm get [package-name]",
      "npm download [package-name]",
      "npm add [package-name]",
    ],
    correctAnswer: 0, // Index of "npm install [package-name]"
  },
  {
    question: "What is the purpose of middleware in Express?",
    options: [
      "To handle requests and responses",
      "To manage database connections",
      "To define routes",
      "To serve static files",
    ],
    correctAnswer: 0, // Index of "To handle requests and responses"
  },
  {
    question: "What does the `process` object in Node.js provide?",
    options: [
      "Information about the current Node.js process",
      "Access to the file system",
      "Database connections",
      "Network protocols",
    ],
    correctAnswer: 0, // Index of "Information about the current Node.js process"
  },
  {
    question: "Which method is used to read files in Node.js?",
    options: ["fs.readFile", "fs.writeFile", "fs.appendFile", "fs.openFile"],
    correctAnswer: 0, // Index of "fs.readFile"
  },
];

export const angularBasicQuestions = [
  {
    question: "What is Angular primarily used for?",
    options: [
      "Building single-page applications",
      "Building server-side applications",
      "Creating databases",
      "Styling web pages",
    ],
    correctAnswer: 0, // Index of "Building single-page applications"
  },
  {
    question: "What is a component in Angular?",
    options: [
      "A building block of the UI",
      "A service for data handling",
      "A routing mechanism",
      "A directive",
    ],
    correctAnswer: 0, // Index of "A building block of the UI"
  },
  {
    question:
      "Which of the following is used for dependency injection in Angular?",
    options: ["@Injectable", "@Component", "@Directive", "@Pipe"],
    correctAnswer: 0, // Index of "@Injectable"
  },
  {
    question: "What does the Angular CLI stand for?",
    options: [
      "Command Line Interface",
      "Command Line Integration",
      "Common Language Interface",
      "Component Library Interface",
    ],
    correctAnswer: 0, // Index of "Command Line Interface"
  },
  {
    question: "Which directive is used for two-way data binding in Angular?",
    options: ["ngModel", "ngBind", "ngIf", "ngFor"],
    correctAnswer: 0, // Index of "ngModel"
  },
  {
    question: "What is a service in Angular?",
    options: [
      "A class that provides specific functionality",
      "A UI component",
      "A routing mechanism",
      "A directive for DOM manipulation",
    ],
    correctAnswer: 0, // Index of "A class that provides specific functionality"
  },
  {
    question:
      "What file is typically used to define routes in an Angular application?",
    options: [
      "app-routing.module.ts",
      "app.module.ts",
      "main.ts",
      "index.html",
    ],
    correctAnswer: 0, // Index of "app-routing.module.ts"
  },
  {
    question:
      "Which lifecycle hook is called after a component's view has been fully initialized?",
    options: ["ngAfterViewInit", "ngOnInit", "ngOnChanges", "ngOnDestroy"],
    correctAnswer: 0, // Index of "ngAfterViewInit"
  },
  {
    question: "What does the `ngFor` directive do in Angular?",
    options: [
      "Iterates over a list",
      "Conditions the rendering of an element",
      "Binds data to a form",
      "Handles events",
    ],
    correctAnswer: 0, // Index of "Iterates over a list"
  },
  {
    question: "Which decorator is used to define an Angular component?",
    options: ["@Component", "@Injectable", "@NgModule", "@Directive"],
    correctAnswer: 0, // Index of "@Component"
  },
];

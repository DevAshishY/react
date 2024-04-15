## Questions

**# T1 Hooks**

    hooks introduce in V16.8. hooks allow state and lifecycle methods. One of the hooks UseEffect controls all lifecycle methods.

**hook rules**

    called at the top level of the component.
    cannot be conditional.
    called inside functional components.

**useState hook**

    useState is a basic hook for managing a simple state transformation.
    useState accepts an initial state and returns two values destructuring array format- 1. current state.2.a function(that updates the
    state).



**useReducer**

    * managing more complex state management.
    * useReducer Hook is similar to the useState Hook.
    * Syntax- const[state,dispatch]=useReducer(reducer,initialState)
    * useReducer hook accepts two values as a parameter(reducer,initialState)
    * useReducer returns two values-1.current state. 2. a dispatch function.
    * useReducer hook accept a reducer.
    * reducer- reducer is a pure function(1-a function always returns the same output if the same arguments passed. 2-does not produce
        any side effect).
    * use of reducer function-
    * syntax reducer- const reducer(state,action)=>{return single value/new state}
    * reducer function accept two parameter(state,action)

**useEffects**

    it is call when components are created , if state or props update then call but we call control all case, it is all life cylcle method combination as available
    on class life cycle.

**React. memo**

**memo & useMemo**

    💁‍♀️ useMemo is a hook used for memoizing the result of expensive computations or functions in functional components.
    💁‍♀️ It takes a function and an array of dependencies as arguments, and it only re-runs the function if any of the dependencies have changed.
    💁‍♀️ It's used primarily to optimize performance by caching the result of expensive computations and preventing unnecessary re-computation on every render.
    💁‍♀️ useMemo is not specifically for optimizing component re-renders based on props; instead, it focuses on optimizing the performance of computations within a component.

**useMemo hook (pure components)**

    * useMemo hook returns a memoized value.
    * useMemo hook only runs when one of its dependencies update & second parameter to declare dependencies.
    * a pure component is considered pure if it renders the same output for the same state and props.
    * it extend a class with pure components, there is no need for shouldComponentupdate.
    * reactjs pure component class compare current state and props with new props and state to decide whether the react component should re-
    render itself or not.

**useCallback hooks**

    * useMemo and useCallback hooks are similar.main difference is useMemo returns a memoized value and useCallback returns a memoized
    function.
    * when passed the props and child is wrap the memo but child is re-rendering.then fallow the terms referencial equality(jb page re-render hota hai to function re-create hote hai. means function nya create hua hai ya koe changes hue hai )

**useRef hook(controlled components)**

    useRef allows access to Dom elements and retains mutable values withouts re-renders.
    access a dom element directly.
    not limited to DOM references can hold any value.

**controlled component & uncontrolled comopnent**

    controlled- components managed by the state in react that called controled componets.
    uncontrolled- omponents not managed by the state in react that called uncontroled componets.it's manage by useRef(function based)
    class based-createRef.

**differ b/w useState and useRef hook**

    useState allows us to update the state inside components.while useRef allows referencing dom elements.

---

**# T2 state management**

    state management liberary- flux(facebook),redux,Mobex.it's avoid prop drilling.

---

**# context api or useContext hook**

    using for state management in small project.It helps you to share data globally between various react components
    terms of context api-
    Step-I createContext at app.js file and export it.
    Step-II warp the all child component by provider.and provide takes a value attribute.
    step-III import useContext hook in child component and it takes the createContext.

---

**# T5 disadvance of useContext hook**

    when context is change then all hole app is re-render or repaint.

---

**# T6 how to optimize large list**

    reat.window

---

**# T7 how browser read code jsx**

    Answer

---

**# T8 how to login/forget/signout and set jwt token and password decode in react**

    Answer

---

**# T9 how covered the all lifecycle by using useEffect and how many type life cycle**

    Answer

---

**# T10 form library**

    Answer

---

**# T11 how to use shouldcomponentupdate in functional**

    Answer

---

**# T12 how to optimize performance**

    use functional
    memorization- by usecallback & useMemo
    visulaziation- large list visual part show. we use libary react-window  & react-visulaziation.
    code-spliting-
    tree-shaking- webpack
    optimize enable for production
    performance monitor- lighthouse & google page inside & chrome dev tool
    ssr- performance & seo- ssr generate html send to client for first meaningfull content

---

**# T13 WebSockets with React**

    Answer

---

**# T14 Decorators in react**

    we can decorate in class component.
    by using @setTitle()
    we can change behavior in components.

---

**# T15 What is a consumer**

    react component that subscribes to context changes. using this component lets you subscribe to a context within a function
    component. Requires a function as a child. The function receives the current context value and returns a React node.

---

**# T16 React includes a stable implementation of React Hooks in 16.8 release for below packages**

    React DOM
    React DOM Server
    React Test Renderer
    React Shallow Renderer

---

**# T17 reactDomServer**

    Answer

---

**# T17 innerHtml(dangeroushtml)**

    Answer

---

**# T19 Concurrent rendering**

    Answer

---

**# T20 event service worker**

    Answer

---

**# T21 TDD and BDD**

    Answer

---

**# T22 What are some of the best practices for writing React JS code**

        Using components to encapsulate UI logic
    Keeping components small and reusable
    Using props and state to manage data
    Using the virtual DOM to improve performance
    Using React Hooks to manage state and side effects
    Testing your components.

---

**# T23 bind methods in jsx**

    classbased- bind to this keyword is compulsory.
    I-binding in constructor
    II-public class field
    III-arrow funtion

---

**# T24 22 What is dynamic import**

    Dynamic Import

import("./math").then((math) => {
console.log(math.add(10, 20));
});

---

**# T25 forward ref**

    transfer ref child  to parent.
    useref use parent-(extract react)
    ref pass from props(child)
    wrap child component to useForwardRef

---

**# T26 how to data trasfer one component to other components using by useNavigate hook**

    Answer

---

**# T27 interceptors**

    Answer

---

**# T28 typical use case of portals**

    React portals are very useful when a parent component has overflow: hidden or has properties that affect the stacking context (e.g. z-index, position, opacity) and you need to visually “break out” of its container.

For example, dialogs, global message notifications, hovercards, and tooltips.

---

**# T29 set default value for uncontrolled component**

    we can specify a defaultValue attribute instead of value.
    same applies for select and textArea inputs. But you need to use defaultChecked for checkbox and radio inputs.

---

**# T30 Can you use other React Hooks inside a useMemo callback**

    Answer

---

**# T31 Can we pass the useRef reference to your own created React Component**

    Answer

---

**# T32 React 18 new features**

    1. Automatic Batching: Automatic batching is like waiting until you have a bunch of tasks to do before doing them all at once, instead of doing each task immediately as it comes up.
    Example: Imagine you're baking cookies in your kitchen. Instead of turning on the oven every time you finish preparing one batch of cookie dough, you wait until you've prepared all the cookie dough batches. Then, you turn on the oven and bake all the cookies at once.

    2. Concurrent rendering: It is like being an efficient cook in your kitchen. When React renders a component tree, it may have multiple tasks to perform, such as updating the UI, handling user interactions, and fetching data from an API. With concurrent rendering, React can work on these tasks concurrently, switching between them as needed to make progress on all fronts.
    Example: Imagine you're cooking dinner in your kitchen. You have multiple dishes to prepare, but you can only use one burner at a time. However, you're an efficient cook, so you start boiling water for pasta while chopping vegetables for a salad. You switch between tasks as needed, making progress on multiple dishes concurrently, even though you're only actively working on one task at a time.


    3. Transition: The transition feature in React allows you to animate changes in the UI when certain conditions are met, such as when a component mounts or updates. It provides a smooth and visually appealing way to transition between different states of your application.

    Example: Imagine you have a component that displays a modal dialog. When the modal is opened or closed, you want it to smoothly fade in or out, rather than abruptly appearing or disappearing.

---

**# T33 What're the differences of `package.json` and `package-lock.json in React.js**

    Think of package.json as the blueprint of your project. It holds vital information like project name, version, and importantly, a list of all the packages or libraries (dependencies) your project relies on. This is crucial for anyone else working on the project to understand what's needed to make it run smoothly.

    Now, package-lock.json is like the safety net. When you install or update dependencies, it's automatically generated. This file records the exact version of each dependency and its dependencies. It ensures that whenever someone else installs the project, they get exactly the same versions of the packages, avoiding compatibility issues.

---

**# T34 If you have a Multiple classes with the same className, then how do you handle**

    module.css

---

**# T35 How Do You Optimize the Performance of CSS in React?**

    1.Using CSS animations sparingly
    2.Avoiding CSS “hacks” or workarounds
    3.Minimizing or avoiding unnecessary styles
    4.Using vendor prefixes only when necessary
    5.Optimize CSS selectors for efficient matching
    6.Minifying the CSS code for production builds
    7.Using CSS preprocessors like Sass or Less to optimize the CSS output
    8.Using the critical path technique to identify and optimize rendering-blocking styles.
    9.Using CSS Modules or Styled Components to scope styles to specific components.

---

**# T36 How to stop Automatic Batching**

    Automatic batching is indeed an amazing feature. But, there can be situations where we need to prevent this from happening. For that, React provides a method named flushSync() in react-dom that allows us to trigger a re-render for a specific state update.

    How does flushSync() works ?
    To use this, simply import it from react-dom using the syntax:
    import { flushSync } from 'react-dom';
    And then, call the method inside an event handler and place your state update inside the body of flushSync().And then, call the method inside an event handler and place your state update inside the body of flushSync().

---

**# T37 Explain the concept of code bundling and minification. What tools or libraries can be used to achieve this**

    Answer

---

**# T38 Explain the concept of Progressive Web Apps (PWAs). What are the benefits of building a PWA**

    Answer

---

**# T39 hooks cover all use cases for clases**

    no there are no Hook equivalents to the uncommon getSnapshotBeforeUpdate and componentDidCatch lifecycles yet.

---

**# T40 new jsx syntax**

    import {jsx as _jsx} from "react/jsx-runtime";

---

**# T41 when use map() in react show a error "Each child in a list should have a unique "key" prop." why**

    react need unique key for working propty virtual dom concept.

---

**# T42 handle looping**

    in react we use map() not use for loop because for loop not support on return statement

---

**# T43 How to create react class components without ES6**

    If you don’t use ES6 then you may need to use the create-react-class module instead.
    For default props, you need to define getDefaultProps() as a function on the passed object

---

**# T44 Describe the concept of lazy loading in react and how it can be implemented**

    lazy load not support named export/import.
    method-
    import React,{lazy} from 'react';
    let Demo=lazy(()=> import(./abc.js));

---

**# T45 state & props differ**

    Answer

---

**# T46 real dom & VDom & shadow dom**

    Answer

---

**# T47 HOC**

 https://github.com/DevAshishY/coding/tree/main/react/hoc-demo

---

**# T48 React router**

    Answer

---

**# T49 prop drilling**

    Answer

---

**# T50 context v/s redux**

    context

        component level state
        useContext & useReducer hook used
        performance issue because pass down state

        Redux

        center state
        predictable state
        middleware for custom logic like- logging async operation

---

**# T51 which preferred option callback refs & findDomNode Api**

    findDomNode Api

---

**# T52 What is Pure component**

    pure component controls the rendering of components.
    if before state and current state is same so it is not rerender. if different so it will rerender
    it is used in both class & functional
    functional- use useMemo hook- it control unexpected rendring
    class- extract from React.PureComponent.

---

**# T53 How will communicate between parent to child and vice versa**

    Answer

---

**# T54 What is the purpose of the "key" prop in React lists**

    The "key" prop is used to help React identify which items have changed, been added, or been removed from a list, improving performance and avoiding potential rendering issues.

---

**# T55 why not pass index as key**

    Answer

---

**# T56 different between npm and npx**

    npm is primarily used for managing project dependencies, while npx is used for executing Node.js packages without installing them, making it convenient for running command-line tools or scripts on-demand.

---


## Example

**# T1 useReducer**

https://codesandbox.io/p/sandbox/usereducer-qcn7kw

---

**# T2 context api**

https://codesandbox.io/p/sandbox/context-api-8jsc6c

---

**# T4 debouncing in react**

    Answer

---

**# T5 WebSockets exaple**

    Answer

---

**# T6 lazy loading in react**

https://github.com/DevAshishY/coding/tree/main/react/lazy-loading

---

**# T7 React router**

    https://github.com/DevAshishY/coding/tree/main/react/routing

---

**# T8 Reactjs program to sort the data in ascending and descending order along with reset button.**

    Answer

---

**# T9 local storage & session storage**

https://codesandbox.io/p/sandbox/localstorage-react-gywnns

---

**# T10** Api call 

https://github.com/DevAshishY/coding/tree/main/react/api-call

---

**# T11** forward ref

https://github.com/DevAshishY/coding/tree/main/react/forward-ref

---

**# T12**
1. get the questions and options from the API or create your own quiz object with questions and options,answer as properties (https://lnkd.in/gSCwr_rt).
2. develop ui which shows quiz questions, answer choices, navigation buttons for 'Next' and 'Previous,' and a 'Submit' button.
3. On the right, display the quiz progress with circular indicators and quiz question numbers.
a) initially circle should be with no color.
b) If user visits question and selects any option, change color to green,
c) If user visits question and unanswered,then change color to red
4. After submit click, compute the count of unanswered, answered, correct, and incorrect responses.

    Answer https://quiz-app-fardeen.netlify.app/

---

**# T13**
Styled component in react-
    Answer

---


# React Hooks Overview

React Hooks are functions that let you use state and other React features in functional components—without writing a class. They simplify component logic, improve code reusability, and make your components easier to test.

---

## 1. What are React Hooks

React Hooks allow you to manage state, perform side effects, and optimize performance within functional components. They replace many patterns previously only possible in class components, making code more concise and easier to maintain.

---

## 2. Core Hooks

### 2.1 useState

**Purpose:**  
Add state to functional components.

**Example:**

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Update state on button click */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

Below is a complete Markdown file structure you can copy and paste into a file (for example, README.md) for your React Hooks overview:

```markdown
# React Hooks Overview

React Hooks are functions that let you use state and other React features in functional components without writing a class. They simplify component logic, improve code reusability, and make your components easier to test.

---

## 1. What are React Hooks

React Hooks allow you to manage state, perform side effects, and optimize performance within functional components. They replace many patterns previously only possible in class components.

---

## 2. Core Hooks

### 2.1 useState

**Purpose:**  
Add state to functional components.

**Example:**

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      {/* Update state on button click */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

---

### 2.2 useEffect

**Purpose:**  
Perform side effects (e.g., data fetching, subscriptions) after rendering.

**Example:**

```jsx
import React, { useState, useEffect } from 'react';

function DataLogger() {
  const [data, setData] = useState('Initial data');

  // Run this effect only when "data" changes
  useEffect(() => {
    console.log('Data changed:', data);
  }, [data]);

  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={() => setData('Updated data')}>Update Data</button>
    </div>
  );
}

export default DataLogger;
```

---

### 2.3 useContext

**Purpose:**  
Access global data without prop drilling.

**Example:**

```jsx
import React, { createContext, useContext } from 'react';

// Create a context with a default value "light"
const ThemeContext = createContext('light');

function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedText />
    </ThemeContext.Provider>
  );
}

export default App;
```

---

## 3. Advanced Hooks

### 3.1 useReducer

**Purpose:**  
Manage complex state logic using a reducer function.

**Example:**

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default CounterReducer;
```

---

### 3.2 useRef

**Purpose:**  
Maintain mutable values and access DOM elements.

**Example:**

```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
```

---

### 3.3 useMemo

**Purpose:**  
Memoize expensive calculations to avoid unnecessary recomputation.

**Example:**

```jsx
import React, { useState, useMemo } from 'react';

function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]);

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ExpensiveCalculation;
```

---

### 3.4 useCallback

**Purpose:**  
Memoize callback functions to prevent unnecessary re‑rendering of child components.

**Example:**

```jsx
import React, { useState, useCallback } from 'react';

function Child({ onClick }) {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>
      <Child onClick={handleClick} />
    </div>
  );
}

export default Parent;
```

---

### 3.5 useLayoutEffect

**Purpose:**  
Run synchronously after DOM mutations, ideal for layout measurements.

**Example:**

```jsx
import React, { useState, useRef, useLayoutEffect } from 'react';

function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: '50%', background: 'lightblue' }}>
        Resize the window to change my width!
      </div>
      <p>Box width: {width}px</p>
    </div>
  );
}

export default LayoutEffectExample;
```

---

### 3.6 useImperativeHandle

**Purpose:**  
Customize the instance value exposed to parent components via refs.

**Example:**

```jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} {...props} />;
});

function ParentComponent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Click the button to focus" />
      <button onClick={() => inputRef.current.focus()}>Focus the Input</button>
    </div>
  );
}

export default ParentComponent;
```

---

### 3.7 useDebugValue

**Purpose:**  
Display custom hook values in React DevTools for debugging.

**Example:**

```jsx
import React, { useState, useDebugValue } from 'react';

function useCustomCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  useDebugValue(count > 5 ? 'High' : 'Low');
  return [count, setCount];
}

function CounterComponent() {
  const [count, setCount] = useCustomCounter(0);
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </div>
  );
}

export default CounterComponent;
```

---

## 4. New Hooks in React 19

### 4.1 useActionState

**Purpose:**  
Simplifies form actions by automatically handling pending states, errors, and optimistic updates.

**Example:**

```jsx
import React from 'react';
import { useActionState } from 'react';

async function updateProfile(formData) {
  // Simulate an API call
  const name = formData.get('name');
  await new Promise(resolve => setTimeout(resolve, 1000));
  if (name.trim() === '') throw new Error('Name cannot be empty');
  return `Profile updated: ${name}`;
}

async function profileAction(currentState, formData) {
  try {
    const result = await updateProfile(formData);
    return { message: result };
  } catch (error) {
    return { message: error.message };
  }
}

function ProfileForm() {
  const [state, dispatch, isPending] = useActionState(profileAction, null);

  return (
    <form action={dispatch}>
      <input type="text" name="name" placeholder="Enter your name" disabled={isPending} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Updating…' : 'Update Profile'}
      </button>
      {state && state.message && <p>{state.message}</p>}
    </form>
  );
}

export default ProfileForm;
```

---

### 4.2 useFormStatus

**Purpose:**  
Provides access to the status of a parent form for nested components, reducing prop drilling.

**Example:**

```jsx
import React from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? 'Submitting…' : 'Submit'}</button>;
}

export default SubmitButton;
```

---

### 4.3 useOptimistic

**Purpose:**  
Enables optimistic UI updates by immediately reflecting changes while an async operation completes.

**Example:**

```jsx
import React from 'react';
import { useOptimistic } from 'react';

function MessageUpdater({ initialMessage, updateMessage }) {
  const [optimisticMessage, setOptimisticMessage] = useOptimistic(initialMessage);

  const submitUpdate = async (formData) => {
    const newMessage = formData.get('message');
    // Update UI optimistically
    setOptimisticMessage(newMessage);
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Final update after API call completes
    updateMessage(newMessage);
  };

  return (
    <form action={submitUpdate}>
      <p>Message: {optimisticMessage}</p>
      <input type="text" name="message" placeholder="Enter new message" />
      <button type="submit">Update Message</button>
    </form>
  );
}

export default MessageUpdater;
```

---

### 4.4 The new use() API

**Purpose:**  
Directly read asynchronous resources (like Promises or context) within render functions, streamlining data fetching.

**Example:**

```jsx
import React, { use, Suspense } from 'react';

// Function that returns a promise
async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

function UserDetails() {
  // `use()` suspends rendering until the promise resolves
  const user = use(fetchUser());
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <UserDetails />
    </Suspense>
  );
}

export default App;
```

---

## 5. Conclusion

This overview covers the essential React hooks—from core hooks like `useState` and `useEffect`, through advanced hooks such as `useReducer`, `useRef`, and `useMemo`, to the innovative new hooks in React 19 including `useActionState`, `useFormStatus`, `useOptimistic`, and the `use()` API. Mastering these hooks will provide you with a strong foundation for building dynamic, efficient, and maintainable frontend applications.

---

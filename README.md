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

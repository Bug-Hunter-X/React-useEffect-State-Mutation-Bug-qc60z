```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: Directly mutating state
    count++; 
    setCount(count); 
  }, []);

  return <div>Count: {count}</div>;
}
```
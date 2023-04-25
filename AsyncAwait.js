// Async await blocks the main thread and doesn't move forward in the code flow until the promise is resolved/rejected
// line 7 waits until the line 6 finishes getting the data
// line 8 executes only after completion of line 7.

 const a = async () => {
  const response = await fetch('URL');
  const b = await response.json();
  console.log(b);
}

a()

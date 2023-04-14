// Async await blocks the main thread and doesn't move forward in the code flow until the promise is resolved/rejected

 const a = async () => {
  const response = await fetch('URL');
  const b = await response.json();
  console.log(b);
}

a()

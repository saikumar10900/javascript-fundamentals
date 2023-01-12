 const a = async () => {
  const response = await fetch('URL');
  const b = await response.json();
  console.log(b);
}

a()

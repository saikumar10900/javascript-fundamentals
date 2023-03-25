// First thing a browser does while loading a page is "HTML Parsing" and "Script Execution/Loading"

// Now, we will different scenarios like how browser behaves if you script tag in the page in with async, defer boolean values.


// Normal script tag
// Here, browser starts HTML parsing, if it encouters a script tag while parsing it stops parsing and fetches the script and execute it line by line
// then it resumes HTML parsing again
<script type="..." src="..."> Normal Script Tag </script>



// using async in script tag
// Here, browser starts HTML parsing, simultaneously the browser starts fetching the scripts and it executes the scripts then resumes HTML parsing again.
// Note, HTML parsing doesn't stop until the scripts are completely fetch from the network.
<script async type="..." src="..."> Normal Script Tag </script>


// using defer in script tag
// Here, browser starts HTML parsing, simultaneously the browser starts fetching the scripts and it executes the scripts when HTML parsing completes.
// Even if the scripts are available in the browser to execute, still the browser waits to complete HTML parsing.
<script defer type="..." src="..."> Normal Script Tag </script>



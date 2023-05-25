const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log("posting");
  
    // Collect values from the login form
    const title = document.querySelector('#title-posts').value.trim();
    const body = document.querySelector('#body-posts').value.trim();
  
    if (title && body) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', loginFormHandler);
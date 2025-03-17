var script = document.createElement('script');
script.textContent = "alert('XSS Successful!');";
document.body.appendChild(script);

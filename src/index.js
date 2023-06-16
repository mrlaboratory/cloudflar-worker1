import './tailwind.css';



addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
	const html = `
	  <html>
		<head>
		  <title >Server-Side Rendering</title>
		</head>
		<body>
		  <h1 class="font-bold text-red-300">Hello World! mijan 2</h1>
		</body>
	  </html>`;
	
	return new Response(html, {
	  headers: { 'Content-Type': 'text/html' },
	});
  }
  
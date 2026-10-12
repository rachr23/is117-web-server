const app = require("../index");

test("GET / returns the home page", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    const response = await fetch(`http://localhost:${address.port}/`);
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(body).toBe("Hello, IS117! Your web server is working.");
  } finally {
    server.close();
  }
});
test("GET /about returns the about page", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    const response = await fetch(`http://localhost:${address.port}/about`);
    const body = await response.text();

    expect(response.status).toBe(200);
    expect(body).toBe("A web server receives a request and sends a response.");
  } finally {
    server.close();
  }
});

test("GET /missing-page returns 404", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    const response = await fetch(`http://localhost:${address.port}/missing-page`);
    const body = await response.text();

    expect(response.status).toBe(404);
    expect(body).toBe("Page not found.");
  } finally {
    server.close();
  }
});
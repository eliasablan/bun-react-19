import index from "./index.html";

const server = Bun.serve({
  static: {
    "/": index,
  },
  async fetch(req) {
    const path = new URL(req.url).pathname;
    console.log({ path });
    if (path === "/api/names") {
      return Response.json(["Elias", "Carlos", "Aura"]);
    }

    return new Response("hello world");
  },
});

console.log(`Listening on http://${server.hostname}:${server.port}`);

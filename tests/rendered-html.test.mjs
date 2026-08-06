import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Dra. Ana Lopes landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dra\. Ana Lopes \| Biom(?:é|&eacute;)dica Esteta<\/title>/i);
  assert.match(html, /Realce sua/);
  assert.match(html, /melhor vers/i);
  assert.match(html, /Encontre o/);
  assert.match(html, /cuidado ideal/);
  assert.match(html, /Agende sua avalia/i);
  assert.match(
    html,
    /https:\/\/wa\.me\/5571981224674\?text=Ol%C3%A1%2C%20Dra\.%20Ana!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20procedimentos%20e%20realizar%20um%20agendamento\./,
  );
});

test("ships expected public SEO assets", async () => {
  const [robots, sitemap, logo] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/images/logo-mark.png", import.meta.url)),
  ]);

  assert.match(robots, /User-agent: \*/);
  assert.match(sitemap, /<urlset/);
  assert.ok(logo.byteLength > 0);
});

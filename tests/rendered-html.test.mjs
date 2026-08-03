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
  assert.match(html, /Nossos tratamentos/);
  assert.match(html, /Agende sua avalia/i);
  assert.match(html, /https:\/\/wa\.me\/qr\/NQ5RSVECIWVLL1/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships expected public SEO assets", async () => {
  const [robots, sitemap, favicon] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/favicon.svg", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /User-agent: \*/);
  assert.match(sitemap, /<urlset/);
  assert.match(favicon, /<svg/);
});

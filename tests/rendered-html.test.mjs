import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the landing page content wired for Vercel", async () => {
  const [home, hero, treatments, contact] = await Promise.all([
    readFile(new URL("../src/html do site/Home.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/sections/Hero.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/components/sections/Treatments.tsx", import.meta.url), "utf8"),
    readFile(new URL("../src/config/contact.ts", import.meta.url), "utf8"),
  ]);

  assert.match(home, /<Hero \/>/);
  assert.match(home, /<Treatments \/>/);
  assert.match(hero, /Realce sua melhor/);
  assert.match(treatments, /cuidado ideal/);
  assert.match(
    contact,
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

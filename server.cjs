const { createServer } = require("node:http");
const { extname, join, normalize, resolve } = require("node:path");
const { existsSync, statSync, createReadStream, readFileSync } = require("node:fs");

const port = process.env.PORT || 3000;
const distDir = resolve("dist");
const indexFile = join(distDir, "index.html");
const siteUrl = (process.env.SITE_URL || "https://principiamedicina.com.br").replace(/\/$/, "");

const localPages = [
  {
    path: "/unidades/butanta",
    title: "Clínica Principia Butantã | Dor, coluna e ortopedia em São Paulo",
    description:
      "Unidade Butantã da Clínica Principia em São Paulo: atendimento médico integrado para dor, coluna, ortopedia, neurocirurgia e medicina da dor.",
  },
  {
    path: "/unidades/itaim-bibi",
    title: "Clínica Principia Itaim Bibi | Atendimento médico integrado em SP",
    description:
      "Unidade Itaim Bibi da Clínica Principia em São Paulo: cuidado para dor, coluna, articulações, metabolismo e saúde da mulher.",
  },
  {
    path: "/unidades/brasilia",
    title: "Clínica Principia Brasília | Dor, coluna e medicina integrada",
    description:
      "Unidade Brasília da Clínica Principia na Asa Sul: atendimento para dor, movimento, coluna, articulações e especialidades integradas.",
  },
  {
    path: "/unidades/salvador",
    title: "Clínica Principia Salvador | Clínica da dor e cuidado integrado",
    description:
      "Unidade Salvador da Clínica Principia no Shopping Bela Vista: atendimento para dor, coluna, mobilidade e cuidado médico integrado.",
  },
];

const sitemapEntries = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  ...localPages.map(({ path }) => ({ path, priority: "0.85", changefreq: "monthly" })),
];

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(response, filePath) {
  const contentType = mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream";

  response.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": filePath === indexFile ? "no-cache" : "public, max-age=31536000, immutable",
  });

  createReadStream(filePath).pipe(response);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function sendText(response, body, contentType) {
  response.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "public, max-age=3600",
  });
  response.end(body);
}

function sendSitemap(response) {
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  sendText(response, body, "application/xml; charset=utf-8");
}

function sendRobots(response) {
  sendText(
    response,
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`,
    "text/plain; charset=utf-8",
  );
}

function sendLlmSummary(response) {
  sendText(
    response,
    `# Clínica Principia

Site oficial: ${siteUrl}/

A Clínica Principia é uma clínica médica integrada com atendimento em neurocirurgia, endocrinologia, ortopedia, reumatologia, traumatologia, medicina da dor e ginecologia.

Unidades:
- Butantã, São Paulo/SP: Rua Alvarenga, 220. Telefone: 11 2305-9638.
- Itaim Bibi, São Paulo/SP: Rua Joaquim Floriano, 533, sala 1313. Telefone: 11 3079-6701.
- Brasília/DF: SHLS Quadra 716, Conjunto L, Bloco B, Sala 616, Asa Sul.
- Salvador/BA: Shopping Bela Vista, Rua Alameda Euvaldo Luz, 92, Piso L2.

Agendamento:
WhatsApp 11 97961-0690. O paciente deve informar queixa, cidade de atendimento e melhor horário.

Principais temas:
dor crônica, coluna, articulações, movimento, lesões esportivas, alterações metabólicas, saúde da mulher e acompanhamento médico integrado.
`,
    "text/plain; charset=utf-8",
  );
}

function sendIndex(response, pathname) {
  const page = localPages.find((entry) => entry.path === pathname);

  if (!page) {
    sendFile(response, indexFile);
    return;
  }

  const html = readFileSync(indexFile, "utf8")
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${siteUrl}${page.path}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${siteUrl}${page.path}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    );

  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "no-cache",
  });
  response.end(html);
}

createServer((request, response) => {
  if (!existsSync(indexFile)) {
    response.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Build nao encontrado. Rode npm run build antes de iniciar o app.");
    return;
  }

  const requestUrl = new URL(request.url || "/", `http://${request.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);

  if (pathname === "/sitemap.xml") {
    sendSitemap(response);
    return;
  }

  if (pathname === "/robots.txt") {
    sendRobots(response);
    return;
  }

  if (pathname === "/llms.txt") {
    sendLlmSummary(response);
    return;
  }

  const safePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(distDir, safePath);

  if (filePath.startsWith(distDir) && existsSync(filePath) && statSync(filePath).isFile()) {
    sendFile(response, filePath);
    return;
  }

  sendIndex(response, pathname);
}).listen(port, () => {
  console.log(`Clinica Principia online na porta ${port}`);
});

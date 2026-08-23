// worker-proxy/src/index.js
// Cloudflare Worker Router Oficial da Catonho Madeiras
// Redireciona e entrega o site oficial e a LP em subdomínio com Edge Caching

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const hostname = url.hostname.toLowerCase();

    // Endereço de origem do Cloudflare Pages
    const targetOrigin = "https://catonhomadeira.pages.dev";
    let targetUrlString;

    // 1. Roteamento do Subdomínio de Tráfego Pago (lp.catonhomadeira.com.br)
    if (hostname.startsWith("lp.") || hostname.startsWith("ofertas.") || hostname.startsWith("promo.")) {
      if (url.pathname === "/" || url.pathname === "") {
        targetUrlString = `${targetOrigin}/lp/${url.search}`;
      } else {
        targetUrlString = `${targetOrigin}${url.pathname}${url.search}`;
      }
    } else {
      // 2. Roteamento do Domínio Principal (catonhomadeira.com.br / www.catonhomadeira.com.br)
      targetUrlString = `${targetOrigin}${url.pathname}${url.search}`;
    }

    // Criar headers da requisição
    const newHeaders = new Headers(request.headers);
    newHeaders.set("Host", "catonhomadeira.pages.dev");
    newHeaders.set("X-Forwarded-Host", hostname);
    newHeaders.set("X-Forwarded-Proto", url.protocol.replace(":", ""));

    const proxyRequest = new Request(targetUrlString, {
      method: request.method,
      headers: newHeaders,
      body: request.method !== "GET" && request.method !== "HEAD" ? request.body : undefined,
      redirect: "follow"
    });

    try {
      const response = await fetch(proxyRequest);
      
      const responseHeaders = new Headers(response.headers);
      responseHeaders.set("X-Served-By", "Catonho-Edge-Router");

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: responseHeaders
      });
    } catch (err) {
      return new Response("Erro de conexão ao carregar Catonho Madeiras", { status: 502 });
    }
  }
};

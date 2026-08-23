// functions/_middleware.js
// Cloudflare Pages Middleware para Subdomínio de Tráfego Pago (lp.catonhomadeira.com.br)
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostname = url.hostname.toLowerCase();

  // Se o acesso vier por um subdomínio de LP (ex: lp.catonhomadeira.com.br, ofertas., promo.)
  if (hostname.startsWith('lp.') || hostname.startsWith('ofertas.') || hostname.startsWith('promo.')) {
    // Se estiver na raiz do subdomínio '/', serve o conteúdo da landing page '/lp/'
    if (url.pathname === '/' || url.pathname === '') {
      url.pathname = '/lp/';
      return context.env.ASSETS.fetch(url);
    }
  }

  return context.next();
}

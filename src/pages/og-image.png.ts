import type { APIRoute } from 'astro';
import sharp from 'sharp';

export const prerender = true;

export const GET: APIRoute = async () => {
  const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f13;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#18181c;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3399ff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ff6b00;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0066ff;stop-opacity:0.15" />
      <stop offset="50%" style="stop-color:#ff6b00;stop-opacity:0.08" />
      <stop offset="100%" style="stop-color:#0066ff;stop-opacity:0.05" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Grid pattern -->
  <g opacity="0.06" stroke="#3399ff" stroke-width="0.5">
    ${Array.from({ length: 31 }, (_, i) => `<line x1="${i * 40}" y1="0" x2="${i * 40}" y2="630" />`).join('\n    ')}
    ${Array.from({ length: 17 }, (_, i) => `<line x1="0" y1="${i * 40}" x2="1200" y2="${i * 40}" />`).join('\n    ')}
  </g>

  <!-- Glow effect -->
  <ellipse cx="350" cy="315" rx="400" ry="250" fill="url(#glow)" />

  <!-- Left border accent -->
  <rect x="0" y="0" width="4" height="630" fill="url(#accent)" />

  <!-- Terminal window frame -->
  <rect x="80" y="120" width="1040" height="390" rx="16" fill="#1e1e22" stroke="#2d2d33" stroke-width="1" />

  <!-- Terminal title bar -->
  <rect x="80" y="120" width="1040" height="44" rx="16" fill="#18181c" />
  <rect x="80" y="148" width="1040" height="16" fill="#18181c" />

  <!-- Traffic lights -->
  <circle cx="112" cy="142" r="7" fill="#ef4444" />
  <circle cx="136" cy="142" r="7" fill="#eab308" />
  <circle cx="160" cy="142" r="7" fill="#22c55e" />

  <!-- Terminal title -->
  <text x="600" y="147" fill="#8b8fa3" font-family="monospace" font-size="13" text-anchor="middle">portfolio.tsx — CodeGito</text>

  <!-- Code content -->
  <!-- Line numbers -->
  <text x="108" y="200" fill="#3a3a42" font-family="monospace" font-size="14">1</text>
  <text x="108" y="228" fill="#3a3a42" font-family="monospace" font-size="14">2</text>
  <text x="108" y="256" fill="#3a3a42" font-family="monospace" font-size="14">3</text>
  <text x="108" y="284" fill="#3a3a42" font-family="monospace" font-size="14">4</text>
  <text x="108" y="312" fill="#3a3a42" font-family="monospace" font-size="14">5</text>
  <text x="108" y="340" fill="#3a3a42" font-family="monospace" font-size="14">6</text>
  <text x="108" y="368" fill="#3a3a42" font-family="monospace" font-size="14">7</text>
  <text x="108" y="396" fill="#3a3a42" font-family="monospace" font-size="14">8</text>
  <text x="108" y="424" fill="#3a3a42" font-family="monospace" font-size="14">9</text>
  <text x="100" y="452" fill="#3a3a42" font-family="monospace" font-size="14">10</text>
  <text x="100" y="480" fill="#3a3a42" font-family="monospace" font-size="14">11</text>

  <!-- Code: comment -->
  <text x="140" y="200" fill="#6e7681" font-family="monospace" font-size="15">// Welcome to my workspace</text>

  <!-- Code: import -->
  <text x="140" y="228" font-family="monospace" font-size="15">
    <tspan fill="#ff7b72">import</tspan>
    <tspan fill="#e6edfa"> { </tspan>
    <tspan fill="#79c0ff">Developer</tspan>
    <tspan fill="#e6edfa"> } </tspan>
    <tspan fill="#ff7b72">from</tspan>
    <tspan fill="#7ee787"> './universe'</tspan>
    <tspan fill="#e6edfa">;</tspan>
  </text>

  <!-- Code: blank line + const -->
  <text x="140" y="284" font-family="monospace" font-size="15">
    <tspan fill="#ff7b72">const</tspan>
    <tspan fill="#d2a8ff"> Portfolio</tspan>
    <tspan fill="#e6edfa"> = () </tspan>
    <tspan fill="#ff6b00">=&gt;</tspan>
    <tspan fill="#e6edfa"> {</tspan>
  </text>

  <!-- Code: return -->
  <text x="140" y="312" font-family="monospace" font-size="15">
    <tspan fill="#e6edfa">  </tspan>
    <tspan fill="#ff7b72">return</tspan>
    <tspan fill="#e6edfa"> (</tspan>
  </text>

  <!-- Developer tag -->
  <text x="140" y="340" font-family="monospace" font-size="15">
    <tspan fill="#e6edfa">    &lt;</tspan>
    <tspan fill="#79c0ff">Developer</tspan>
  </text>

  <!-- name prop -->
  <text x="140" y="368" font-family="monospace" font-size="15">
    <tspan fill="#79c0ff">      name</tspan>
    <tspan fill="#ff6b00">=</tspan>
    <tspan fill="#7ee787">"Luiggi Paredes"</tspan>
  </text>

  <!-- role prop -->
  <text x="140" y="396" font-family="monospace" font-size="15">
    <tspan fill="#79c0ff">      role</tspan>
    <tspan fill="#ff6b00">=</tspan>
    <tspan fill="#7ee787">"Backend &amp; FullStack"</tspan>
  </text>

  <!-- passion prop -->
  <text x="140" y="424" font-family="monospace" font-size="15">
    <tspan fill="#79c0ff">      passion</tspan>
    <tspan fill="#ff6b00">=</tspan>
    <tspan fill="#7ee787">"Microservices &amp; Cloud"</tspan>
  </text>

  <!-- closing tags -->
  <text x="140" y="452" fill="#e6edfa" font-family="monospace" font-size="15">    /&gt;</text>
  <text x="140" y="480" fill="#e6edfa" font-family="monospace" font-size="15">  );</text>

  <!-- Right side: Name and info -->
  <text x="700" y="215" fill="#e6edfa" font-family="sans-serif" font-size="42" font-weight="bold">Luiggi Paredes</text>

  <!-- Gradient line under name -->
  <rect x="700" y="230" width="320" height="3" rx="1.5" fill="url(#accent)" />

  <!-- Tagline -->
  <text x="700" y="268" fill="#ff8533" font-family="monospace" font-size="18">&lt;Backend.Architect /&gt;</text>

  <!-- Description -->
  <text x="700" y="310" fill="#8b8fa3" font-family="sans-serif" font-size="14">
    <tspan x="700" dy="0">Microservices | Cloud Architecture</tspan>
    <tspan x="700" dy="22">NestJS | Spring Boot | TypeScript</tspan>
    <tspan x="700" dy="22">SUNAT Electronic Billing</tspan>
  </text>

  <!-- Tech badges -->
  <rect x="700" y="380" width="80" height="28" rx="6" fill="rgba(0,102,255,0.15)" stroke="#3399ff" stroke-width="0.5" />
  <text x="740" y="399" fill="#3399ff" font-family="monospace" font-size="12" text-anchor="middle">NestJS</text>

  <rect x="790" y="380" width="100" height="28" rx="6" fill="rgba(0,102,255,0.15)" stroke="#3399ff" stroke-width="0.5" />
  <text x="840" y="399" fill="#3399ff" font-family="monospace" font-size="12" text-anchor="middle">Spring Boot</text>

  <rect x="900" y="380" width="75" height="28" rx="6" fill="rgba(0,102,255,0.15)" stroke="#3399ff" stroke-width="0.5" />
  <text x="937" y="399" fill="#3399ff" font-family="monospace" font-size="12" text-anchor="middle">Docker</text>

  <rect x="985" y="380" width="65" height="28" rx="6" fill="rgba(0,102,255,0.15)" stroke="#3399ff" stroke-width="0.5" />
  <text x="1017" y="399" fill="#3399ff" font-family="monospace" font-size="12" text-anchor="middle">Kafka</text>

  <!-- Status badge -->
  <rect x="700" y="430" width="140" height="30" rx="8" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.3)" stroke-width="1" />
  <circle cx="720" cy="445" r="4" fill="#22c55e" />
  <text x="735" y="450" fill="#22c55e" font-family="monospace" font-size="12">OPEN_TO_WORK</text>

  <!-- URL at bottom -->
  <text x="700" y="490" fill="#6e7681" font-family="monospace" font-size="13">codegito.lat</text>

  <!-- Bottom border accent -->
  <rect x="0" y="626" width="1200" height="4" fill="url(#accent)" />
</svg>`;

  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};

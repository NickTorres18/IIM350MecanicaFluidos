// datos.js — IIM251 Mecánica de Sistemas Fluídos — Unidad 1 completa
const baseDatosTeoria = {
  "unidad1": {

    /* =====================================================================
       CLASE 1: PRINCIPIOS FUNDAMENTALES
       ===================================================================== */
    "tema1": {
      "titulo": "Clase 1: Principios Fundamentales",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1. Hipótesis del Continuo</h2>
<p>Se asume que el fluido es un <b>medio continuo</b>: la materia llena el espacio de forma continua sin huecos. Las propiedades (densidad, presión, velocidad, temperatura) se definen en cada punto del espacio y varían de forma continua.</p>
<p>El parámetro que indica la validez de la hipótesis es el <b>Número de Knudsen</b>:</p>
<div class="caja-formula">Kn = λ / L</div>
<p>donde λ es el camino libre medio molecular y L la escala característica del problema.</p>

<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.93em">
  <thead><tr style="background:rgba(0,210,255,0.15)">
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Kn</th>
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Régimen</th>
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Aplicabilidad</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">&lt; 0.001</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Continuo</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Mec. de Fluidos clásica</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">0.001–0.1</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Transición</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Efectos de resbalamiento</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">0.1–10</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Rarefacto</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Teoría cinética</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">&gt; 10</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Molecular libre</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Dinámica molecular</td></tr>
  </tbody>
</table>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2. Variables Termodinámicas</h2>
<div class="caja-formula">P = ρ R T &nbsp;(gas ideal, R = Rᵤ/M)</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Propiedades de los Fluidos</h2>
<p><b>Densidad, Peso Específico y Gravedad Específica:</b></p>
<div class="caja-formula">ρ = m/V [kg/m³] &nbsp;·&nbsp; γ = ρg [N/m³] &nbsp;·&nbsp; SG = ρ<sub>fluido</sub>/1000</div>

<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.92em">
  <thead><tr style="background:rgba(0,210,255,0.15)">
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Fluido</th>
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:center">ρ (kg/m³)</th>
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:center">γ (kN/m³)</th>
    <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:center">SG</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Agua</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">998</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">9.79</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">1.00</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Mercurio</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">13 550</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">132.9</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">13.55</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Aceite mineral</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">~880</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">~8.63</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">~0.88</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Glicerina</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">1 260</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">12.36</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">1.26</td></tr>
    <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Aire</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">1.204</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">0.0118</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2);text-align:center">0.00120</td></tr>
  </tbody>
</table>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.2 Viscosidad Dinámica — Ley de Newton</h2>
<p>Dos placas paralelas separadas h. Placa inferior fija (u=0), superior móvil con velocidad U.</p>

<iframe src="img_placas.html" style="width:100%;height:240px;border:none;border-radius:8px;display:block;margin:16px 0;background:#021223;" scrolling="no"></iframe>

<div class="caja-formula">τ = μ · du/dy &nbsp;[Pa]</div>
<p><b>Unidades:</b> μ [Pa·s] = [N·s/m²] = [kg/(m·s)]. &nbsp;Para agua a 20°C: μ = 1.002×10⁻³ Pa·s &nbsp;·&nbsp; Para aire: μ = 1.81×10⁻⁵ Pa·s.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.3 Viscosidad Cinemática</h2>
<div class="caja-formula">ν = μ / ρ &nbsp;[m²/s]</div>
<p>Para agua a 20°C: ν = 1.004×10⁻⁶ m²/s.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.4 Fluidos Newtonianos y No Newtonianos</h2>

<iframe src="img_tau_gamma.html" style="width:100%;height:300px;border:none;border-radius:8px;display:block;margin:16px 0;background:#021223;" scrolling="no"></iframe>

<p><b>1. Clasificación según la tasa de deformación (Independientes del tiempo)</b></p>
<p>El primer gráfico muestra la relación entre el esfuerzo cortante aplicado ($\\tau$, medido en Pascales) y la tasa de deformación o gradiente de velocidad ($\\dot{\\gamma} = du/dy$, medida en $s^{-1}$). En estos fluidos, el comportamiento no depende de cuánto tiempo se aplique la fuerza, sino de la magnitud de la fuerza misma.</p>
<ul>
    <li><b style="color:#3498db;">Fluido Newtoniano (Línea azul):</b> Es el modelo más simple. Existe una relación lineal y directamente proporcional entre el esfuerzo cortante y la tasa de deformación, pasando por el origen. Su viscosidad ($\\mu$) es constante en todo momento.<br>
    <i>Ecuación fundamental:</i> $\\tau = \\mu \\frac{du}{dy}$</li>
    <li><b style="color:#e74c3c;">Fluido Pseudoplástico (Curva roja):</b> La curva es cóncava hacia abajo. A medida que aumenta la tasa de deformación, su viscosidad aparente disminuye (se vuelven "más delgados" o fluyen con más facilidad al agitarlos). Es el tipo de fluido no newtoniano más común.</li>
    <li><b style="color:#2ecc71;">Fluido Dilatante (Curva verde):</b> La curva es cóncava hacia arriba. Al contrario que los pseudoplásticos, su viscosidad aparente aumenta a medida que aumenta la tasa de deformación (se vuelven "más espesos" o rígidos al aplicarles fuerza rápida).</li>
    <li><b style="color:#e67e22;">Plástico de Bingham o Ideal (Línea naranja):</b> Este material se comporta como un sólido hasta que se supera un esfuerzo cortante inicial mínimo, llamado esfuerzo de fluencia ($\\tau_0$). Una vez superado este punto en el eje vertical, fluye de manera lineal, similar a un fluido newtoniano.<br>
    <i>Ecuación fundamental:</i> $\\tau = \\tau_0 + \\mu_p \\frac{du}{dy}$ (donde $\\mu_p$ es la viscosidad plástica).</li>
</ul>

<p><b>2. Clasificación según el tiempo (A tasa de deformación constante):</b></p>

<iframe src="img_mu_t.html" style="width:100%;height:280px;border:none;border-radius:8px;display:block;margin:16px 0;background:#021223;" scrolling="no"></iframe>

<p>El segundo gráfico aborda los fluidos cuya viscosidad aparente ($\\mu$) cambia dependiendo del tiempo ($t$) durante el cual se les somete a un esfuerzo cortante constante ($\\dot{\\gamma}$ = constante). Las líneas punteadas ($\\mu_\\infty$) representan la viscosidad de equilibrio que el fluido alcanza después de un tiempo prolongado.</p>
<ul>
    <li><b style="color:#b3bdc6;">Fluido Newtoniano (Línea gris punteada):</b> Sirve como referencia. Como era de esperar, su viscosidad permanece totalmente inalterada con el paso del tiempo.</li>
    <li><b style="color:#e74c3c;">Fluido Tixotrópico (Curva roja):</b> Bajo un esfuerzo cortante constante, su viscosidad aparente disminuye gradualmente con el tiempo hasta alcanzar un valor de equilibrio. Esto ocurre porque la estructura interna del fluido se va "rompiendo" o alineando progresivamente. Si se deja en reposo, recupera su viscosidad inicial.</li>
    <li><b style="color:#3498db;">Fluido Reopético (Curva azul):</b> Es el fenómeno inverso (y mucho menos común). Bajo un esfuerzo constante, su viscosidad aparente aumenta con el tiempo hasta llegar a un máximo. La fuerza aplicada ayuda a "construir" o entrelazar la estructura interna del material.</li>
</ul>

<h3 style="color:var(--color-acento); font-size:1.1em; margin-top:25px; margin-bottom:10px;">Tabla Resumen de Ejemplos Comunes</h3>
<p>Para darle más contexto a tu profesor, siempre es útil acompañar la teoría con ejemplos del mundo real:</p>
<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.92em">
    <thead>
        <tr style="background:rgba(0,210,255,0.15)">
            <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Tipo de Fluido</th>
            <th style="padding:8px 10px;border:1px solid rgba(0,210,255,0.3);text-align:left">Ejemplos Comunes en la Vida Real</th>
        </tr>
    </thead>
    <tbody>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Newtoniano</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Agua, aire, aceites minerales, gasolina.</td></tr>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Pseudoplástico</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Pintura, kétchup, sangre, pulpa de papel.</td></tr>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Dilatante</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Maicena con agua (fluido no newtoniano casero), arena mojada.</td></tr>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Bingham</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Pasta de dientes, mayonesa, lodo de perforación.</td></tr>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Tixotrópico</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Yogur, algunas pinturas antigoteo, tintas de bolígrafo.</td></tr>
        <tr><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Reopético</td><td style="padding:7px 10px;border:1px solid rgba(0,210,255,0.2)">Pastas de yeso, ciertas arcillas bentoníticas, lubricantes específicos.</td></tr>
    </tbody>
</table>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.5 Tensión Superficial</h2>

<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="fArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
    <marker id="fArrB" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#00d2ff"/>
    </marker>
  </defs>

  <line x1="20" y1="95" x2="400" y2="95" stroke="#00d2ff" stroke-width="2"/>
  <text x="305" y="90" fill="#00d2ff" font-size="11" font-weight="bold">Superficie</text>

  <text x="310" y="60" fill="#8fa3b4" font-size="11">Gas/Vapor</text>

  <text x="310" y="160" fill="#8fa3b4" font-size="11">Líquido</text>

  <circle cx="110" cy="145" r="14" fill="rgba(0,210,255,0.25)" stroke="#00d2ff" stroke-width="1.5"/>
  <line x1="110" y1="131" x2="110" y2="118" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#fArrB)"/>
  <line x1="110" y1="159" x2="110" y2="172" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#fArrB)"/>
  <line x1="96" y1="145" x2="82" y2="145" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#fArrB)"/>
  <line x1="124" y1="145" x2="138" y2="145" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#fArrB)"/>
  <text x="80" y="185" fill="#00d2ff" font-size="9">Fuerza de cohesión</text>
  <text x="58" y="198" fill="#8fa3b4" font-size="9">Molécula interior — F⃗neta = 0</text>

  <circle cx="230" cy="90" r="14" fill="rgba(231,76,60,0.2)" stroke="#e74c3c" stroke-width="1.5"/>
  <text x="195" y="75" fill="#8fa3b4" font-size="9">Molécula</text>
  <text x="193" y="86" fill="#8fa3b4" font-size="9">en superficie</text>
  <line x1="230" y1="104" x2="230" y2="125" stroke="#e74c3c" stroke-width="1.5" marker-end="url(#fArr)"/>
  <line x1="216" y1="90" x2="200" y2="90" stroke="#e74c3c" stroke-width="1.5" marker-end="url(#fArr)"/>
  <line x1="244" y1="90" x2="260" y2="90" stroke="#e74c3c" stroke-width="1.5" marker-end="url(#fArr)"/>
  <line x1="230" y1="108" x2="230" y2="145" stroke="#e74c3c" stroke-width="3" marker-end="url(#fArr)"/>
  <text x="235" y="148" fill="#e74c3c" font-size="9">F̄neta (hacia adentro)</text>
  <text x="235" y="159" fill="#e74c3c" font-size="9">Fuerza neta resultante</text>
</svg>

<div class="caja-formula">ΔP<sub>burbuja</sub> = 4σ/R &nbsp;·&nbsp; ΔP<sub>gota</sub> = 2σ/R</div>
<p>Para agua a 20°C: σ = 0.0728 N/m.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.6 Módulo de Elasticidad Volumétrico</h2>
<div class="caja-formula">K = −V · dP/dV|<sub>T</sub> = ρ · dP/dρ|<sub>T</sub> &nbsp;[Pa]</div>
<div class="caja-formula">c = √(K/ρ) &nbsp;→ &nbsp;c<sub>agua</sub> ≈ 1450 m/s</div>
<p>Para el agua: K ≈ 2.1×10⁹ Pa.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3.7 Presión de Vapor</h2>
<p>La presión de vapor P<sub>v</sub> es la presión a la que un líquido hierve a una temperatura dada. Si la presión local cae por debajo de P<sub>v</sub> se forman burbujas de vapor (<b>cavitación</b>).</p>
<p>Para el agua: P<sub>v</sub>(20°C) = 2.34 kPa &nbsp;·&nbsp; P<sub>v</sub>(100°C) = 101.3 kPa.</p>


<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase1" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 1 🚀
    </a>
  
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase1" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 1</a>
  
</div>

`




    },

    /* =====================================================================
       CLASE 2: PRESIÓN Y MANOMETRÍA
       ===================================================================== */
    "tema2": {
      "titulo": "Clase 2: Presión y Manometría",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1. Concepto de Presión</h2>
<p>La presión en un punto es la fuerza normal por unidad de área ejercida por un fluido:</p>
<div class="caja-formula">P = lim<sub>ΔA→0</sub> (ΔFₙ / ΔA) &nbsp;[Pa = N/m²]</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1.1 Presión Isotrópica — Cuña de Pascal</h2>
<p>Equilibrio de una pequeña cuña de fluido en reposo con ángulo θ, lados Δx, Δy, Δs:</p>

<svg viewBox="0 0 420 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="cArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#8fa3b4"/>
    </marker>
  </defs>

  <polygon points="130,50 280,50 280,170" fill="rgba(0,210,255,0.15)" stroke="#00d2ff" stroke-width="1.5"/>

  <path d="M280,150 A18,18 0 0,0 263,170" fill="none" stroke="#8fa3b4" stroke-width="1.2"/>
  <text x="254" y="162" fill="#8fa3b4" font-size="11" font-style="italic">θ</text>

  <text x="193" y="108" fill="#ecf0f1" font-size="11" font-style="italic">Δs</text>

  <text x="197" y="185" fill="#ecf0f1" font-size="11" font-style="italic">Δx</text>

  <text x="284" y="115" fill="#ecf0f1" font-size="11" font-style="italic">Δy</text>

  <text x="190" y="140" fill="#8fa3b4" font-size="10" font-style="italic">W ≈ 0</text>
  <line x1="205" y1="133" x2="205" y2="155" stroke="#8fa3b4" stroke-width="1" marker-end="url(#cArr)"/>

  <line x1="60" y1="110" x2="128" y2="110" stroke="#e74c3c" stroke-width="2" marker-end="url(#cArr)"/>
  <text x="15" y="115" fill="#e74c3c" font-size="10">Pₓ·Δy·Δz</text>

  <line x1="205" y1="200" x2="205" y2="172" stroke="#2ecc71" stroke-width="2" marker-end="url(#cArr)"/>
  <text x="165" y="218" fill="#2ecc71" font-size="10">Pᵧ·Δx·Δz</text>

  <line x1="350" y1="55" x2="283" y2="100" stroke="#e67e22" stroke-width="2" marker-end="url(#cArr)"/>
  <text x="352" y="52" fill="#e67e22" font-size="10">Pₛ·Δs·Δz</text>

  <rect x="80" y="195" width="200" height="26" fill="rgba(0,210,255,0.1)" stroke="rgba(0,210,255,0.4)" rx="4"/>
  <text x="180" y="212" fill="#00d2ff" font-size="13" text-anchor="middle" font-weight="bold">Pₓ = Pᵧ = Pₛ</text>
</svg>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2. Tipos de Presión</h2>
<div class="caja-formula">P<sub>abs</sub> = P<sub>atm</sub> + P<sub>man</sub> &nbsp;·&nbsp; P<sub>abs</sub> = P<sub>atm</sub> − P<sub>vac</sub></div>

<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:420px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="pArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#8fa3b4"/>
    </marker>
  </defs>

  <line x1="60" y1="185" x2="60" y2="15" stroke="#8fa3b4" stroke-width="2" marker-end="url(#pArr)"/>
  <text x="63" y="13" fill="#8fa3b4" font-size="12" font-style="italic">P</text>

  <line x1="58" y1="100" x2="350" y2="100" stroke="#00d2ff" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="260" y="97" fill="#00d2ff" font-size="10">Pₐₜₘ</text>

  <line x1="58" y1="182" x2="350" y2="182" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="180" y="193" fill="#8fa3b4" font-size="9">Vacío absoluto (P = 0)</text>
  <text x="48" y="185" fill="#8fa3b4" font-size="10">0</text>

  <rect x="90" y="50" width="140" height="48" fill="rgba(0,210,255,0.12)" stroke="rgba(0,210,255,0.4)" rx="2"/>
  <line x1="75" y1="100" x2="75" y2="52" stroke="#ecf0f1" stroke-width="1.5"/>
  <line x1="71" y1="100" x2="79" y2="100" stroke="#ecf0f1" stroke-width="1"/>
  <line x1="71" y1="52" x2="79" y2="52" stroke="#ecf0f1" stroke-width="1"/>
  <text x="82" y="80" fill="#ecf0f1" font-size="10">Pₘₐₙ &gt; 0</text>
  <line x1="58" y1="52" x2="350" y2="52" stroke="#8fa3b4" stroke-width="1"/>
  <text x="260" y="49" fill="#8fa3b4" font-size="10">Pₐᵦₛ &gt; Pₐₜₘ</text>

  <rect x="90" y="102" width="140" height="48" fill="rgba(231,76,60,0.10)" stroke="rgba(231,76,60,0.35)" rx="2"/>
  <line x1="75" y1="100" x2="75" y2="148" stroke="#e74c3c" stroke-width="1.5"/>
  <line x1="71" y1="100" x2="79" y2="100" stroke="#e74c3c" stroke-width="1"/>
  <line x1="71" y1="148" x2="79" y2="148" stroke="#e74c3c" stroke-width="1"/>
  <text x="82" y="128" fill="#e74c3c" font-size="10">Pᵥₐc &gt; 0</text>
  <line x1="58" y1="148" x2="350" y2="148" stroke="#8fa3b4" stroke-width="1"/>
  <text x="260" y="162" fill="#8fa3b4" font-size="10">Pₐᵦₛ &lt; Pₐₜₘ</text>
</svg>

<p style="font-size:0.9em;color:#8fa3b4;text-align:center">P<sub>atm</sub> a nivel del mar = 101 325 Pa = 101.325 kPa = 1 atm = 760 mmHg</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Variación de Presión con la Profundidad</h2>
<div class="caja-formula">dP/dz = −γ = −ρg &nbsp;→ &nbsp;P = P₀ + ρgh</div>
<p><b>Principio fundamental:</b> En un fluido en reposo, dos puntos a la misma elevación tienen la misma presión, siempre que sean parte del mismo fluido continuo.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">4. Manometría</h2>
<p><b>Regla:</b> Bajar → sumar ρg·Δh &nbsp;·&nbsp; Subir → restar ρg·Δh</p>

<svg viewBox="0 0 380 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="mArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
  </defs>

  <rect x="80" y="30" width="14" height="160" fill="none" stroke="#8fa3b4" stroke-width="2"/>
  <rect x="80" y="189" width="100" height="14" fill="rgba(180,180,200,0.55)" stroke="#8fa3b4" stroke-width="2"/>
  <rect x="178" y="30" width="14" height="160" fill="none" stroke="#8fa3b4" stroke-width="2"/>

  <rect x="82" y="70" width="10" height="55" fill="rgba(0,210,255,0.35)"/>
  <text x="100" y="103" fill="#00d2ff" font-size="11" font-weight="bold">Fluido</text>
  <text x="100" y="117" fill="#00d2ff" font-size="10">(ρ₁)</text>

  <rect x="82" y="127" width="14" height="75" fill="rgba(180,180,200,0.55)"/>
  <rect x="180" y="115" width="14" height="90" fill="rgba(180,180,200,0.55)"/>
  <text x="86" y="162" fill="#b0b0b0" font-size="11" font-weight="bold">Hg</text>
  <text x="184" y="155" fill="#b0b0b0" font-size="10">(ρₘ)</text>

  <circle cx="108" cy="70" r="5" fill="#e74c3c"/>
  <text x="118" y="68" fill="#e74c3c" font-size="11" font-weight="bold">A</text>

  <line x1="50" y1="38" x2="88" y2="38" stroke="#ecf0f1" stroke-width="1.5" marker-end="url(#mArr)"/>
  <text x="30" y="42" fill="#ecf0f1" font-size="11">Pₐ</text>

  <line x1="300" y1="38" x2="234" y2="38" stroke="#8fa3b4" stroke-width="1.5" marker-end="url(#mArr)"/>
  <text x="302" y="42" fill="#8fa3b4" font-size="10">Pₐₜₘ</text>

  <line x1="80" y1="127" x2="290" y2="127" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="295" y="130" fill="#8fa3b4" font-size="9">nivel ref.</text>
  <text x="112" y="126" fill="#8fa3b4" font-size="8">interfaz</text>

  <line x1="68" y1="70" x2="68" y2="127" stroke="#00d2ff" stroke-width="1.5"/>
  <line x1="64" y1="70" x2="72" y2="70" stroke="#00d2ff" stroke-width="1"/>
  <line x1="64" y1="127" x2="72" y2="127" stroke="#00d2ff" stroke-width="1"/>
  <text x="42" y="102" fill="#00d2ff" font-size="11" font-style="italic">h₁</text>

  <line x1="285" y1="115" x2="285" y2="127" stroke="#b0b0b0" stroke-width="1.5"/>
  <line x1="281" y1="115" x2="289" y2="115" stroke="#b0b0b0" stroke-width="1"/>
  <line x1="281" y1="127" x2="289" y2="127" stroke="#b0b0b0" stroke-width="1"/>
  <text x="292" y="123" fill="#b0b0b0" font-size="11" font-style="italic">h₂</text>
</svg>

<div class="caja-formula">P<sub>A</sub> = P<sub>atm</sub> + ρ<sub>m</sub>·g·h₂ − ρ₁·g·h₁</div>

<p><b>Manómetro diferencial:</b></p>
<div class="caja-formula">P<sub>A</sub> − P<sub>B</sub> = (ρ<sub>m</sub> − ρ<sub>f</sub>)·g·Δh</div>

<p><b>Barómetro de mercurio:</b></p>
<div class="caja-formula">P<sub>atm</sub> = ρ<sub>Hg</sub>·g·H &nbsp;→ &nbsp;con H = 760 mm → 101 088 Pa ≈ 101.1 kPa</div>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase2" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 2 🚀
    </a>
    <div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase2" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 2</a>
  
</div>



</div>
`
    },

    /* =====================================================================
       CLASE 3: ECUACIÓN FUNDAMENTAL DE LA ESTÁTICA
       ===================================================================== */
    "tema3": {
      "titulo": "Clase 3: Ecuación Fundamental de la Estática",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1. Derivación — Elemento Diferencial de Fluido</h2>
<p>Para un elemento de fluido en reposo dm = ρ dx dy dz:</p>

<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="eArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
    <marker id="eArrC" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#00d2ff"/>
    </marker>
    <marker id="eArrR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <line x1="50" y1="200" x2="50" y2="60" stroke="#8fa3b4" stroke-width="1.5" marker-end="url(#eArr)"/>
  <text x="44" y="58" fill="#8fa3b4" font-size="11" font-style="italic">z</text>
  <line x1="50" y1="200" x2="180" y2="200" stroke="#8fa3b4" stroke-width="1.5" marker-end="url(#eArr)"/>
  <text x="183" y="204" fill="#8fa3b4" font-size="11" font-style="italic">x</text>

  <rect x="100" y="110" width="100" height="80" fill="rgba(0,210,255,0.12)" stroke="#00d2ff" stroke-width="1.5"/>
  <polygon points="100,110 140,80 240,80 200,110" fill="rgba(0,210,255,0.08)" stroke="#00d2ff" stroke-width="1.5"/>
  <polygon points="200,110 240,80 240,160 200,190" fill="rgba(0,210,255,0.06)" stroke="#00d2ff" stroke-width="1.5"/>

  <text x="125" y="153" fill="#8fa3b4" font-size="9" font-style="italic">dm = ρ dV</text>
  <text x="125" y="164" fill="#8fa3b4" font-size="9" font-style="italic">W = ρg dx dy dz</text>
  <line x1="150" y1="168" x2="150" y2="188" stroke="#e74c3c" stroke-width="1.8" marker-end="url(#eArrR)"/>

  <line x1="52" y1="150" x2="98" y2="150" stroke="#00d2ff" stroke-width="2" marker-end="url(#eArrC)"/>
  <text x="15" y="148" fill="#00d2ff" font-size="9">P dy dz</text>
  <text x="10" y="159" fill="#8fa3b4" font-size="8">(cara izq.)</text>

  <line x1="298" y1="145" x2="202" y2="145" stroke="#e74c3c" stroke-width="2" marker-end="url(#eArrR)"/>
  <text x="300" y="138" fill="#e74c3c" font-size="8">(P + ∂P/∂x·dx) dy dz</text>

  <line x1="150" y1="218" x2="150" y2="192" stroke="#2ecc71" stroke-width="2" marker-end="url(#eArr)"/>
  <text x="115" y="232" fill="#2ecc71" font-size="9">P dx dy (cara inf.)</text>

  <line x1="165" y1="62" x2="165" y2="90" stroke="#e74c3c" stroke-width="2" marker-end="url(#eArrR)"/>
  <text x="170" y="60" fill="#e74c3c" font-size="8">(P + ∂P/∂z·dz) dx dy</text>
</svg>

<p>Balance en dirección z: &nbsp;∂P/∂z = −ρg = −γ<br>
Balance en x e y: &nbsp;∂P/∂x = 0 &nbsp;·&nbsp; ∂P/∂y = 0</p>

<div class="caja-formula">∇P = −ρg k̂ &nbsp;(forma vectorial)</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2. Integración — Fluidos Incompresibles</h2>
<div class="caja-formula">P₂ = P₁ + ρ·g·h</div>

<svg viewBox="0 0 380 218" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="tArr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
    <marker id="tArrR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
    <marker id="tArrC" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#00d2ff"/>
    </marker>
  </defs>

  <rect x="58" y="20" width="16" height="175" fill="#4a5568"/>
  <line x1="64" y1="30" x2="50" y2="44" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="30" x2="60" y2="44" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="50" x2="60" y2="64" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="70" x2="60" y2="84" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="90" x2="60" y2="104" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="110" x2="60" y2="124" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="130" x2="60" y2="144" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="150" x2="60" y2="164" stroke="#2d3748" stroke-width="1.5"/>
  <line x1="74" y1="170" x2="60" y2="184" stroke="#2d3748" stroke-width="1.5"/>

  <rect x="74" y="20" width="130" height="175" fill="rgba(0,210,255,0.13)"/>

  <line x1="74" y1="20" x2="205" y2="20" stroke="#00d2ff" stroke-width="2"/>
  <text x="210" y="24" fill="#00d2ff" font-size="10">sup. libre</text>
  <text x="210" y="36" fill="#8fa3b4" font-size="9">P₀ = Pₐₜₘ</text>

  <polygon points="74,20 74,195 150,195" fill="rgba(231,76,60,0.30)" stroke="#e74c3c" stroke-width="1.5"/>

  <line x1="220" y1="20" x2="220" y2="195" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="216" y1="20" x2="224" y2="20" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="216" y1="195" x2="224" y2="195" stroke="#8fa3b4" stroke-width="1"/>
  <text x="228" y="112" fill="#8fa3b4" font-size="11" font-style="italic">H</text>

  <line x1="240" y1="20" x2="240" y2="108" stroke="#00d2ff" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="244" y="68" fill="#00d2ff" font-size="10" font-style="italic">h̄ = H/2</text>

  <text x="100" y="210" fill="#e74c3c" font-size="9">Pₘₐₙ = ρgH</text>

  <line x1="52" y1="137" x2="72" y2="137" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#tArrR)"/>
  <text x="14" y="140" fill="#e74c3c" font-size="9" font-weight="bold">F<tspan dy="2" font-size="7">R</tspan></text>

  <circle cx="74" cy="137" r="3" fill="#e74c3c"/>
  <text x="262" y="140" fill="#e74c3c" font-size="9">CP  h = ²⁄₃H</text>
  <line x1="260" y1="20" x2="260" y2="137" stroke="#e74c3c" stroke-width="1" stroke-dasharray="3,3"/>
</svg>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.1 Fluidos en Capas</h2>
<div class="caja-formula">P<sub>fondo</sub> = P<sub>sup</sub> + g · Σ ρᵢ hᵢ</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Principio de Pascal y Prensa Hidráulica</h2>
<p>Un cambio de presión en un fluido cerrado se transmite íntegramente a cada punto.</p>
<div class="caja-formula">F₂ = F₁ · (A₂/A₁) &nbsp;·&nbsp; A₁·Δz₁ = A₂·Δz₂</div>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase3" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 3 🚀
    </a>
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase3" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 3</a>
  
</div>
`
    },

    /* =====================================================================
       CLASE 4: FUERZAS SOBRE SUPERFICIES PLANAS
       ===================================================================== */
    "tema4": {
      "titulo": "Clase 4: Fuerzas sobre Superficies Planas",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.1 Fuerza Resultante F<sub>R</sub></h2>

<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="s4a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
    <marker id="s4r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <line x1="30" y1="25" x2="350" y2="25" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="280" y="22" fill="#00d2ff" font-size="10">Sup. libre (P₀)</text>

  <rect x="30" y="25" width="180" height="165" fill="rgba(0,210,255,0.10)"/>

  <line x1="18" y1="25" x2="18" y2="100" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="14" y1="100" x2="22" y2="100" stroke="#8fa3b4" stroke-width="1"/>
  <text x="22" y="68" fill="#8fa3b4" font-size="9" font-style="italic">h̄</text>

  <line x1="8" y1="25" x2="8" y2="128" stroke="#e74c3c" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="4" y1="128" x2="12" y2="128" stroke="#e74c3c" stroke-width="1"/>
  <text x="12" y="95" fill="#e74c3c" font-size="9" font-style="italic">h<tspan dy="2" font-size="7">cp</tspan></text>

  <rect x="30" y="55" width="14" height="110" fill="rgba(0,210,255,0.5)" stroke="#00d2ff" stroke-width="1.5"/>

  <rect x="30" y="95" width="14" height="10" fill="rgba(255,255,0,0.35)" stroke="#f0e030" stroke-width="1"/>
  <text x="48" y="104" fill="#f0e030" font-size="9" font-style="italic">dA = b dy</text>
  <line x1="62" y1="100" x2="75" y2="100" stroke="#f0e030" stroke-width="0.8"/>

  <line x1="95" y1="70" x2="46" y2="70" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="115" y1="88" x2="46" y2="88" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="135" y1="106" x2="46" y2="106" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="155" y1="124" x2="46" y2="124" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="170" y1="142" x2="46" y2="142" stroke="#00d2ff" stroke-width="1.5" marker-end="url(#s4a)"/>

  <line x1="210" y1="128" x2="165" y2="128" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#s4r)"/>
  <text x="214" y="132" fill="#e74c3c" font-size="10" font-weight="bold">F<tspan dy="3" font-size="8">R</tspan></text>

  <circle cx="44" cy="128" r="4" fill="#e74c3c"/>
  <text x="50" y="145" fill="#e74c3c" font-size="9">CP</text>

  <line x1="240" y1="25" x2="240" y2="180" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#s4a)"/>
  <text x="244" y="110" fill="#8fa3b4" font-size="10" font-style="italic">y</text>
  <text x="244" y="122" fill="#8fa3b4" font-size="8">↕ dy</text>
</svg>

<div class="caja-formula">F<sub>R</sub> = P̄ · A = ρ·g·h̄·A</div>
<p>La fuerza resultante es igual a la <b>presión en el centroide</b> multiplicada por el área total. El centro de presión siempre está más profundo que el centroide.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.2 Centro de Presión y<sub>cp</sub></h2>
<div class="caja-formula">y<sub>cp</sub> = ȳ + I<sub>xc</sub> / (ȳ · A)</div>

<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.92em">
  <thead><tr style="background:rgba(0,210,255,0.15)">
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">Forma</th>
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">Área A</th>
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">ȳ (vértice sup.)</th>
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">I<sub>xc</sub></th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Rectángulo (b×h)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">bh</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">h/2</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">bh³/12</td></tr>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Círculo (radio R)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">πR²</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">(centroide)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">πR⁴/4</td></tr>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Triángulo (b×h)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">bh/2</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">2h/3 (vértice)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">bh³/36</td></tr>
  </tbody>
</table>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Superficie Plana Inclinada (ángulo θ)</h2>

<svg viewBox="0 0 380 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="i4a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
    <marker id="i4r" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <line x1="30" y1="20" x2="380" y2="20" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="285" y="16" fill="#00d2ff" font-size="9">Sup. libre (P₀)</text>

  <rect x="30" y="20" width="230" height="170" fill="rgba(0,210,255,0.09)"/>

  <line x1="80" y1="20" x2="250" y2="185" stroke="#00d2ff" stroke-width="2.5"/>
  <polygon points="70,20 90,20 260,185 240,185" fill="rgba(0,210,255,0.30)" stroke="#00d2ff" stroke-width="1"/>

  <path d="M80,20 A35,35 0 0,1 108,38" fill="none" stroke="#8fa3b4" stroke-width="1.2"/>
  <text x="90" y="38" fill="#8fa3b4" font-size="11" font-style="italic">θ</text>

  <line x1="68" y1="18" x2="245" y2="178" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#i4a)"/>
  <text x="250" y="182" fill="#8fa3b4" font-size="10" font-style="italic">ξ</text>

  <circle cx="165" cy="103" r="4" fill="#8fa3b4"/>
  <text x="172" y="100" fill="#8fa3b4" font-size="9">● ξ̄ (centroide)</text>

  <circle cx="188" cy="125" r="4" fill="#e74c3c"/>
  <text x="195" y="130" fill="#e74c3c" font-size="9">● CP: ξ<tspan dy="2" font-size="7">cp</tspan></text>

  <line x1="300" y1="118" x2="245" y2="103" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#i4r)"/>
  <text x="305" y="120" fill="#e74c3c" font-size="10" font-weight="bold">F<tspan dy="3" font-size="7">R</tspan></text>

  <line x1="165" y1="103" x2="165" y2="20" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="170" y="65" fill="#8fa3b4" font-size="9">h̄ = ξ̄·sinθ</text>

  <line x1="30" y1="185" x2="30" y2="30" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="2,3" marker-end="url(#i4a)"/>
  <text x="34" y="30" fill="#8fa3b4" font-size="9" font-style="italic">z</text>
</svg>

<div class="caja-formula">F<sub>R</sub> = ρ·g·ξ̄·sinθ·A &nbsp;·&nbsp; ξ<sub>cp</sub> = ξ̄ + I<sub>xc</sub>/(ξ̄·A) &nbsp;·&nbsp; h<sub>cp</sub> = ξ<sub>cp</sub>·sinθ</div>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase4" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 4 🚀
    </a>
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase4" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 4</a>
  
</div>
`
    },

    /* =====================================================================
       CLASE 5: FUERZAS SOBRE SUPERFICIES CURVAS
       ===================================================================== */
    "tema5": {
      "titulo": "Clase 5: Fuerzas sobre Superficies Curvas",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.1 Componente Horizontal F<sub>H</sub></h2>
<div class="caja-formula">F<sub>H</sub> = ρ·g·h̄<sub>v</sub>·A<sub>v</sub></div>
<p>Igual a la fuerza hidrostática sobre la <b>proyección vertical plana</b> de la superficie curva. Su punto de aplicación se calcula con la fórmula del CP para la proyección plana.</p>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.2 Componente Vertical F<sub>V</sub></h2>
<div class="caja-formula">F<sub>V</sub> = ρ·g·V<sub>fluido sobre curva</sub></div>
<ul>
  <li>Si el fluido está encima de la curva: F<sub>V</sub> apunta <b>hacia abajo</b>.</li>
  <li>Si la curva es cóncava hacia arriba (fluido bajo la curva): F<sub>V</sub> apunta <b>hacia arriba</b>.</li>
</ul>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2.3 Fuerza Resultante</h2>
<div class="caja-formula">F<sub>R</sub> = √(F<sub>H</sub>² + F<sub>V</sub>²) &nbsp;·&nbsp; tan α = F<sub>V</sub>/F<sub>H</sub></div>
<p>Para superficies circulares, F<sub>R</sub> pasa por el <b>centro del arco</b>.</p>

<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="c5h" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#e74c3c"/>
    </marker>
    <marker id="c5v" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#2ecc71"/>
    </marker>
    <marker id="c5b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
  </defs>

  <line x1="30" y1="35" x2="330" y2="35" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="6,4"/>
  <text x="235" y="32" fill="#00d2ff" font-size="10">Sup. libre</text>

  <rect x="238" y="35" width="15" height="160" fill="#4a5568"/>

  <path d="M80,35 A160,160 0 0,1 240,195 L238,195 L238,35 Z" fill="rgba(0,210,255,0.16)"/>

  <path d="M80,35 A160,160 0 0,1 240,195" fill="none" stroke="#00d2ff" stroke-width="2.5"/>
  <line x1="30" y1="195" x2="240" y2="195" stroke="#4a5568" stroke-width="3"/>

  <line x1="295" y1="115" x2="242" y2="115" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#c5h)"/>
  <text x="300" y="119" fill="#e74c3c" font-size="11" font-weight="bold">F<tspan dy="3" font-size="8">H</tspan></text>

  <line x1="145" y1="210" x2="145" y2="198" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#c5v)"/>
  <text x="150" y="220" fill="#2ecc71" font-size="11" font-weight="bold">F<tspan dy="3" font-size="8">V</tspan></text>

  <circle cx="80" cy="195" r="5" fill="#00d2ff"/>
  <text x="55" y="212" fill="#00d2ff" font-size="11" font-weight="bold">O</text>

  <line x1="80" y1="35" x2="80" y2="195" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="50" y="118" fill="#8fa3b4" font-size="10" font-style="italic">R = 2 m</text>
  <line x1="80" y1="195" x2="240" y2="195" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="145" y="212" fill="#8fa3b4" font-size="10" font-style="italic">R = 2 m</text>
</svg>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">Integración Directa — Compuerta Parabólica z = x²</h2>

<svg viewBox="0 0 360 230" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:380px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="p5h" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
    <marker id="p5v" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2ecc71"/>
    </marker>
    <marker id="p5x" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
  </defs>

  <line x1="60" y1="195" x2="290" y2="195" stroke="#8fa3b4" stroke-width="1.5" marker-end="url(#p5x)"/>
  <text x="293" y="199" fill="#8fa3b4" font-size="11" font-style="italic">x (m)</text>
  <line x1="60" y1="195" x2="60" y2="20" stroke="#8fa3b4" stroke-width="1.5" marker-end="url(#p5x)"/>
  <text x="63" y="18" fill="#8fa3b4" font-size="11" font-style="italic">z (m)</text>

  <line x1="60" y1="38" x2="290" y2="38" stroke="#00d2ff" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="210" y="34" fill="#00d2ff" font-size="9">z = H = 3 m</text>

  <rect x="60" y="38" width="170" height="157" fill="rgba(0,210,255,0.10)"/>

  <path d="M60.0,195.0 L70.0,194.3 L80.0,192.2 L90.0,188.7 L100.0,183.8 L110.0,177.5 L120.0,169.8 L130.0,160.7 L140.0,150.2 L150.0,138.3 L160.0,125.0 L170.0,110.3 L180.0,94.2 L190.0,76.7 L200.0,57.8 L210.0,37.5 L210.0,195.0 Z" fill="rgba(0,210,255,0.30)" stroke="none"/>
  <path d="M60.0,195.0 L70.0,194.3 L80.0,192.2 L90.0,188.7 L100.0,183.8 L110.0,177.5 L120.0,169.8 L130.0,160.7 L140.0,150.2 L150.0,138.3 L160.0,125.0 L170.0,110.3 L180.0,94.2 L190.0,76.7 L200.0,57.8 L210.0,37.5" fill="none" stroke="#00d2ff" stroke-width="2.5"/>

  <circle cx="210" cy="37.5" r="4" fill="#00d2ff"/>
  <text x="215" y="35" fill="#8fa3b4" font-size="9">(1.5; 2.25)</text>

  <text x="40" y="200" fill="#8fa3b4" font-size="9">(0,0)</text>

  <rect x="143" y="38" width="6" height="106.4" fill="rgba(255,200,0,0.3)" stroke="#f0e030" stroke-width="1"/>
  <text x="155" y="75" fill="#f0e030" font-size="8">dAᵥ = L dx</text>

  <line x1="146" y1="38" x2="146" y2="144.4" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="118" y="78" fill="#8fa3b4" font-size="8">H−z<tspan dy="2" font-size="6">c</tspan></text>

  <line x1="295" y1="115" x2="235" y2="115" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#p5h)"/>
  <text x="298" y="119" fill="#e74c3c" font-size="10" font-weight="bold">F<tspan dy="3" font-size="7">H</tspan></text>

  <line x1="110" y1="210" x2="110" y2="198" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#p5v)"/>
  <text x="115" y="220" fill="#2ecc71" font-size="10" font-weight="bold">F<tspan dy="3" font-size="7">V</tspan></text>
</svg>

<div class="caja-formula">F<sub>V</sub> = ρ·g·L · ∫₀<sup>x₁</sup> [H − f(x)] dx</div>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase5" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 5 🚀
    </a>
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase5" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 5</a>
  
</div>
`
    },

    /* =====================================================================
       CLASE 6: FLOTABILIDAD Y ESTABILIDAD
       ===================================================================== */
    "tema6": {
      "titulo": "Clase 6: Flotabilidad y Estabilidad",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1. Parcela de Fluido — Empuje</h2>

<svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="f6u" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#00d2ff"/>
    </marker>
    <marker id="f6d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <line x1="20" y1="28" x2="360" y2="28" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="270" y="24" fill="#00d2ff" font-size="9">Sup. libre</text>

  <rect x="20" y="28" width="340" height="140" fill="rgba(0,210,255,0.10)"/>
  <text x="30" y="160" fill="#8fa3b4" font-size="10" font-style="italic">Fluido ρ<tspan dy="2" font-size="8">f</tspan></text>

  <ellipse cx="190" cy="105" rx="75" ry="52" fill="rgba(0,210,255,0.30)" stroke="#00d2ff" stroke-width="2"/>
  <text x="165" y="101" fill="#ecf0f1" font-size="11" font-weight="bold">Parcela</text>
  <text x="170" y="115" fill="#ecf0f1" font-size="11" font-weight="bold">de fluido</text>
  <text x="172" y="129" fill="#8fa3b4" font-size="9">Vol. V</text>

  <line x1="190" y1="45" x2="190" y2="53" stroke="#00d2ff" stroke-width="3" marker-end="url(#f6u)"/>
  <text x="200" y="48" fill="#00d2ff" font-size="10" font-weight="bold">F<tspan dy="3" font-size="7">B</tspan> = ρ<tspan dy="2" font-size="7">f</tspan>gV</text>

  <line x1="190" y1="155" x2="190" y2="163" stroke="#e74c3c" stroke-width="3" marker-end="url(#f6d)"/>
  <text x="135" y="175" fill="#e74c3c" font-size="10">F<tspan dy="2" font-size="7">B</tspan> = W &nbsp;→&nbsp; Equilibrio</text>

  <text x="55" y="75" fill="#8fa3b4" font-size="9">F<tspan dy="2" font-size="7">B</tspan> = W = ρ<tspan dy="2" font-size="7">f</tspan>gV</text>
  <text x="55" y="88" fill="#8fa3b4" font-size="8">Equilibrio</text>
</svg>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2. Sólido Sumergido</h2>

<svg viewBox="0 0 380 175" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="s6u" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2ecc71"/>
    </marker>
    <marker id="s6d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>
  <line x1="20" y1="25" x2="360" y2="25" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="270" y="21" fill="#00d2ff" font-size="9">Sup. libre</text>
  <rect x="20" y="25" width="340" height="138" fill="rgba(0,210,255,0.08)"/>
  <text x="30" y="152" fill="#8fa3b4" font-size="10" font-style="italic">Fluido ρ<tspan dy="2" font-size="8">f</tspan></text>

  <ellipse cx="190" cy="97" rx="70" ry="48" fill="rgba(100,100,255,0.3)" stroke="#8fa3b4" stroke-width="2"/>
  <text x="162" y="92" fill="#ecf0f1" font-size="10" font-weight="bold">Sólido</text>
  <text x="165" y="106" fill="#ecf0f1" font-size="9">ρₛ, Vol. V</text>

  <circle cx="190" cy="108" r="4" fill="#2ecc71"/>
  <text x="197" y="111" fill="#2ecc71" font-size="9" font-weight="bold">B</text>
  <circle cx="190" cy="88" r="4" fill="#e74c3c"/>
  <text x="197" y="88" fill="#e74c3c" font-size="9" font-weight="bold">G</text>

  <line x1="190" y1="40" x2="190" y2="49" stroke="#2ecc71" stroke-width="3" marker-end="url(#s6u)"/>
  <text x="196" y="44" fill="#2ecc71" font-size="9">F<tspan dy="2" font-size="7">B</tspan> = ρ<tspan dy="2" font-size="7">f</tspan>gV</text>

  <line x1="190" y1="143" x2="190" y2="152" stroke="#e74c3c" stroke-width="3" marker-end="url(#s6d)"/>
  <text x="196" y="154" fill="#e74c3c" font-size="9">W = ρₛgV</text>

  <text x="28" y="55" fill="#8fa3b4" font-size="8">Equilibrio: ρₛ = ρ<tspan dy="2" font-size="6">f</tspan></text>
  <text x="28" y="67" fill="#2ecc71" font-size="8">Sube: ρₛ &lt; ρ<tspan dy="2" font-size="6">f</tspan></text>
  <text x="28" y="79" fill="#e74c3c" font-size="8">Baja: ρₛ &gt; ρ<tspan dy="2" font-size="6">f</tspan></text>
</svg>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Principio de Arquímedes — Flotación Parcial</h2>

<svg viewBox="0 0 380 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="fl6u" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2ecc71"/>
    </marker>
    <marker id="fl6d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <rect x="80" y="15" width="160" height="68" fill="rgba(255,255,255,0.04)" stroke="none"/>
  <text x="240" y="52" fill="#8fa3b4" font-size="9">Gas/Atm.</text>

  <line x1="20" y1="83" x2="360" y2="83" stroke="#00d2ff" stroke-width="1.8" stroke-dasharray="5,4"/>
  <text x="270" y="79" fill="#00d2ff" font-size="9">Sup. libre</text>

  <rect x="20" y="83" width="340" height="100" fill="rgba(0,210,255,0.12)"/>
  <text x="30" y="172" fill="#8fa3b4" font-size="9" font-style="italic">Fluido ρ<tspan dy="2" font-size="7">f</tspan></text>

  <rect x="115" y="40" width="110" height="115" fill="rgba(100,150,255,0.30)" stroke="#8fa3b4" stroke-width="1.8"/>
  <text x="135" y="75" fill="#ecf0f1" font-size="10">sólido</text>

  <rect x="115" y="83" width="110" height="72" fill="rgba(0,210,255,0.20)"/>
  <line x1="235" y1="83" x2="235" y2="155" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="231" y1="83" x2="239" y2="83" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="231" y1="155" x2="239" y2="155" stroke="#8fa3b4" stroke-width="1"/>
  <text x="242" y="122" fill="#8fa3b4" font-size="9" font-style="italic">d (calado)</text>

  <line x1="235" y1="40" x2="235" y2="83" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="231" y1="40" x2="239" y2="40" stroke="#8fa3b4" stroke-width="1"/>
  <text x="242" y="65" fill="#8fa3b4" font-size="9" font-style="italic">H−d</text>

  <circle cx="170" cy="120" r="4" fill="#2ecc71"/>
  <text x="178" y="123" fill="#2ecc71" font-size="9" font-weight="bold">B</text>
  <circle cx="170" cy="85" r="4" fill="#e74c3c"/>
  <text x="178" y="83" fill="#e74c3c" font-size="9" font-weight="bold">G</text>

  <line x1="140" y1="32" x2="140" y2="40" stroke="#e74c3c" stroke-width="2" marker-end="url(#fl6d)"/>
  <text x="55" y="30" fill="#e74c3c" font-size="9">W = ρₛgV<tspan dy="2" font-size="7">T</tspan></text>

  <line x1="200" y1="165" x2="200" y2="155" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#fl6u)"/>
  <text x="205" y="177" fill="#2ecc71" font-size="8">F<tspan dy="2" font-size="6">B</tspan>=ρ<tspan dy="2" font-size="6">f</tspan>gV<tspan dy="2" font-size="5">s</tspan></text>
  <text x="48" y="175" fill="#8fa3b4" font-size="8">Vol.Vₛ = A·d &nbsp;·&nbsp; Equilibrio: F<tspan dy="2" font-size="6">B</tspan> = W</text>
</svg>

<div class="caja-formula">F<sub>B</sub> = ρ<sub>f</sub>·g·V<sub>s</sub> &nbsp;·&nbsp; V<sub>s</sub>/V<sub>T</sub> = ρ<sub>s</sub>/ρ<sub>f</sub></div>

<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:0.9em">
  <thead><tr style="background:rgba(0,210,255,0.15)">
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">Caso</th>
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">Condición</th>
    <th style="padding:8px;border:1px solid rgba(0,210,255,0.3)">Resultado</th>
  </tr></thead>
  <tbody>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Completamente sumergido</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">ρₛ &lt; ρf</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Sube</td></tr>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Completamente sumergido</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">ρₛ = ρf</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Flota sumergido (neutro)</td></tr>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Completamente sumergido</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">ρₛ &gt; ρf</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Se hunde</td></tr>
    <tr><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Flotante (parcial)</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">ρₛ &lt; ρf</td><td style="padding:7px;border:1px solid rgba(0,210,255,0.2)">Vs/VT = ρs/ρf</td></tr>
  </tbody>
</table>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">4. Estabilidad — Metacentro</h2>
<ul>
  <li><b>G:</b> Centro de Gravedad — actúa el peso.</li>
  <li><b>B:</b> Centro de Empuje — centroide del volumen sumergido.</li>
  <li><b>M:</b> Metacentro — intersección de la línea de empuje inclinada con el eje de simetría.</li>
</ul>
<div class="caja-formula">BM = I<sub>W</sub> / V<sub>s</sub> &nbsp;·&nbsp; GM = BM − BG = I<sub>W</sub>/V<sub>s</sub> − (z<sub>G</sub> − z<sub>B</sub>)</div>
<p><b>Criterio:</b> GM &gt; 0 → Estable &nbsp;·&nbsp; GM = 0 → Neutro &nbsp;·&nbsp; GM &lt; 0 → Inestable (vuelca)</p>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase6" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 6 🚀
    </a>
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase6" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 6</a>
  
</div>
`
    },

    /* =====================================================================
       CLASE 7: FLUIDOS UNIFORMEMENTE ACELERADOS
       ===================================================================== */
    "tema7": {
      "titulo": "Clase 7: Fluidos Uniformemente Acelerados",
      "contenido": `

<h2 style="color:var(--color-acento);margin-top:0;border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">1. Ecuación General de Presión</h2>
<div class="caja-formula">∂P/∂x = −ρ·aₓ &nbsp;·&nbsp; ∂P/∂z = −ρ·(g + aᵤ)</div>
<p>Inclinación de la superficie libre (dP = 0):</p>
<div class="caja-formula">tan θ = dz/dx = −aₓ / (g + aᵤ)</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">2. Caso 1: Aceleración Horizontal (aᵤ = 0)</h2>

<svg viewBox="0 0 420 195" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="h7a" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#00d2ff"/>
    </marker>
    <marker id="h7g" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#2ecc71"/>
    </marker>
    <marker id="h7r" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L7,3.5 L0,7 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <rect x="40" y="18" width="310" height="162" fill="none" stroke="#8fa3b4" stroke-width="2" rx="2"/>

  <polygon points="40,42 350,100 350,180 40,180" fill="rgba(0,210,255,0.20)"/>

  <line x1="40" y1="42" x2="350" y2="100" stroke="#00d2ff" stroke-width="2.5"/>
  <text x="155" y="60" fill="#00d2ff" font-size="10" font-weight="bold">Sup. libre inclinada</text>

  <line x1="40" y1="71" x2="350" y2="71" stroke="#8fa3b4" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="135" y="68" fill="#8fa3b4" font-size="9">Reposo</text>

  <path d="M350,71 A25,25 0 0,1 350,100" fill="none" stroke="#8fa3b4" stroke-width="1.2"/>
  <text x="358" y="87" fill="#8fa3b4" font-size="10" font-style="italic">θ</text>

  <line x1="32" y1="42" x2="32" y2="71" stroke="#e74c3c" stroke-width="1.5"/>
  <line x1="28" y1="42" x2="36" y2="42" stroke="#e74c3c" stroke-width="1"/>
  <line x1="28" y1="71" x2="36" y2="71" stroke="#e74c3c" stroke-width="1"/>
  <text x="5" y="59" fill="#e74c3c" font-size="9" font-style="italic">h<tspan dy="2" font-size="7">L</tspan></text>

  <line x1="358" y1="71" x2="358" y2="100" stroke="#e74c3c" stroke-width="1.5"/>
  <line x1="354" y1="71" x2="362" y2="71" stroke="#e74c3c" stroke-width="1"/>
  <line x1="354" y1="100" x2="362" y2="100" stroke="#e74c3c" stroke-width="1"/>
  <text x="363" y="88" fill="#e74c3c" font-size="9" font-style="italic">h<tspan dy="2" font-size="7">R</tspan></text>

  <line x1="376" y1="18" x2="376" y2="180" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="372" y1="18" x2="380" y2="18" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="372" y1="180" x2="380" y2="180" stroke="#8fa3b4" stroke-width="1"/>
  <text x="382" y="103" fill="#8fa3b4" font-size="9" font-style="italic">h₀</text>

  <line x1="150" y1="10" x2="250" y2="10" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#h7g)"/>
  <text x="155" y="8" fill="#2ecc71" font-size="10" font-style="italic">aₓ</text>

  <text x="50" y="150" fill="#00d2ff" font-size="9">P mayor</text>
  <text x="270" y="150" fill="#8fa3b4" font-size="9">P menor</text>
</svg>

<div class="caja-formula">P(x,z) = P<sub>ref</sub> − ρ·aₓ·x − ρ·g·z</div>
<div class="caja-formula">Δh = aₓ·L / (2g) &nbsp;(elevación en el lado trasero)</div>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">3. Caso 2: Aceleración Vertical (aₓ = 0)</h2>

<svg viewBox="0 0 420 185" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:440px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="v7u" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2ecc71"/>
    </marker>
    <marker id="v7d" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#e74c3c"/>
    </marker>
  </defs>

  <rect x="25" y="25" width="90" height="130" fill="none" stroke="#8fa3b4" stroke-width="1.5" rx="1"/>
  <rect x="25" y="65" width="90" height="90" fill="rgba(0,210,255,0.22)"/>
  <text x="42" y="45" fill="#8fa3b4" font-size="9" font-weight="bold">Reposo</text>
  <line x1="25" y1="65" x2="115" y2="65" stroke="#00d2ff" stroke-width="1.5"/>
  <line x1="16" y1="65" x2="16" y2="155" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="12" y1="65" x2="20" y2="65" stroke="#8fa3b4" stroke-width="1"/>
  <line x1="12" y1="155" x2="20" y2="155" stroke="#8fa3b4" stroke-width="1"/>
  <text x="4" y="113" fill="#8fa3b4" font-size="9" font-style="italic">h</text>
  <text x="28" y="168" fill="#8fa3b4" font-size="8">P = P₀ + ρgh</text>

  <rect x="160" y="25" width="90" height="130" fill="none" stroke="#2ecc71" stroke-width="1.5" rx="1"/>
  <rect x="160" y="65" width="90" height="90" fill="rgba(0,210,255,0.28)"/>
  <text x="177" y="45" fill="#2ecc71" font-size="9" font-weight="bold">Sube (↑)</text>
  <line x1="160" y1="65" x2="250" y2="65" stroke="#00d2ff" stroke-width="1.5"/>
  <line x1="205" y1="22" x2="205" y2="14" stroke="#2ecc71" stroke-width="2.5" marker-end="url(#v7u)"/>
  <text x="148" y="168" fill="#2ecc71" font-size="8">P = P₀+ρ(g+aᵤ)h</text>
  <text x="165" y="178" fill="#2ecc71" font-size="7">(presión mayor)</text>

  <rect x="300" y="25" width="90" height="130" fill="none" stroke="#e74c3c" stroke-width="1.5" rx="1"/>
  <rect x="300" y="65" width="90" height="90" fill="rgba(0,210,255,0.15)"/>
  <text x="312" y="45" fill="#e74c3c" font-size="9" font-weight="bold">Baja (↓)</text>
  <line x1="300" y1="65" x2="390" y2="65" stroke="#00d2ff" stroke-width="1.5"/>
  <line x1="345" y1="14" x2="345" y2="22" stroke="#e74c3c" stroke-width="2.5" marker-end="url(#v7d)"/>
  <text x="288" y="168" fill="#e74c3c" font-size="8">P = P₀+ρ(g+aᵤ)h</text>
  <text x="305" y="178" fill="#e74c3c" font-size="7">(presión menor)</text>
</svg>

<div class="caja-formula">P(z) = P₀ + ρ·(g + aᵤ)·h &nbsp;→ &nbsp;g<sub>ef</sub> = g + aᵤ</div>
<ul>
  <li>aᵤ &gt; 0 (sube): g<sub>ef</sub> &gt; g → presión mayor.</li>
  <li>aᵤ = −g (caída libre): g<sub>ef</sub> = 0 → presión uniforme (ingravidez).</li>
</ul>

<h2 style="color:var(--color-acento);border-bottom:1px solid rgba(0,210,255,0.2);padding-bottom:6px">4. Caso 3: Rotación de Cuerpo Rígido (ω = cte)</h2>
<div class="caja-formula">∂P/∂r = ρ·ω²·r &nbsp;·&nbsp; ∂P/∂z = −ρ·g</div>
<div class="caja-formula">P(r,z) = P₀ + ρ·ω²·r²/2 − ρ·g·z</div>

<svg viewBox="0 0 380 205" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:400px;display:block;margin:16px auto;border-radius:6px;background:#010e1d">
  <defs>
    <marker id="r7a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#8fa3b4"/>
    </marker>
    <marker id="r7g" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#2ecc71"/>
    </marker>
  </defs>

  <line x1="40" y1="15" x2="40" y2="175" stroke="#8fa3b4" stroke-width="2"/>
  <line x1="340" y1="15" x2="340" y2="175" stroke="#8fa3b4" stroke-width="2"/>
  <line x1="40" y1="175" x2="340" y2="175" stroke="#8fa3b4" stroke-width="2"/>

  <line x1="40" y1="90" x2="340" y2="90" stroke="#8fa3b4" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="345" y="93" fill="#8fa3b4" font-size="8">Reposo</text>

  <path d="M40,65 Q190,130 340,65 L340,175 L40,175 Z" fill="rgba(0,210,255,0.20)"/>

  <path d="M40,65 Q190,130 340,65" fill="none" stroke="#00d2ff" stroke-width="2.5"/>

  <line x1="190" y1="10" x2="190" y2="178" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="3,2" marker-end="url(#r7a)"/>
  <text x="193" y="10" fill="#8fa3b4" font-size="9" font-style="italic">z (eje)</text>

  <circle cx="190" cy="130" r="4" fill="#00d2ff"/>
  <text x="146" y="143" fill="#8fa3b4" font-size="8">r = 0 (mín.)</text>

  <path d="M155,30 A35,20 0 0,1 225,30" fill="none" stroke="#2ecc71" stroke-width="2" marker-end="url(#r7g)"/>
  <text x="183" y="27" fill="#2ecc71" font-size="10" font-style="italic">ω</text>

  <line x1="30" y1="65" x2="30" y2="130" stroke="#e74c3c" stroke-width="1.5"/>
  <line x1="26" y1="65" x2="34" y2="65" stroke="#e74c3c" stroke-width="1"/>
  <line x1="26" y1="130" x2="34" y2="130" stroke="#e74c3c" stroke-width="1"/>
  <text x="6" y="101" fill="#e74c3c" font-size="9" font-style="italic">Δz</text>

  <text x="248" y="52" fill="#ecf0f1" font-size="9" font-style="italic">zₛ = z₀ + ω²r²/(2g)</text>

  <line x1="190" y1="183" x2="340" y2="183" stroke="#8fa3b4" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="255" y="196" fill="#8fa3b4" font-size="9" font-style="italic">r</text>
</svg>

<div class="caja-formula">z<sub>s</sub>(r) = z₀ + ω²·r²/(2g) &nbsp;·&nbsp; Δz = ω²·R²/(2g)</div>

<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicio1.html#ejemplos-clase7" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
        Ver Ejemplos Resueltos de la Clase 7 🚀
    </a>
</div>
<div style="text-align: center; margin-top: 40px;">
    <a href="ejercicios_propuestos1.html.html#clase7" class="boton-opcion" style="display: inline-block; background: rgba(0, 210, 255, 0.05); color: #00d2ff; border: 2px solid #00d2ff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em;">
    Ver problemas de la clase 7</a>
  
</div>
`
    }
  },

  /* =====================================================================
     UNIDADES 2 y 3 (sin cambios)
     ===================================================================== */
  "unidad2": {
    "tema1": { "titulo": "2.1 Principios de la Presión Estática", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema2": { "titulo": "2.2 Paradoja Hidrostática", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema3": { "titulo": "2.3 Principio de Pascal", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema4": { "titulo": "2.4 Manometría y Barómetros", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema5": { "titulo": "2.5 Fuerzas sobre Superficies Planas", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema6": { "titulo": "2.6 Fuerzas sobre Superficies Curvas", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema7": { "titulo": "2.7 Principio de Arquímedes", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema8": { "titulo": "2.8 Estabilidad de Cuerpos Sumergidos", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema9": { "titulo": "2.9 Estabilidad Metacéntrica", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema10": { "titulo": "2.10 Traslación Lineal de Fluidos", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema11": { "titulo": "2.11 Rotación de Masas Líquidas", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema12": { "titulo": "2.12 Instrumentación Hidrostática", "contenido": "<p>Contenido en desarrollo.</p>" }
  },
  "unidad3": {
    "tema1": { "titulo": "3.1 Fundamentos del Flujo", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema2": { "titulo": "3.2 Ecuación de Bernoulli", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema3": { "titulo": "3.3 Aplicaciones de Bernoulli", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema4": { "titulo": "3.4 Número de Reynolds", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema5": { "titulo": "3.5 Pérdidas Primarias", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema6": { "titulo": "3.6 Pérdidas Secundarias", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema7": { "titulo": "3.7 Ecuación de la Energía", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema8": { "titulo": "3.8 Líneas de Energía", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema9": { "titulo": "3.9 Tuberías en Serie", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema10": { "titulo": "3.10 Tuberías en Paralelo", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema11": { "titulo": "3.11 Canales Abiertos", "contenido": "<p>Contenido en desarrollo.</p>" },
    "tema12": { "titulo": "3.12 Golpe de Ariete", "contenido": "<p>Contenido en desarrollo.</p>" }
  }
};
/** Ultra landing — "paper spec / machine surface" tokens. */
export default defineTheme({
  name: 'ultra-landing',
  color: {
    paper: '#FAF8F3',   // human ground — warm print paper
    ink: '#191914',     // print black, slightly warm
    dim: '#6E6B62',     // annotations, body on paper
    line: '#DAD5C8',    // hairlines on paper
    go: '#1F9D44',      // gate green, deep enough for paper
    goBright: '#28C840',// gate green on dark (agent surface, terminal card)
    stage: '#0A0A0E',   // agent ground — the films' studio dark
    stagePanel: '#121218',
    termDim: '#7ED99B', // secondary text on stage
    paperOnStage: '#ECECF1',
    // the eight shipped-site palettes — the only "decoration" on the page
    housemait: '#6B3FA0', housemaitInk: '#FBF7EF',
    canopy: '#323A2C',  canopyInk: '#F6F4EC',
    alike: '#FFFEEA',   alikeInk: '#EC2F0D',
    triple: '#0A2E0A',  tripleInk: '#F5F5F4',
    billow: '#04192B',  billowInk: '#F6F8F9',
    pumo: '#FFFFFF',    pumoInk: '#0A0A0A',
    mat: '#0C3128',     matInk: '#F4F1E8',
    bt26: '#141414',    bt26Ink: '#C8F31D',
  },
  font: {
    display: 'Meso',   // BT26 display (Meso, self-hosted)
    body: 'Lay',       // Lay Grotesk
    mono: 'GeistM',    // Geist Mono
  },
  mode: 'literal',
});

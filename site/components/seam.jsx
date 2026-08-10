import { SectionHead } from './lib.jsx';

/** 02 / THE SEAM — the argument: a real V4 JSON blob vs the JSX that replaces it.
 *  The left blob is the ACTUAL stored JSON of housemait's hero (built in film #2). */

const blob = `[{ "id": "e00000", "elType": "e-flexbox",
  "settings": { "classes": { "$$type": "classes",
    "value": ["g-c-12f5qe"] },
   "tag": { "$$type": "string", "value": "div" } },
  "elements": [
   { "id": "e00001", "elType": "e-flexbox",
    "settings": { "classes": { "$$type": "classes",
      "value": ["g-c-hw3p4m"] },
     "tag": { "$$type": "string", "value": "section" },
     "_cssid": { "$$type": "string", "value": "hero" } },
    "elements": [
     { "id": "e00002", "elType": "e-flexbox",
      "settings": { "classes": { "$$type": "classes",
        "value": ["g-c-1ra9hy"] } },
      "elements": [
       { "id": "e00003", "elType": "widget",
        "settings": { "classes": { "$$type":
          "classes", "value": ["g-c-1e5m6x"] },
         "tag": { "$$type": "string", "value": "h1" },
         "title": { "$$type": "html-v3", "value": {
          "content": { "$$type": "string", "value":
           "Family life,<br>organised with AI." },
          "children": [] } } },
        "widgetType": "e-heading" },
       …and 3,400 more lines like these`;

const jsx = `<section id="hero" tw="flex flex-col
  items-center gap-6" bg={t.color.paper}>
  <h1 size={72} font="Recoleta"
      color={t.color.ink}>
    Family life,<br/>organised with AI.
  </h1>
  <Bubbles items={fridge.magnets} />
  <Btn href="#app">Get the app</Btn>
</section>`;

export const Seam = ({ theme: t }) => (
  <section id="seam" tw="flex flex-col items-start w-full max-w-[1180px] px-6 gap-7" pad={[72, 24]} mobile={{ pad: [32, 18] }}>
    <SectionHead theme={t} no="02" label="The seam" />
    <heading tag="h2" w="100%" size={64} weight={400} font={t.font.display} color={t.color.ink} lh={1.02}
      sx={{ textTransform: 'uppercase', letterSpacing: '.01em' }} mobile={{ size: 36 }}>
      Same page. One is a blob.<br />One is a language.
    </heading>
    <row tw="flex gap-5 w-full items-stretch max-md:flex-col">
      <box id="seam-blob" tw="flex flex-col gap-2" bg="#F1EDE3" pad={[18, 20]} sx={{ borderRadius: '14px', border: `1px solid ${t.color.line}`, flexGrow: '1', flexShrink: '1', flexBasis: '0', minWidth: '0' }}>
        <text size={12} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.12em' }}>WHAT YOUR AGENT WRITES TODAY — BLIND</text>
        <html>{`<pre style="margin:0;white-space:pre-wrap;word-break:break-word;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:11px;line-height:1.6;color:#8A857A">${blob.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>`}</html>
      </box>
      <box id="seam-jsx" tw="flex flex-col gap-2" bg={t.color.stage} pad={[18, 20]} sx={{ borderRadius: '14px', flexGrow: '1', flexShrink: '1', flexBasis: '0', minWidth: '0' }}>
        <text size={12} font={t.font.mono} color={t.color.goBright} sx={{ letterSpacing: '.12em' }}>THE SAME SECTION, WITH ULTRA</text>
        <html>{`<pre style="margin:0;white-space:pre-wrap;word-break:break-word;font-family:'IBM Plex Mono',ui-monospace,monospace;font-size:13px;line-height:1.65;color:#ECECF1">${jsx.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>`}</html>
      </box>
    </row>
    <text size={16.5} font={t.font.body} color={t.color.dim} lh={1.65} maxw={720}>
      The left side is the real stored JSON of the hero in film #2 — this is the surface agents
      have been authoring. On the right, the component that generates it. Typed props fail at
      build time. An authoritative server-side validator rejects bad trees before they save.
      Backups first, rollback always. A hallucinating agent can't corrupt a site through this seam.
    </text>
  </section>
);

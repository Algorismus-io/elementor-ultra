/** Shared spec-sheet primitives. */

export const SectionHead = ({ theme: t, no, label }) => (
  <row tw="flex items-center gap-4 w-full" sx={{ borderTop: `2px solid ${t.color.ink}`, paddingTop: '14px' }}>
    <text size={13} font={t.font.mono} color={t.color.go} sx={{ letterSpacing: '.12em' }}>{no}</text>
    <text size={13} font={t.font.mono} color={t.color.dim} sx={{ letterSpacing: '.14em', textTransform: 'uppercase' }}>{label}</text>
  </row>
);

export const Btn = ({ theme: t, href, label, ghost }) => (
  <box
    tw="flex items-center justify-center"
    bg={ghost ? 'transparent' : t.color.ink}
    pad={[13, 26]}
    sx={{ borderRadius: '10px', border: `2px solid ${t.color.ink}` }}
  >
    <text href={href} size={15} weight={600} font={t.font.body} color={ghost ? t.color.ink : t.color.paper}>
      {label}
    </text>
  </box>
);

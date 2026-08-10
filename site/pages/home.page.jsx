import { Chrome } from '../components/chrome.jsx';
import { Nav, Hero, Ticker } from '../components/hero.jsx';
import { Proof } from '../components/proof.jsx';
import { Seam } from '../components/seam.jsx';
import { Loop } from '../components/loop.jsx';
import { Stack } from '../components/stack.jsx';
import { Start, Colophon } from '../components/start.jsx';
import { AgentSurface } from '../components/agent.jsx';

export const meta = {
  title: 'Home',
  seo: {
    title: 'Elementor Ultra — one prompt in, a site out',
    description: 'The agent-native build stack for Elementor. AI agents write typed JSX, ship native editable V4 pages over REST, and verify every save. Open source, MIT.',
    ogImage: 'https://exjsx.dev/exjsx-og.png',
  },
};

export default ({ theme: t }) => (
  <box tw="flex flex-col w-full" pad={0} bg={t.color.paper}>
    <Chrome theme={t} />
    <box id="human-surface" tw="flex flex-col items-center w-full" pad={0}>
      <Nav theme={t} />
      <Hero theme={t} />
      <Ticker />
      <Proof theme={t} />
      <Seam theme={t} />
      <Loop theme={t} />
      <Stack theme={t} />
      <Start theme={t} />
      <Colophon theme={t} />
    </box>
    <AgentSurface theme={t} />
  </box>
);

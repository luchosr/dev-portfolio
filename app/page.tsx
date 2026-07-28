import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Stack } from '@/components/sections/stack';
import { Work } from '@/components/sections/work';
import { Contact } from '@/components/sections/contact';

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Work />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

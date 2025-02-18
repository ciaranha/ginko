import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import About from '~/components/widgets/About';
import Features from "~/components/widgets/Features";
import Savings from "~/components/widgets/Savings";
import Process from "~/components/widgets/Process"; 
import CTA from '~/components/widgets/CTA';
import FAQ from '~/components/widgets/FAQ';
import FooterCTA from "~/components/widgets/FooterCTA";
import { SITE } from "~/config.mjs";


export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Savings />
      <Process />
      <CTA />
      <FAQ />
      <FooterCTA />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};

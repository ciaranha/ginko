import { createQwikCity } from '@builder.io/qwik-city-vercel-edge/middleware/vercel-edge';
import qwikCityPlan from '@qwik-city-plan';
import { manifest } from '@qwik-client-manifest';
import render from './entry.ssr';

export default createQwikCity({ render, qwikCityPlan, manifest }); 
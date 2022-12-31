import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      '@commons': 'src/components/common',
      '@uncommons': 'src/components/uncommon',
      '@epics': 'src/components/epic',
      '@components':'src/components/'
    }
  },
};

export default config;

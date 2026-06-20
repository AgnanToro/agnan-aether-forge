// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel sets the `VERCEL` env var during its build. When present, build the
// SSR server with Nitro's `vercel` preset (outputs `.vercel/output`, which
// Vercel auto-detects via the Build Output API). Otherwise the config keeps
// its default behavior so Lovable hosting (Cloudflare) keeps working.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Only override Nitro when building on Vercel; on Lovable this key is omitted
  // so the default Cloudflare target is used.
  ...(isVercel ? { nitro: { preset: "vercel" } } : {}),
});

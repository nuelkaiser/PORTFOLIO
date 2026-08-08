# Majekodunmi Immanuel — Portfolio

The Next.js portfolio app lives in [`kaiser/`](./kaiser).

```bash
cd kaiser
npm install
npm run dev
```

## Netlify

In **Site configuration → Build & deploy → Build settings**:

| Setting | Value |
|--------|--------|
| **Base directory** | `kaiser` |
| **Build command** | `npm run build` |
| **Publish directory** | `kaiser/out` |

If Base directory is already set to `kaiser`, use Publish directory `out` instead (paths are relative to the base).

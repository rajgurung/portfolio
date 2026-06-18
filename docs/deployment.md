# Deployment

The site is a TanStack Start build served as static output. It is hosted on DigitalOcean App Platform as a Web Service.

## Build

```bash
npm run build      # outputs to dist/
```

## Serve

The production build is served with `serve`:

```bash
npm run start      # serve dist -s -l 8080
```

This serves `dist/` in single-page mode on port 8080.

## DigitalOcean App Platform

Configure the component as a Web Service:

- Build command: `npm run build`
- Run command: `npm run start`
- HTTP port: `8080`
- Node version: 22

Pushes to `master` trigger a new build and deploy.

## Local preview

To preview a production build locally before deploying:

```bash
npm run build
npm run preview
```

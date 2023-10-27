<img width="1245" alt="Screenshot 2023-10-27 at 12 58 53 PM" src="https://github.com/ezhai24/portfolio-v1/assets/15952697/b9d897ca-583f-4141-aaf1-0fcb9c746253">

### Emily Zhai | [LinkedIn](https://www.linkedin.com/in/emily-zhai-b7b32a103/)
The first iteration of my personal portfolio website. Check it out [here](https://emilyzhai.vercel.app/)!

**⚙️ Built with...**
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)

## Local Development
### `yarn`
Installs dependencies

### `yarn dev`
This runs the app in a local development mode.  
The page will hot reload any updates to the front-end and API.  
Open http://localhost:3000 to view it in the browser.

### `yarn build && yarn start`
This will create an optimized production build to run locally.  
Open http://localhost:3000 to view it in the browser.

## Debugging
### Issues with blocking JS / bundle size
Website running slow? You might be running too much Javascript on the main thread. Investigate by running the bundle analyzer:

```
ANALYZE=true yarn build
```

## Deployments
Production deployments are managed by Vercel and triggered automatically when code is merged to master.

# Web-Component Header
We're using "Svelte" to create a "web-component" which we can call inside the branding definition. This makes it possible to build an awesome header experience while greatly improving our developer experience.

## Getting Started
1. Make sure you're using the LTS version of node before you install
2. Run `nvm install --lts`
3. Run `nvm use --lts`
4. Run `npm install`
5. Run `npm run dev` to start developing
6. When you're done, run `npm run magic` to build the project

### Useful reading:
* Svelte: https://learn.svelte.dev/tutorial/welcome-to-svelte
* Web Components: https://css-tricks.com/an-introduction-to-web-components/


## How it works
1. You'll have a single `.svelte` component in the src folder which binds the entire header together into a "web-component" to call inside our platform
  * At the top of the .svelte file, bind it to a web-component: `<svelte:options customElement="autodesk-nav"/>`
  * Make sure to import the component into the `main.ts` file 
2. Use your web-component inside `index.html` to do local development on your header, like `<autodesk-nav></autodesk-nav>`
3. Use `export let` to expose variables to the web component. Something like `export let eventName` will get called like `<autodesk-nav eventName="I am the event name!"></autodesk-nav>` to pass data to your header 
4. When you run `npm run magic` it'll automatically package everything into a `.html` file in the `dist/` folder to copy into your definition, and it'll generate your JSON based on your `export let` props
5. Everything else is just development using Svelte itself, which is really just HTML + some data templating

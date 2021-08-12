# FreeMind

A website focusing on mental health awareness built with Gatsby.

## View The Live Site [Here](https://freemind.jackjona.live)

## Software

- React
- Gatsby
- Gatsby Plugins
- Styled Components


## To Locally Develop

**Install the Gatsby CLI. (If You Haven't Already)**

   ```shell
   npm install -g gatsby-cli
   ```

1. **Clone The Github Repository.**

   ```sh
   git clone https://github.com/jackjona123/freemind.git
   ```

2. **Install The Dependencies.**

    ```sh
   npm install
   ```
    Or 

    ```sh
   yarn install
   ```

3. **Start the sites in `develop` mode.**

   Next, move into your new site’s directory and start it up:

   ```sh
   cd freemind
   gatsby develop
   ```


## Editing This Website:

### Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

### SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

### Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

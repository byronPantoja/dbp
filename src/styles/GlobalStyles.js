const GlobalStyles = `
:root {
    &, &.light-mode {
        /* Fill Colors */
        --fill-accent: #ff8482;
        --fill-black: #000;
        --fill-white: #fff;
        --fill-background: #fcfcfc;
        
        /* Shades */

        --shade-darkest: #2f2f2f;
        --shade-dark: #A1A1A1;
        --shade-light: #E9E9E9;
        --shade-lightest: #f2f2f2;


    }

    &.dark-mode {
            /* Fill Colors - WIP */
        --color-accent: #ff8482;
        --color-black: #000;
        --color-white: #fff;
        --color-background: #403B8F;
        
        /* Shades - WIP */

        --shade-darkest: #ff4a47;
        --shade-dark: #Ff7370;
        --shade-light: #ffc3c2;
        --shade-lightest: #f2f2f2;
    }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html { 
    font-size: 62.5%;
    color: var(--shade-darkest);
}

body {
    font-family: 'DM Sans', sans-serif;

  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--shade-lightest);
  color: var(--shade-darkest);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-accent);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}

`;

export default GlobalStyles;

# Practice for web dev

Base project

## Prepare the project:

Be polite and disciplined in programming, by choosing and enforcing code conventions:

- Find and use appropriate linter with reasonable configuration (hint: `eslint` & `stylelint`)
- make your `.gitignore` and `.gitattributes` useful
- try out `editorconfig`

## Requirements:

To make this assignment useful you're going to create a personal portfolio page, with simple blog.

- It has to contain several pages: "landing", "about", "list of blog posts" and individual "blog post"
- There are no guidelines for graphical design, make it look representative
- The frontend have to be made using `React.js` and built with `webpack`
- Communication between backend and frontend have to be done through REST API
- The blog posts data can be stored in flat files (hint: `markdown`), choose a conventions to organize them
- Make use of `npm` scripts for automation of tasks, noop scripts are included for inspiration
- Put the web page on the web (hint: `heroku`)
- Do some unit testing
- Use version control system, preferably Git

Bonus points:

- Pay attention to your dev environment, choice of text editor, etc.
- `Redux` for state management

### Tooling:

Minimal set of tools is defined in `package.json`, these tools should make your life easier:

- `Babel.js` for modern JS
- `React.js` for rendering
- `PostCSS` with `CSSNext` for styles
- `Express.js` for server if JS was chosen for backend

### Helpers:

- Mozilla developer network (MDN) is the documentation source to go
- Get inspired by `lodash` and ES6 when looking for how to do certain operations in JS
- Specifications are your friends for web trio HTML/JS/CSS
- Take a look at JS Promises
- `fetch` API can be used for transferring data between client and server

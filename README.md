# ldv-vue-commands

Simple commands for creating new components and views in Vue 3. This package was created for personal convenience, but may be useful for others as well. The command line interface (CLI) is straightforward and easy to use.

## Installation
```bash
npm install ldv
```

## Usage

```bash
ldv c <name>
```
Creates a new Vue component with the name specified. A corresponding .vue and .scss file will be created, with a basic Vue component template and scss file respectively. The component will be placed in the src/components directory.

```bash
ldv v <name>
```
Creates a new Vue view with the name specified. A corresponding.  A corresponding .vue and .scss file will be created, with a basic Vue view template and scss file respectively. The view will be placed in the src/views directory.

## Assumptions
This package assumes that your file architecture has a src folder with components and views directories.
The CLI will create a new folder with the specified name in these directories and create the .vue and .scss files inside.
The .scss file will be imported to the main style.scss file in the src directory, assuming you have one.

## License

[MIT](https://choosealicense.com/licenses/mit/)

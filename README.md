# dlv-vue-commands
Simple commands for creating new components and views in Vue 3
This package was created for personal convenience, but may be useful for others as well. The command line interface (CLI) is straightforward and easy to use.

Available commands
ldv --version: Displays the current version of the package
ldv --help: Displays a list of available commands and their usage
ldv c <name>: Creates a new Vue component with the name specified. A corresponding .vue and .scss file will be created, with a basic Vue component template and scss file respectively. The component will be placed in the src/components directory.
ldv v <name>: Creates a new Vue view with the name specified. A corresponding .vue and .scss file will be created, with a basic Vue view template and scss file respectively. The view will be placed in the src/views directory.
Assumptions
This package assumes that your file architecture has a src folder with components and views directories.
The CLI will create a new folder with the specified name in these directories and create the .vue and .scss files inside.
The .scss file will be imported to the main style.scss file in the src directory, assuming you have one.
Installation
Copy code
npm install <package-name>
Usage
Copy code
ldv --version
ldv --help
ldv c <name>
ldv v <name>
Example
Copy code
ldv c my-component
This will create a new Vue component called my-component in the src/components directory with corresponding .vue and .scss files.

Please make sure to double check the package name and the path of the main style.scss file in your project before publishing the package.


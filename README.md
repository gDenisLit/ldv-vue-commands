# dlv-vue-commands
Simple commands for creating new components and views in Vue 3

This package was created for personal convenience, but may be useful for others as well. 
The command line interface (CLI) is straightforward and easy to use.

Available commands:
ldv --version: Displays the current version of the package
ldv --help: Displays a list of available commands and their usage
ldv c <name>: Creates a new Vue component in the src/components directory with the name specified. 
ldv v <name>: Creates a new Vue view in the src/views directory with the name specified. 
 
Note: This package assumes that your file architecture has a src folder with components and views directories. 
A corresponding .vue and .scss file will be created, with a basic Vue component template and scss file respectively.
The CLI will create a new folder with the specified name in these directories and create the .vue and .scss files inside. 
The .scss file will be imported to the main style.scss file in the src directory, assuming you have one.

 ![image](https://user-images.githubusercontent.com/106224349/213667901-478df784-22c9-46b2-ab54-5c8c14260dc3.png)


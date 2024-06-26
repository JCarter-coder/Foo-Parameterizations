# Foo-Parameterizations

### Deployed Project

https://foo-modules.vercel.app/

### Screenshots

![Screenshot 1](https://github.com/JCarter-coder/Foo-Parameterizations/blob/main/foo-client/src/assets/img/Foo_Module_pic1.png?raw=true)

![Screenshot 2](https://github.com/JCarter-coder/Foo-Parameterizations/blob/main/foo-client/src/assets/img/Foo_Module_pic2.png?raw=true)

![Screenshot 3](https://github.com/JCarter-coder/Foo-Parameterizations/blob/main/foo-client/src/assets/img/Foo_Module_pic3.png?raw=true)

# Application Overview

This project was an exercise in creating a repository for various modules that could be used to parameterize values and solve various problems. In the given example, a module called Sphere calculates the volume of a sphere when given the radius. This module is dynamically interactive.

## Technologies Used

- **React**: A JavaScript library for building dynamic and interactive user interfaces
- **Katex**: Used to write mathematical expressions in LaTeX
- **React-Katex**: Complements Katex for use in a React project
- **Lorem-Ipsum**: Used to create placeholder text which aids in layout

## Installation

Fork and clone this repository.

Navigate to the client folder:

`./foo-client`

Install node packages by running:

`npm install`

Run the application locally:

`npm run dev`

## File Structure

- **Header.jsx**: Title container.
- **ModuleSelector.jsx**: Select the various modules loaded by community.
- **ModuleContainer.jsx**: The selected module is rendered here.
- **RightContainer.jsx**: Could be used for supporting references, graphics, etc. applicable to the module.
- *modules folder*: This is where modules are contained. A template folder within this folder can be used for future ideas.
- *template folder*:
  - `Template_Phys.jsx`: To be used for the interactive portion of the module.
  - `template.js`: stores applicable functions or classes for the module. Could be copied for use in outside software packages.

## Summary

Developers can create new modules by copying and pasting the `.js` and `.jsx` files from the template folder (`./components/modules/template`) into a new folder and renaming the respective `.js` and `.jsx` files. The `.jsx` renders the component in the browser and imports from the `.js` file any applicable functions for that module. 

The right container titled 'Supporting Information' could be used to implement supporting information with links to various references. It could also be used to implement future features, such as graphical interfaces using technologies like d3.js to model the various modules as applicable.

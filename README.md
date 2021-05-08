
# Dr. L's Garden

In this game, the user is encouraged to enjoy nature and to be present in the moment through the pleasure of breeding beautiful plants.

This project relies on p5.js and Vue 3. 
## Install Node.js
To check which version of Node.js you have, run the following command in the terminal:
```
npm -v
```
Make sure you install node version 7.
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Bugs
- big plant does not scale to screen size
- big plant is not actually the same image as small plant (re-generated with same probabilities but not identical)
- fruit/leaf/flower placement not quite on (but usually looks fine)
- audio works intermittently in Chrome
- buttons run into title on narrow screen, unclickable
- inventory is off-center

## Missing Features
- breeding picks randomly between two param values - not on a distribution. no mutation either (e.g. min and max height in starting plants are the limits for every plant thereafter)
- image preload (right now it loads each image each time it is placed, inefficient)
- no home page!
- turn audio on and off

### Notes
- if you want to add new images, make sure they have a transparent background and add it to the images folder. The dimensions of the images used is 400 x 400 pixels. 
- to follow the general convention for Vue projects, be sure to keep the App.vue file outside the components folder as it is placed in this repository.

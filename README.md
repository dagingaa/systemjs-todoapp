## SystemJS Todo application

This repository contains the very beginning of a Todo application built using
SystemJS. It's written in ECMAScript 6 syntax, which gets compiled down to
ECMAScript 5 syntax.

It must be said that the author has been stuck in IoC and Angular land for way
too long, and seems to have forgotten how to properly structure applications
entirely. Please do comment on how to make it better, or submit a pull request.

The project is inspired by [Glen Maddern - JavaScript in 2015](https://www.youtube.com/watch?v=iukBMY4apvI)

### Development

To get started developing, you don't have to do much. First of all, this
project uses jspm, so you will need to install that.

`npm install -g jspm`

Second, you install all of the dependencies

`jspm install`

Third and final, you use something like `python -m SimpleHTTPServer` or
[live-server](https://github.com/tapio/live-server) to see the index.html.
SystemJS takes care of loading everything.

### Production

Why?!


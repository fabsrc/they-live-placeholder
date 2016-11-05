# They Live Placeholder

[![Dependencies](https://img.shields.io/david/fabsrc/they-live-placeholder.svg?style=flat-square)](https://david-dm.org/fabsrc/they-live-placeholder)
[![Development Dependencies](https://img.shields.io/david/dev/fabsrc/they-live-placeholder.svg?style=flat-square)](https://david-dm.org/fabsrc/they-live-placeholder?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Generates placeholder images in the style of billboards from John Carpenter's movie [*They Live*](https://www.youtube.com/watch?v=JI8AMRbqY6w).


## Install

```bash
$ npm install
```


## Start

```bash
$ npm start
```
Use `PORT` environment variable to specify custom port. The default port is `3000`.


## Usage

```
http://localhost:3000/{width}x{height}.{format}?text={text}
```

* `height` *(optional)*: If omitted, a squared image will be created based on the specified width.
* `format` *(optional)*: `png` (default) or `jpg` are valid formats.
* `text` *(optional)*: If no text is specified, random slogans from the movie are used.


### Examples

```
http://localhost:3000/300
http://localhost:3000/300x600
http://localhost:3000/900x1200.png
http://localhost:3000/900x1200.jpg
http://localhost:3000/900x1200.jpeg
http://localhost:3000/500.jpg
http://localhost:3000/500.jpg?text=Hello World
http://localhost:3000/500x700.jpg?text=Hello World
```


## License

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).
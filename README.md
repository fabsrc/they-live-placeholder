# They Live Placeholder

> ![:sunglasses:](https://media.giphy.com/media/gSbao9WRhhlUQ/giphy.gif)

Generates placeholder images in the style of billboards from John Carpenter's movie [*They Live*](https://www.youtube.com/watch?v=JI8AMRbqY6w).

## Requirements

* [GD](https://libgd.github.io/) with FreeType, JPEG and PNG libraries

## Install

```bash
$ composer install
```

## Start

```bash
$ php -S 0.0.0.0:3000 index.php
```

## Usage

```
http://localhost:3000/{width}x{height}.{format}?text={text}
```

* `width`: Width of the image.
* `height` *(optional)*: If omitted, a squared image will be created based on the specified width.
* `format` *(optional)*: `png` (default), `gif` or `jpg` are valid formats.
* `text` *(optional)*: If no text is specified, random slogans from the movie are used.


### Examples

* http://localhost:3000/300
* http://localhost:3000/300x600
* http://localhost:3000/900x1200.png
* http://localhost:3000/900x1200.jpg
* http://localhost:3000/900x1200.jpeg
* http://localhost:3000/500.jpg
* http://localhost:3000/500.jpg?text=Hello%20World
* http://localhost:3000/500x700.jpg?text=Hello%20World


#### Example Image

> http://localhost:3000/600x400

![They Live Placeholder Example](https://raw.githubusercontent.com/fabsrc/they-live-placeholder/example/600x400.png)

### Use with Apache

In order to use this script with an *Apache* server use a `.htaccess` file to redirect all requests to `index.php`.

```
RewriteEngine on
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule . index.php [L]
```

## License

Licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).

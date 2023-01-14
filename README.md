# A create-block template for a dynamic block using postmeta

Spin up a dynamic block to show specific postmeta as server-side-rendered block, using this template for the WordPress/create-block package.

---

A basic block template with RichText comnponent to be used with the [`@wordpress/create-block`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/create-block/README.md) script.

## Usage

This block template can be used by running the following command:

```bash
npx  @wordpress/create-block --template @carstenbach/postmeta-block-template
```

Replace all occurences of `POSTMETA` with the snake_cased name of your post_meta.


## Structure

Once the command has completed, the following structure will be created:

```
- build
- languages
- src
--> index.js
--> style.scss
--> save.js
--> edit
---> index.js
---> level-icon.js
---> level-toolbar.js
---> editor.scss
block.json
package.json
package-lock.json
{postmeta-block}.php
readme.txt
render.php
```

## About

This template is based on https://github.com/mkaz/mkaz-block-template and its related blog post for details: https://mkaz.blog/wordpress/make-your-own-create-block-templates/

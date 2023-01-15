# A create-block template for a dynamic block using postmeta

Spin up a dynamic block to show specific post_meta as a RichText comnponent. Use this package as a template for the [`@wordpress/create-block`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-create-block/) script.

## Usage

1. This block template can be used by running the following command:
    ```bash
    npx  @wordpress/create-block --template @carstenbach/postmeta-block-template
    ```


2. Find & Replace all occurences of `POSTMETA` with the snake_cased `meta_key` of your post_meta inside of the newly created:
    - `{postmeta-block}.php`
    - `src/edit/index.js`

3. Run 
    ```bash
    npm run build
    ```

## Structure

Once the command has completed, the following structure will be created:
```bash
.
├── block.json
├── build
│   ├── index.asset.php
│   ├── index.js
│   ├── index.js.map
│   ├── style-index.css
│   └── style-index.css.map
├── languages
│   └── {postmeta-block}.pot
├── package.json
├── package-lock.json
├── {postmeta-block}.php
├── readme.txt
└── src
    ├── edit
    │   ├── editor.scss
    │   ├── index.js
    │   ├── level-icon.js
    │   └── level-toolbar.js
    ├── index.js
    ├── save.js
    └── style.scss
```

## About

This template is based on https://github.com/mkaz/mkaz-block-template and its related blog post for details: https://mkaz.blog/wordpress/make-your-own-create-block-templates/

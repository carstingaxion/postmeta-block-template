/**
 * External dependencies
 */
const { join } = require("path");

module.exports = {
	defaultValues: {
		slug: "postmeta-block",
		namespace: "cbstdsys",
		author: "Carsten Bach",
		category: "text",
		title: "A dynamic block using postmeta",
		description: "A Gutenberg block to show specific postmeta.",
		dashicon: "hammer",
		attributes: {
			textAlign: {
				type: "string"
			},
			level: {
				type: "number",
				default: 2
			}
		},
		supports: {
			align: true,
			color: {
				gradients: true,
				background: true,
				text: true,
				link: true
			},
			spacing: {
				margin: true
			},
			typography: {
		        fontSize: true,
		        lineHeight: true
		    },
	    	multiple: true,
			html: false,
		    reusable: false
		},
		domainPath: "/languages",
		customBlockJSON: {
			usesContext: [ 
				"postType",
				"postId"
			],
			textdomain: "{{textdomain}}",
		},
		customScripts: {
			"i18n:pot": "wp i18n make-pot . languages/{{textdomain}}.pot --exclude=node_modules",
			"i18n:json": "wp i18n make-json languages --pretty-print --no-purge",
			"i18n:mapjson": "wp i18n make-json languages --pretty-print --no-purge '--use-map={ \"src/index.js\": \"build/index.js\", \"src/save.js\": \"build/index.js\", \"src/edit/index.js\": \"build/index.js\" }'"
		},
		npmDependencies: [
			"classnames",
			"@wordpress/block-editor",
			"@wordpress/blocks",
			"@wordpress/components",
			"@wordpress/core-data",
			"@wordpress/i18n",
			"@wordpress/icons"
		],
	},
	templatesPath: join(__dirname, "templates"),
	assetsPath: join(__dirname, "assets"),
};

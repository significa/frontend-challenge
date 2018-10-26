module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    // "overrides": [
    //     {
    //         "files": ["bin/*.js", "lib/*.js"],
    //         "excludedFiles": "*/*.test.js",
    //     }
    // ],
    "parserOptions": {
        "ecmaVersion": 7,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    },
};
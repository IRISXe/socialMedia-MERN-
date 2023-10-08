module.exports = {
  parser: 'babel-eslint', // Use the Babel parser for parsing JavaScript/JSX
  extends: [
    'eslint:recommended', // Use ESLint's recommended rules
    'plugin:react/recommended', // Use ESLint React plugin's recommended rules
  ],
  plugins: ['react'],
  rules: {
    // Your custom ESLint rules go here
    // For example, to allow React as a global variable, you can add:
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
};


















































module.exports = {
  root: true,
  extends: [
    'eslint:recommended',  // Use the recommended ESLint rules
    'plugin:react/recommended',  // Use React specific rules
  ],
  plugins: ['react'],
  parser: 'babel-eslint', // Use babel-eslint as the parser (assuming you have it installed)
  rules: {
    // Additional rules or overrides can be added here
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};

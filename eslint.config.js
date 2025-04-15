import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import'; // ✅ import the plugin

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // ✅ add to plugins
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // ✅ import/order rule config
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',      // Node.js built-ins (fs, path, etc.)
            'external',     // Packages from node_modules
            'internal',     // Aliases like @/ or custom paths
            'parent',       // ../
            'sibling',      // ./file
            'index',        // ./ (index.js/ts)
          ],
          'newlines-between': 'always', // Add spacing between groups
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
);

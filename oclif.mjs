import {includeIgnoreFile} from '@eslint/compat';
import oclif from 'eslint-config-oclif';

import prettier from 'eslint-config-prettier';
import path from 'node:path';

const gitignorePath = path.resolve(process.cwd(), '.gitignore');

export default [
    includeIgnoreFile(gitignorePath),
    ...oclif,
    prettier,
    {
        rules: {
            "perfectionist/sort-classes": "off",
            "perfectionist/sort-objects": "off",
            "perfectionist/sort-interfaces": "off",
            "unicorn/filename-case": ["error", {"case": "camelCase"}],
            "unicorn/consistent-function-scoping": "off",
            "unicorn/prefer-spread": "off",
            "unicorn/no-array-for-each": "off",
        }
    }
];
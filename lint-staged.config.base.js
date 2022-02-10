const rules = {
  '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint --fix', 'git add'],
  '*.{json,css,scss,md}': ['prettier --write', 'git add'],
};

module.exports = rules;

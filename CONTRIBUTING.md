### How to contribute

Clone the repo
```bash
git clone git@github.com:ccfp/github-issue-finder.git
```

Install dependencies and start dev server
```bash
npm i; npm start
```

Checkout a feature branch
```bash
git checkout -b feat/thing-im-working-on
```

If you don't have Prettier set up in your editor, run this before pushing changes to avoid failing CI
```bash
npm run lint:fix
```

Make some changes and push upstream
```bash
git push -u origin feat/thing-im-working-on
```

Loosely following a convention for feature branch naming, so features would be `feat/*`, bugfixes would be `bugfix/*`, and experimental branches `experiment/*`. Let me know if there are any issues, I'll try to add to these guidelines as I go, but this is the minimum to get started 🙂.

## How to contribute

### Basic instructions

Clone the repo
```bash
git clone git@github.com:ccfp/github-issue-finder.git
```

Install dependencies and start dev server
```bash
npm i; npm start
```

Checkout a feature branch (for example, if working on a feature called `thing-im-working-on`)
```bash
git checkout -b feat/thing-im-working-on
```

Make some changes and push upstream
```bash
git push -u origin feat/thing-im-working-on
```

### Passing CI (linting & tests)

I have CircleCI set up to test every PR by linting and running the test suite. The test suite is not very extensive right now, so chances are if it fails CI it will be because of linting. Hopefully I've set things up so that, if you have Prettier installed in your editor (or using ESLint with Prettier plugin), than your editor will warn you about linting errors. If you're not sure whether your changes will pass CI, you can run `npm run ci` to check. You can also run `npm run lint:fix` and it should fix any linting failures, at which point you're safe to push changes and make a PR.

### Branch naming

Loosely following a convention for feature branch naming, so features would be `feat/*`, bugfixes would be `bugfix/*`, and experimental branches `experiment/*`. Let me know if there are any issues, I'll try to add to these guidelines as I go, but this is the minimum to get started 🙂.

### Git

I highly recommend watching this video from one of my Lambda School classmates who used to work at GitHub (he is currently developing a Git course at Lambda)
[![Git with Nick](http://img.youtube.com/vi/AT1rZ7TmD5A/0.jpg)](http://www.youtube.com/watch?v=AT1rZ7TmD5A "Git with Nick")

This is the blog post he references at the beginning: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/). It's a short read and well worth it, but one of the main takeaways is your commit message should have the following format:
- If applied, this commit will **_your subject line here_**

He also references `gitmoji`, which I'm going to start using in this repo.
```bash
npm i -g gitmoji-cli
```

He also explains how to configure your `gitconfig` to have VS Code as your default diff editor, which I'd highly recommend as well if that's your editor of choice.

---
title: Comparisons
---

# Comparisons

## ESLint

[ESLint](https://eslint.org) is a popular linter for JavaScript projects. The main difference between both tools is that ESLint focuses on the source code, while publint focuses on the published code. While both code may be of the same file, it has different assumptions and are handled differently accordingly. For example:

- Code quality is important in ESLint, but not in publint as it does not affect how the code is published.
- The whole package is taken into account when linting in publint, instead of linting in a file-by-file basis.
- The linting rules in publint are often more concrete and non-configurable as different environments have explicit requirements when running code.

In most cases, you can use both tooling together without conflicts.

## Are the types wrong?

[Are the types wrong?](https://arethetypeswrong.github.io) (attw) is a tool that checks for types issues. It can often report similar issues caught by publint, e.g. ESM and CJS types masquerading, but the underlying implementation differs where attw uses the TypeScript compiler to check for issues, while publint performs its own static analysis.

At the moment, attw is able to report issues that publint does not, so it's recommended to use both tooling together if you'd like to catch all possible issues.

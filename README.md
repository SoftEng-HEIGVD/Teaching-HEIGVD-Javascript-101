# Teaching-HEIGVD-Javascript-101
## Where is my Javascript code executed?

* Years ago, Javascript was **born in the browser**. That is most likely where you saw it the first time: you visit a website, your browser downloads Javascript files and executes them. You see the result of the execution in the user interface, in the browser.
* Much later, people had the idea to **run Javascript on a host** (to implement a server, a CLI tool, etc.). They extracted the Javascript engine from a browser, added a collection of modules for IO and network programming and named it "Node.js".
* So, using **Node.js** is very similar to using the Java JDK. When you write a program, you can use the modules that are provided by the platform. When you execute a program, you type "node program.js" to launch a runtime environment (like when you type java -jar application.jar).

## What is NPM and why should I use it?

* NPM can be **compared with maven**, but in the **Javascript** ecosystem.
* It is part of the Node.js distribution and is installed at the same time as the engine. There are alternative solutions (yarn, turbo).
* Before anything else, NPM is a package manager: you use it to manage dependencies on external modules. NPM hosts a repository, where you find plenty of modules. 
* NPM also allows you do define (build) scripts. There are other, more sophisticated, build systems in the Javascript world (e.g. grunt, gulp, etc.)

## I miss my compiler and its useful error messages

* When you start learning the language, using a linter will be extremely useful. You will get feedback on coding styles and errors.

```
npm init
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import

Create .eslintrc with the following content:
{
  "extends": "airbnb-base",
  "env": {
    "node": true
  }
}

In Visual Studio Code, add the ESLint extension.
```

## Can I write unit tests in Javascript?

- Yes. As a matter of fact, there are many, many combinations of libraries and tools that you can use for that.
- For instance, you can use **mocha** to write and execute tests. You can use it with **chai**, which allows you to write assertions.

```
npm install --save-dev mocha chai eslint-plugin-mocha

Add a .eslintrc in your /test directory:
{
  "extends": "airbnb-base",
  "plugins": [
    "mocha"
  ],
  "env": {
    "node": true,
    "mocha": true
  },
  "rules": {
    "prefer-arrow-callback": 0,
    "mocha/prefer-arrow-callback": 2,
    "func-names": "off"
  }
} 
```


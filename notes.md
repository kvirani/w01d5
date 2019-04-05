W01D5 (Friday): Modules & Testing
With KV
=====

We talked about NPM, then Modules, and then Testing by using these two concepts together.


## 1. NPM (Node Package Manager?)

Problem: We'd like to be able to download other libraries of code and include them in our project so that we can use them instead of writing those things ourselves. Standing on the shoulders of giants as they say.

Solution: Use a package manager. In the world of JavaScript, that's NPM. There are packages published to <https://npmjs.com>

- First, we use `npm init -y` to turn our current project folder into a package. This creates a `package.json` file in the current folder.
- Packages can depend on other packages, installed from npmjs.com (an online collection of published packages)
- `node_modules`: Most npm modules have dependencies. These are installed by npm into this subfolder. This folder can get get big and should be gitignored and NOT checked into your repo.
- package.json and package-lock.json which together define what to (re)install into node_modules if/when we run `npm install` in our project folder.
- The `npm install` or `npm i` command looks at the `package.json` and `package-lock.json` files, along with what's already downloaded/installed in ur `node_modules` directory in order to determine what else needs to be downloaded, if anything. It does not look at our code to see what we `require`.

### `require`

We can now use `require` to use libraries like `colours` or `chalk`, etc. Require can only be successfully if the given module is already in your local project (downloaded).

## 2. Modules

Problem: We should be able to have a project with multiple code files. So far we've done small things in one file, but even our test code for example ends up being in the same file. That's not ideal.

Solution: Use Modules

- Every file can be thought of as a module. The code in that file has access to `module`.
- If we console.log this we see that `module.exports = {}`
- When we try to require our `person.js` it can't find it. That's because it looks inside the `node_modules` folder for a directory named `person.js`
  - We fixed this by adding a relative path to the file `require './person.js';`
  - BTW the `.js` is not needed: `require './person';` works just the same.
- However, we only got back `{}` when requiring that file. We were hoping to get back the person object with firstName, lastName, etc.
- Using `module.exports` in `person.js`, we exported the object from that file
- Now our index.js is able to access the exported object from person.js

3. Testing with Mocha & Chai

Problem: Is there a better way to write and manage our tests? So far we've just been using code like `console.log("some value" === "some other value")` and then we have to parse through the output _and_ test code to really understand if our program is working as expected. For larger apps, we will have lots of tests, so let's organize and output them better.

We first looked as the idea of assertions, using Chai.

Side note: there is a built-in assertion library in node so we don't _need_ Chai for assertion syntax. It's more used for its `expect` syntax, but that's for another time. Since Chai is popular, might as well start getting acquinted now.

Chai gives us functions to assert expectations. If an assertion function fails, it throws an error.

We then looked at Mocha: A test running framework to help us organize and manage our various test cases. Each test case ("it") can be organized in different groups ("describe"s). Helps us with nicer output and managing errors thrown by our assertion library (chai).

## Code

<https://github.com/kvirani/w01d5/>

That's all for now. Enjoy your day & thanks for your time, folks.

KV



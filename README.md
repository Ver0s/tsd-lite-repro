# Repro

At our project we wanted to introcude type testing using `tsd-lite` along with
`tsd-runner-jest`. We did a basic setup according to the docs to make a sort of
MVP. The setup is mirrored in this repro repo.

Essentially the problem that we encountered is that types from the global scope
seem to break the type tests. In the above repro we're creating a type test but
also importing some function that would potentially also be tested. This function
is using a global type.

After running `npx jest --config jest.config.tsd.js` you can see that type
`ThisIsNull` cannot be found since it's used in the `id` function. The test would
also break if we used `ThisIsNull` directly in the type tests since it would not
be recognized unless it's explicitly imported (which would make it non-global).

## Steps to reproduce:
1. Clone the repo and install dependencies - `git clone` followed by `npm i`
2. Run the tests - `npx jest --config jest.config.tsd.js`
3. Check the result

**Actual result:**
<br/>
<img src="https://github.com/Ver0s/tsd-lite-repro/assets/89318957/2e72b37d-342b-4503-8efb-41afec6d9ad5" width="350" />

**Expected result:**
<br/>
`ThisIsNull` type should be known to the runner when importing the `id` function, error shouldn't be thrown

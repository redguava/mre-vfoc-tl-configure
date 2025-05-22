# Minimal Reproducible Example

This repository shows that vitest-fail-on-console fails to trigger a failure for a `console.error`
specified in a `useEffect` teardown function if `@testing-library/react` is imported in vitest's
setup file e.g., when configuring testing-library:

```js
import { configure } from '@testing-library/react'

configure({
    asyncUtilTimeout: 4_000
})
```

It's not necessary to actually use logic from `@testing-library/react`. The below is enough to 
prevent the test from failing although it should:

```js
import * as noop from '@testing-library/react'

// noop could be unused, and the misbehavior would still be reproduced
```

The following `console.error` won't trigger a failure:

```js
function SomeComponent() {
    useEffect(
        () => () => {
            console.error("This is a logged error"); // we expect it to fail the test
        },
        [],
    );

    return <p>This is some text</p>;
}
```

See the following files:

- [vitest-setup.js](vitest-setup.js)
- [src/App.jsx](src/App.jsx)
- [src/App.test.jsx](src/App.test.jsx)

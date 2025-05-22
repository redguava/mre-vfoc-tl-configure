# Minimal Reproducible Example

This repository shows that vitest-fail-on-console fails to trigger a failure for a `console.error`
if `@testing-library/react` is imported in vitest's setup file e.g., when configuring 
testing-library:

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

See the following files:

- [vitest-setup.js](vitest-setup.js)
- [src/App.jsx](src/App.jsx)
- [src/App.test.jsx](src/App.test.jsx)

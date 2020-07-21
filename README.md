# Next.js Template

## Use template

- [Generate a Project](https://github.com/rocket-hangar/rocket-punch-template/generate)
- [Open in CodeSandbox](https://githubbox.com/rocket-hangar/rocket-next-template)

## Scripts

- `npm start` Start development app
- `npm run build` Build static app to `/out` directory
- `npm run pack` Build packages to `/dist` directory
- `npm run publish` Publish packages to NPM registry
- `npm run storybook` Start storybook
- `npm run format` Format with prettier
- `npm run lint` Run tsc type check and ESlint
- `npm test` Run Jest
- `npm run coverage` Create code coverage with Jest to `/coverage` directory

## Stories

<!-- import src/**/*.stories.tsx -->

```tsx
import { Hi } from '@ssen-temp/sample-next-component';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

storiesOf('Hi', module).add('with-label', () => {
  return <Hi label="Hello World!" />;
});

```

<!-- importend -->

## Tests

<!-- import src/**/*.test.ts -->

```ts
//@ts-ignore prevent error that tsconfig "isolatedModules" option that next.js forcing make
describe('sample', () => {
  test('should result is 2', () => {
    expect(1 + 1).toBe(2);
  });
});

```

<!-- importend -->

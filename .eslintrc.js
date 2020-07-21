module.exports = {
  extends: ['@ssen', 'prettier', 'prettier/react', 'prettier/@typescript-eslint'],
  rules: {
    // Next.js <Link> component doesn't play nice with anchor validation
    // https://github.com/vercel/next.js/issues/5533
    'jsx-a11y/anchor-is-valid': 0,
  },
};

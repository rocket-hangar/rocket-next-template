import { Hi } from '@ssen-temp/sample-next-component';
import Layout from 'components/Layout';
import Link from 'next/link';
import React from 'react';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js <Hi label="Hello Next.js" />
    </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;

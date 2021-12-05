import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>This is a title</h1>
      <h2>This is a subtitle</h2>
      This is the <Link href={'/portfolio'}>body</Link>
    </div>
  );
};

export default Home;

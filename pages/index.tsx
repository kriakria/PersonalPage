import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      This is the <Link href={'/'}>body</Link>
    </div>
  );
};

export default Home;

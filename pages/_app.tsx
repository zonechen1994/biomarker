import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>百奥码克 - 先进医疗人工智能解决方案</title>
        <meta name="description" content="使用代码攻克生命百种奥秘！我们通过尖端AI技术革新医疗健康，提供精准诊断、个性化治疗方案和优化临床工作流程。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 
import Layout from "@/components/Layout";
import { AppProps } from "next/app";

// 글로벌로 맥여주고싶을때 _app.tsx라고 네이밍한 파일에다 아래처럼 작성.

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;

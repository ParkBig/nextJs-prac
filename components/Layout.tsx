import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";


const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;

const GlobalStyle = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font: inherit;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
      display: block;
  }

  *[hidden] {
      display: none;
  }
  body {
      line-height: 1;
  }
  menu, ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
  content: '';
  content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
  * {
      box-sizing: border-box;
  }
  body {
      font-family: 'Shantell Sans', cursive;
      /* margin: 0px; */
      /* 이프로젝트에서만 아래처럼 사용 */
      max-width: 520px;
      width: 100%;
      margin: 0 auto;
  }
  a {
      text-decoration:none;
      color: inherit;
  }
`;

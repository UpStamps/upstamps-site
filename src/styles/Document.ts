import { css } from "styled-components";

const documentStyles = css`
  margin: 120px 0;
  .content {
    width: 600px;
    margin: auto;

    h1,
    ol {
      color: #222425;
    }

    ul,
    p {
      color: #5d6063;
    }

    ul {
      margin-left: 14px;
      li {
        margin-top: 10px;
      }
    }
    p {
      margin: 14px 0;
      text-align: justify;
      line-height: 1.5;
    }
    ol {
      margin: 24px 0;
    }
  }
  @media (max-width: 768px) {
    .content {
      width: 100%;
      padding: 40px;
    }
  }
`;

export default documentStyles;

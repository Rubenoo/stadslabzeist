import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Neue Haas";
        src: url("/fonts/Neue-Haas.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Neue Haas Bold";
        src: url("/fonts/Neue-Haas-Bold.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "Neue Haas Medium";
        src: url("/fonts/Neue-Haas-Medium.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: "Neue Haas Black";
        src: url("/fonts/Neue-Haas-Black.ttf") format("truetype");
        font-style: normal;
        font-display: swap;
    }

    body,
    html,
    a {
        font-family: 'Neue Haas', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #f1cfe5;
        overflow-x: hidden;
    }
    
    .fp-watermark{
        display:none!important;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
        }
    }

    h1 {
        font-family: 'Neue Haas Black', serif;
        color: #E4E4E4;
        font-size: 5rem;
        line-height: 1;
        margin-bottom: 0;
        @media only screen and (max-width: 890px) {
            font-size: 2.5rem;
        }
    }
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Neue Haas Bold', serif;
        color: #E4E4E4;
        font-size: 56px;
        line-height: 1;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    p {
        color: #E4E4E4;
        font-size: 21px;        
        line-height: 1.50;
        @media only screen and (max-width: 890px) {
            font-size: 1.1rem;
        }
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;

    }
    
 

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-carousel .slick-prev,
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover {
      font-size: inherit;
      color: currentColor;
    }

    .ant-carousel .slick-prev,
    .ant-carousel .slick-prev:hover {
      left: 10px;
      z-index: 3;
      color: white;
    }

    .ant-carousel .slick-next,
    .ant-carousel .slick-next:hover {
      right: 10px;
      z-index: 3;
      color: white;
    }
    
    .footer-padding{
        @media only screen and (max-width: 1024px) {
            padding-bottom: 150px;
        }
    }
    
    .organisatie {
        background-image: url(/img/svg/Website-Achtergrond-blauw-contact.svg);
        min-height: 100vh;
        background-position: center; background-size: cover; background-attachment: scroll; background-repeat: no-repeat;
        padding: 8rem 2rem 100px 2rem;
        @media only screen and (max-width: 1024px) {
            padding: 5rem 1rem 150px 1rem;
        }
        p{
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
            @media only screen and (max-width: 890px) {
                margin-bottom: 1rem;
                font-size: 1.4rem;
            }
        }
    }

`;

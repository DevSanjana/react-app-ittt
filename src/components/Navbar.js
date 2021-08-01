import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  // const [show, setShow] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  // const controlNavbar = () => {
  //   if (window.scrollY > 100) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", controlNavbar);
  //   return () => {
  //     window.removeEventListener("scroll", controlNavbar);
  //   };
  // }, []);

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <svg
              width="249"
              height="57"
              viewBox="0 0 249 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="logoTitle "
              role="img"
            >
              <title id="logoTitle">ittoolstraining</title>
              <g id="White-ittlogo">
                <g id="ittt logo 1">
                  <g id="logo">
                    <path
                      id="mainHex"
                      d="M21.5559 5.6551C20.3654 5.6551 19.1748 5.95986 18.1081 6.56924L4.99882 14.0579C2.86542 15.2767 1.55109 17.5292 1.55109 19.9668V34.9449C1.55109 37.3826 2.86542 39.635 4.99882 40.8539L18.1081 48.3434C20.2415 49.5623 22.8702 49.5623 25.0036 48.3434L38.1129 40.8539C40.2464 39.635 41.5607 37.3826 41.5607 34.9449V21.6338C41.5598 21.1391 42.0371 20.5429 42.5458 20.2377C42.728 20.1283 42.9649 20.0016 43.095 19.9071L43.213 19.8367C43.6848 19.5531 44.464 18.9369 44.4358 17.9844C44.4148 17.2775 44.4663 16.5106 44.4493 15.7258C44.4508 15.6884 44.4695 15.2266 44.5727 15.103C44.6372 14.9851 44.7947 14.7631 45.0058 14.6575C45.3046 14.508 45.4271 14.5231 45.6721 14.5434C45.9029 14.5626 46.2762 14.7107 46.4267 14.7769L47.5081 15.3418C47.81 15.4997 48.1744 15.486 48.4635 15.3061L50.2409 14.2013C50.5304 14.0214 50.7006 13.7016 50.6884 13.3638L50.6092 11.2878C50.5963 10.95 50.4024 10.6448 50.1004 10.4868L48.2446 9.51657C47.9422 9.35868 47.5777 9.37141 47.2884 9.55132L45.5109 10.657C45.2216 10.8369 45.0521 11.1557 45.0643 11.4936L45.1175 12.8978L45.1316 13.1393C45.1316 13.1393 45.1021 13.3753 45.0473 13.5413C44.9608 13.7199 44.755 13.9084 44.4399 13.9597C44.0505 14.0359 43.7816 13.9635 43.4736 13.7883C42.5838 13.2053 42.1696 12.9097 41.1797 12.4703C40.0323 11.9886 39.506 12.4287 38.4955 12.9089C38.0154 13.2523 37.311 13.7052 37.2121 13.7582C36.2699 14.2626 35.3259 14.3416 34.3907 13.8245L32.2131 12.679C31.3512 12.0483 31.0997 11.521 30.9492 10.8096C30.8012 9.7517 29.6303 9.0949 28.6983 8.57447L25.0037 6.57013C23.937 5.96075 22.7465 5.65599 21.556 5.65599L21.5559 5.6551Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      id="hex4"
                      d="M43.0961 6.19871C43.0121 6.33871 42.8589 6.42374 42.6943 6.42169L41.683 6.40962C41.5184 6.4079 41.3675 6.31893 41.2869 6.17679L40.7922 5.30398C40.7117 5.16191 40.7138 4.98817 40.7974 4.84817L41.3139 3.98776C41.3979 3.84776 41.5511 3.7627 41.7157 3.76472L42.727 3.77679C42.8916 3.77852 43.0425 3.86748 43.1231 4.0096L43.6179 4.88241C43.6984 5.02448 43.6963 5.19822 43.6127 5.33822L43.0961 6.19871Z"
                      fill="url(#paint1_linear)"
                    />
                    <path
                      id="hex3"
                      d="M48.894 22.7979C48.799 22.9557 48.6266 23.0516 48.4413 23.0493L47.3012 23.0355C47.1157 23.0338 46.9455 22.9333 46.8548 22.7731L46.2971 21.7894C46.2063 21.6292 46.2087 21.4334 46.304 21.2756L46.8862 20.3058C46.981 20.148 47.1536 20.0521 47.3391 20.0544L48.4792 20.0682C48.6645 20.0699 48.8346 20.1704 48.9254 20.3306L49.4833 21.3143C49.5741 21.4745 49.5713 21.6703 49.4763 21.8281L48.894 22.7979Z"
                      fill="url(#paint2_linear)"
                    />
                    <path
                      id="hex2"
                      d="M30.3881 3.86979C30.1983 3.76462 30.0795 3.56726 30.0767 3.35202L30.0591 2.0294C30.0556 1.81416 30.1696 1.61374 30.3565 1.50366L31.5053 0.827226C31.6922 0.717226 31.9244 0.714122 32.1142 0.818605L33.2806 1.46478C33.4704 1.56995 33.5891 1.76733 33.592 1.98257L33.6096 3.30519C33.6131 3.52043 33.4991 3.72085 33.3121 3.83093L32.1634 4.50736C31.9764 4.61754 31.7443 4.62047 31.5544 4.51598L30.3881 3.86979Z"
                      fill="url(#paint3_linear)"
                    />
                    <path
                      id="hex1"
                      d="M35.0933 5.80155C35.4353 5.60617 35.8565 5.60617 36.1984 5.80155L38.2994 7.00181C38.6414 7.19714 38.852 7.55817 38.852 7.94883V10.3494C38.852 10.7401 38.6414 11.1011 38.2994 11.2964L36.1984 12.4967C35.8565 12.692 35.4353 12.692 35.0933 12.4967L32.9923 11.2964C32.6504 11.1011 32.4397 10.7401 32.4397 10.3494V7.94883C32.4397 7.55817 32.6504 7.19714 32.9923 7.00181L35.0933 5.80155Z"
                      fill="url(#paint4_linear)"
                    />
                    <path
                      id="text"
                      d="M30.4169 13.4046C30.1219 13.4017 29.8248 13.4003 29.501 13.4015L20.9088 13.4101C20.4235 13.4111 19.9168 13.3998 19.4098 13.4436C18.1017 13.7437 16.7008 13.6959 16.7076 15.1507C17.1098 15.1963 17.8308 15.3006 18.1144 15.303L19.2556 15.4025L20.5085 15.564C20.9323 15.5949 20.8947 16.0331 20.9135 16.346V18.4282H18.6084H18.1474V20.709H22.2966V41.237H30.5949V20.709H35.2051V16.6898C35.1662 15.842 35.0147 15.295 34.3433 14.8676C33.5461 14.4178 32.6365 13.8785 31.9189 13.6004C31.4306 13.3836 30.896 13.4108 30.4169 13.4046ZM13.1696 22.0776C12.2594 22.1452 11.2385 23.0117 11.2733 24.42L11.2327 41.2371H19.531V22.0776H13.1696Z"
                      fill="white"
                    />
                    <path
                      id="rect4"
                      d="M16.7651 18.428H14.46V20.7089H16.7651V18.428Z"
                      fill="white"
                    />
                    <path
                      id="rect3"
                      d="M18.6091 16.1492H16.304V18.4301H18.6091V16.1492Z"
                      fill="white"
                    />
                    <path
                      id="rect2"
                      d="M14.46 16.1472H12.1549V18.4281H14.46V16.1472Z"
                      fill="white"
                    />
                    <path
                      id="rect1"
                      d="M11.2328 15.2347H8.92773V17.5156H11.2328V15.2347Z"
                      fill="white"
                    />
                  </g>
                </g>
                <path
                  id="logo-text"
                  d="M61.503 38.163C61.125 38.487 60.657 38.739 60.099 38.919C59.541 39.081 58.965 39.162 58.371 39.162C56.931 39.162 55.815 38.775 55.023 38.001C54.231 37.227 53.835 36.12 53.835 34.68V26.823H51.405V24.69H53.835V21.558H56.427V24.69H60.531V26.823H56.427V34.572C56.427 35.346 56.616 35.94 56.994 36.354C57.39 36.768 57.948 36.975 58.668 36.975C59.46 36.975 60.135 36.75 60.693 36.3L61.503 38.163ZM71.6411 39.162C70.2191 39.162 68.9411 38.847 67.8071 38.217C66.6731 37.587 65.7821 36.723 65.1341 35.625C64.5041 34.509 64.1891 33.249 64.1891 31.845C64.1891 30.441 64.5041 29.19 65.1341 28.092C65.7821 26.976 66.6731 26.112 67.8071 25.5C68.9411 24.87 70.2191 24.555 71.6411 24.555C73.0631 24.555 74.3321 24.87 75.4481 25.5C76.5821 26.112 77.4641 26.976 78.0941 28.092C78.7421 29.19 79.0661 30.441 79.0661 31.845C79.0661 33.249 78.7421 34.509 78.0941 35.625C77.4641 36.723 76.5821 37.587 75.4481 38.217C74.3321 38.847 73.0631 39.162 71.6411 39.162ZM71.6411 36.894C72.5591 36.894 73.3781 36.687 74.0981 36.273C74.8361 35.841 75.4121 35.247 75.8261 34.491C76.2401 33.717 76.4471 32.835 76.4471 31.845C76.4471 30.855 76.2401 29.982 75.8261 29.226C75.4121 28.452 74.8361 27.858 74.0981 27.444C73.3781 27.03 72.5591 26.823 71.6411 26.823C70.7231 26.823 69.8951 27.03 69.1571 27.444C68.4371 27.858 67.8611 28.452 67.4291 29.226C67.0151 29.982 66.8081 30.855 66.8081 31.845C66.8081 32.835 67.0151 33.717 67.4291 34.491C67.8611 35.247 68.4371 35.841 69.1571 36.273C69.8951 36.687 70.7231 36.894 71.6411 36.894ZM90.1298 39.162C88.7078 39.162 87.4298 38.847 86.2958 38.217C85.1618 37.587 84.2708 36.723 83.6228 35.625C82.9928 34.509 82.6778 33.249 82.6778 31.845C82.6778 30.441 82.9928 29.19 83.6228 28.092C84.2708 26.976 85.1618 26.112 86.2958 25.5C87.4298 24.87 88.7078 24.555 90.1298 24.555C91.5518 24.555 92.8208 24.87 93.9368 25.5C95.0708 26.112 95.9528 26.976 96.5828 28.092C97.2308 29.19 97.5548 30.441 97.5548 31.845C97.5548 33.249 97.2308 34.509 96.5828 35.625C95.9528 36.723 95.0708 37.587 93.9368 38.217C92.8208 38.847 91.5518 39.162 90.1298 39.162ZM90.1298 36.894C91.0478 36.894 91.8668 36.687 92.5868 36.273C93.3248 35.841 93.9008 35.247 94.3148 34.491C94.7288 33.717 94.9358 32.835 94.9358 31.845C94.9358 30.855 94.7288 29.982 94.3148 29.226C93.9008 28.452 93.3248 27.858 92.5868 27.444C91.8668 27.03 91.0478 26.823 90.1298 26.823C89.2118 26.823 88.3838 27.03 87.6458 27.444C86.9258 27.858 86.3498 28.452 85.9178 29.226C85.5038 29.982 85.2968 30.855 85.2968 31.845C85.2968 32.835 85.5038 33.717 85.9178 34.491C86.3498 35.247 86.9258 35.841 87.6458 36.273C88.3838 36.687 89.2118 36.894 90.1298 36.894ZM102.489 18.966H105.081V39H102.489V18.966ZM115.484 39.162C114.314 39.162 113.189 39.009 112.109 38.703C111.029 38.379 110.183 37.974 109.571 37.488L110.651 35.436C111.281 35.886 112.046 36.246 112.946 36.516C113.846 36.786 114.755 36.921 115.673 36.921C117.941 36.921 119.075 36.273 119.075 34.977C119.075 34.545 118.922 34.203 118.616 33.951C118.31 33.699 117.923 33.519 117.455 33.411C117.005 33.285 116.357 33.15 115.511 33.006C114.359 32.826 113.414 32.619 112.676 32.385C111.956 32.151 111.335 31.755 110.813 31.197C110.291 30.639 110.03 29.856 110.03 28.848C110.03 27.552 110.57 26.517 111.65 25.743C112.73 24.951 114.179 24.555 115.997 24.555C116.951 24.555 117.905 24.672 118.859 24.906C119.813 25.14 120.596 25.455 121.208 25.851L120.101 27.903C118.931 27.147 117.554 26.769 115.97 26.769C114.872 26.769 114.035 26.949 113.459 27.309C112.883 27.669 112.595 28.146 112.595 28.74C112.595 29.208 112.757 29.577 113.081 29.847C113.405 30.117 113.801 30.315 114.269 30.441C114.755 30.567 115.43 30.711 116.294 30.873C117.446 31.071 118.373 31.287 119.075 31.521C119.795 31.737 120.407 32.115 120.911 32.655C121.415 33.195 121.667 33.951 121.667 34.923C121.667 36.219 121.109 37.254 119.993 38.028C118.895 38.784 117.392 39.162 115.484 39.162ZM134.303 38.163C133.925 38.487 133.457 38.739 132.899 38.919C132.341 39.081 131.765 39.162 131.171 39.162C129.731 39.162 128.615 38.775 127.823 38.001C127.031 37.227 126.635 36.12 126.635 34.68V26.823H124.205V24.69H126.635V21.558H129.227V24.69H133.331V26.823H129.227V34.572C129.227 35.346 129.416 35.94 129.794 36.354C130.19 36.768 130.748 36.975 131.468 36.975C132.26 36.975 132.935 36.75 133.493 36.3L134.303 38.163ZM141.27 27.093C141.72 26.265 142.386 25.635 143.268 25.203C144.15 24.771 145.221 24.555 146.481 24.555V27.066C146.337 27.048 146.139 27.039 145.887 27.039C144.483 27.039 143.376 27.462 142.566 28.308C141.774 29.136 141.378 30.324 141.378 31.872V39H138.786V24.69H141.27V27.093ZM156.211 24.555C158.191 24.555 159.703 25.041 160.747 26.013C161.809 26.985 162.34 28.434 162.34 30.36V39H159.883V37.11C159.451 37.776 158.83 38.289 158.02 38.649C157.228 38.991 156.283 39.162 155.185 39.162C153.583 39.162 152.296 38.775 151.324 38.001C150.37 37.227 149.893 36.21 149.893 34.95C149.893 33.69 150.352 32.682 151.27 31.926C152.188 31.152 153.646 30.765 155.644 30.765H159.748V30.252C159.748 29.136 159.424 28.281 158.776 27.687C158.128 27.093 157.174 26.796 155.914 26.796C155.068 26.796 154.24 26.94 153.43 27.228C152.62 27.498 151.936 27.867 151.378 28.335L150.298 26.391C151.036 25.797 151.918 25.347 152.944 25.041C153.97 24.717 155.059 24.555 156.211 24.555ZM155.617 37.164C156.607 37.164 157.462 36.948 158.182 36.516C158.902 36.066 159.424 35.436 159.748 34.626V32.628H155.752C153.556 32.628 152.458 33.366 152.458 34.842C152.458 35.562 152.737 36.129 153.295 36.543C153.853 36.957 154.627 37.164 155.617 37.164ZM168.486 24.69H171.078V39H168.486V24.69ZM169.782 21.936C169.278 21.936 168.855 21.774 168.513 21.45C168.189 21.126 168.027 20.73 168.027 20.262C168.027 19.794 168.189 19.398 168.513 19.074C168.855 18.732 169.278 18.561 169.782 18.561C170.286 18.561 170.7 18.723 171.024 19.047C171.366 19.353 171.537 19.74 171.537 20.208C171.537 20.694 171.366 21.108 171.024 21.45C170.7 21.774 170.286 21.936 169.782 21.936ZM185.019 24.555C186.837 24.555 188.277 25.086 189.339 26.148C190.419 27.192 190.959 28.731 190.959 30.765V39H188.367V31.062C188.367 29.676 188.034 28.632 187.368 27.93C186.702 27.228 185.748 26.877 184.506 26.877C183.102 26.877 181.995 27.291 181.185 28.119C180.375 28.929 179.97 30.099 179.97 31.629V39H177.378V24.69H179.862V26.85C180.384 26.112 181.086 25.545 181.968 25.149C182.868 24.753 183.885 24.555 185.019 24.555ZM197.105 24.69H199.697V39H197.105V24.69ZM198.401 21.936C197.897 21.936 197.474 21.774 197.132 21.45C196.808 21.126 196.646 20.73 196.646 20.262C196.646 19.794 196.808 19.398 197.132 19.074C197.474 18.732 197.897 18.561 198.401 18.561C198.905 18.561 199.319 18.723 199.643 19.047C199.985 19.353 200.156 19.74 200.156 20.208C200.156 20.694 199.985 21.108 199.643 21.45C199.319 21.774 198.905 21.936 198.401 21.936ZM213.637 24.555C215.455 24.555 216.895 25.086 217.957 26.148C219.037 27.192 219.577 28.731 219.577 30.765V39H216.985V31.062C216.985 29.676 216.652 28.632 215.986 27.93C215.32 27.228 214.366 26.877 213.124 26.877C211.72 26.877 210.613 27.291 209.803 28.119C208.993 28.929 208.588 30.099 208.588 31.629V39H205.996V24.69H208.48V26.85C209.002 26.112 209.704 25.545 210.586 25.149C211.486 24.753 212.503 24.555 213.637 24.555ZM239.492 24.69V37.056C239.492 39.558 238.871 41.403 237.629 42.591C236.387 43.797 234.533 44.4 232.067 44.4C230.717 44.4 229.43 44.211 228.206 43.833C226.982 43.473 225.992 42.951 225.236 42.267L226.478 40.269C227.144 40.845 227.963 41.295 228.935 41.619C229.925 41.961 230.942 42.132 231.986 42.132C233.66 42.132 234.893 41.736 235.685 40.944C236.495 40.152 236.9 38.946 236.9 37.326V36.192C236.288 36.93 235.532 37.488 234.632 37.866C233.75 38.226 232.787 38.406 231.743 38.406C230.375 38.406 229.133 38.118 228.017 37.542C226.919 36.948 226.055 36.129 225.425 35.085C224.795 34.023 224.48 32.817 224.48 31.467C224.48 30.117 224.795 28.92 225.425 27.876C226.055 26.814 226.919 25.995 228.017 25.419C229.133 24.843 230.375 24.555 231.743 24.555C232.823 24.555 233.822 24.753 234.74 25.149C235.676 25.545 236.441 26.13 237.035 26.904V24.69H239.492ZM232.04 36.138C232.976 36.138 233.813 35.94 234.551 35.544C235.307 35.148 235.892 34.599 236.306 33.897C236.738 33.177 236.954 32.367 236.954 31.467C236.954 30.081 236.495 28.965 235.577 28.119C234.659 27.255 233.48 26.823 232.04 26.823C230.582 26.823 229.394 27.255 228.476 28.119C227.558 28.965 227.099 30.081 227.099 31.467C227.099 32.367 227.306 33.177 227.72 33.897C228.152 34.599 228.737 35.148 229.475 35.544C230.231 35.94 231.086 36.138 232.04 36.138Z"
                  fill="white"
                />
                <path
                  id="caption"
                  d="M54.2017 54H55.1108L56.7159 48.2045H56.7727L58.3778 54H59.2869L61.2756 46.7273H60.3807L58.8608 52.6506H58.7898L57.2415 46.7273H56.2472L54.6989 52.6506H54.6278L53.108 46.7273H52.2131L54.2017 54ZM64.4673 54.1136C65.9446 54.1136 66.9389 52.9915 66.9389 51.3011C66.9389 49.5966 65.9446 48.4744 64.4673 48.4744C62.9901 48.4744 61.9957 49.5966 61.9957 51.3011C61.9957 52.9915 62.9901 54.1136 64.4673 54.1136ZM64.4673 53.3608C63.3452 53.3608 62.8338 52.3949 62.8338 51.3011C62.8338 50.2074 63.3452 49.2273 64.4673 49.2273C65.5895 49.2273 66.1009 50.2074 66.1009 51.3011C66.1009 52.3949 65.5895 53.3608 64.4673 53.3608ZM68.7182 54H69.5563V50.5483C69.5563 49.8097 70.1387 49.2699 70.9341 49.2699C71.1578 49.2699 71.3887 49.3125 71.4455 49.3267V48.4744C71.3496 48.4673 71.1294 48.4602 71.0051 48.4602C70.3517 48.4602 69.7836 48.8295 69.5847 49.3693H69.5279V48.5455H68.7182V54ZM73.777 46.7273H72.9389V54H73.777V46.7273ZM77.8716 54.1136C78.9228 54.1136 79.2779 53.4602 79.4625 53.1619H79.562V54H80.3716V46.7273H79.5336V49.4119H79.4625C79.2779 49.1278 78.9512 48.4744 77.8858 48.4744C76.508 48.4744 75.5563 49.5682 75.5563 51.2869C75.5563 53.0199 76.508 54.1136 77.8716 54.1136ZM77.9853 53.3608C76.9341 53.3608 76.3944 52.4375 76.3944 51.2727C76.3944 50.1222 76.9199 49.2273 77.9853 49.2273C79.008 49.2273 79.5478 50.0511 79.5478 51.2727C79.5478 52.5085 78.9938 53.3608 77.9853 53.3608ZM83.2615 46.7273H82.4661V47.3807C82.4661 47.9062 82.2104 48.3608 81.9121 48.7869L82.3667 49.1562C82.9348 48.7017 83.2615 47.9489 83.2615 47.3665V46.7273ZM87.9608 49.767C87.698 48.9929 87.1085 48.4744 86.0289 48.4744C84.8784 48.4744 84.0261 49.1278 84.0261 50.0511C84.0261 50.804 84.4735 51.3082 85.475 51.5426L86.3841 51.7557C86.9345 51.8835 87.1937 52.1463 87.1937 52.5227C87.1937 52.9915 86.6966 53.375 85.9153 53.375C85.2299 53.375 84.8002 53.0803 84.6511 52.4943L83.8556 52.6932C84.051 53.62 84.8145 54.1136 85.9295 54.1136C87.1973 54.1136 88.0602 53.4212 88.0602 52.4801C88.0602 51.7202 87.5843 51.2408 86.6113 51.0028L85.8017 50.804C85.1554 50.6442 84.8642 50.4276 84.8642 50.0085C84.8642 49.5398 85.3613 49.1989 86.0289 49.1989C86.7605 49.1989 87.0623 49.6037 87.2079 49.9801L87.9608 49.767ZM93.2479 54H95.8757C97.5945 54 98.3047 53.1619 98.3047 52.0682C98.3047 50.9176 97.5092 50.2926 96.8416 50.25V50.179C97.4666 50.0085 98.0206 49.5966 98.0206 48.6591C98.0206 47.5938 97.3104 46.7273 95.7905 46.7273H93.2479V54ZM94.1286 53.2188V50.6903H95.9183C96.87 50.6903 97.4666 51.3295 97.4666 52.0682C97.4666 52.7074 97.0263 53.2188 95.8757 53.2188H94.1286ZM94.1286 49.9233V47.5085H95.7905C96.7564 47.5085 97.1825 48.0199 97.1825 48.6591C97.1825 49.4261 96.5575 49.9233 95.7621 49.9233H94.1286ZM102.425 54.1136C103.533 54.1136 104.343 53.5597 104.598 52.7358L103.789 52.5085C103.576 53.0767 103.082 53.3608 102.425 53.3608C101.441 53.3608 100.763 52.7251 100.724 51.5568H104.684V51.2017C104.684 49.1705 103.476 48.4744 102.34 48.4744C100.863 48.4744 99.8825 49.6392 99.8825 51.3153C99.8825 52.9915 100.848 54.1136 102.425 54.1136ZM100.724 50.8324C100.781 49.9837 101.381 49.2273 102.34 49.2273C103.249 49.2273 103.831 49.9091 103.831 50.8324H100.724ZM110.322 49.767C110.059 48.9929 109.47 48.4744 108.39 48.4744C107.24 48.4744 106.387 49.1278 106.387 50.0511C106.387 50.804 106.835 51.3082 107.836 51.5426L108.745 51.7557C109.296 51.8835 109.555 52.1463 109.555 52.5227C109.555 52.9915 109.058 53.375 108.277 53.375C107.591 53.375 107.162 53.0803 107.012 52.4943L106.217 52.6932C106.412 53.62 107.176 54.1136 108.291 54.1136C109.559 54.1136 110.422 53.4212 110.422 52.4801C110.422 51.7202 109.946 51.2408 108.973 51.0028L108.163 50.804C107.517 50.6442 107.225 50.4276 107.225 50.0085C107.225 49.5398 107.723 49.1989 108.39 49.1989C109.122 49.1989 109.424 49.6037 109.569 49.9801L110.322 49.767ZM114.555 48.5455H113.39V47.2386H112.552V48.5455H111.729V49.2557H112.552V52.6648C112.552 53.6165 113.319 54.071 114.03 54.071C114.342 54.071 114.541 54.0142 114.655 53.9716L114.484 53.2188C114.413 53.233 114.3 53.2614 114.115 53.2614C113.746 53.2614 113.39 53.1477 113.39 52.4375V49.2557H114.555V48.5455ZM121.915 54.1136C123.023 54.1136 123.833 53.5597 124.089 52.7358L123.279 52.5085C123.066 53.0767 122.572 53.3608 121.915 53.3608C120.932 53.3608 120.253 52.7251 120.214 51.5568H124.174V51.2017C124.174 49.1705 122.966 48.4744 121.83 48.4744C120.353 48.4744 119.373 49.6392 119.373 51.3153C119.373 52.9915 120.339 54.1136 121.915 54.1136ZM120.214 50.8324C120.271 49.9837 120.871 49.2273 121.83 49.2273C122.739 49.2273 123.322 49.9091 123.322 50.8324H120.214ZM129.074 50.4915H125.892V51.2727H129.074V50.4915ZM131.162 54H135.423V53.2188H132.043V46.7273H131.162V54ZM139.46 54.1136C140.568 54.1136 141.378 53.5597 141.634 52.7358L140.824 52.5085C140.611 53.0767 140.117 53.3608 139.46 53.3608C138.477 53.3608 137.798 52.7251 137.759 51.5568H141.719V51.2017C141.719 49.1705 140.511 48.4744 139.375 48.4744C137.898 48.4744 136.918 49.6392 136.918 51.3153C136.918 52.9915 137.884 54.1136 139.46 54.1136ZM137.759 50.8324C137.816 49.9837 138.416 49.2273 139.375 49.2273C140.284 49.2273 140.866 49.9091 140.866 50.8324H137.759ZM145.099 54.1278C146.05 54.1278 146.548 53.6165 146.718 53.2614H146.761V54H147.599V50.4062C147.599 48.6733 146.278 48.4744 145.582 48.4744C144.758 48.4744 143.82 48.7585 143.394 49.7528L144.19 50.0369C144.374 49.6392 144.811 49.2131 145.61 49.2131C146.381 49.2131 146.761 49.6214 146.761 50.321V50.3494C146.761 50.7543 146.349 50.7188 145.354 50.8466C144.342 50.978 143.238 51.2017 143.238 52.4517C143.238 53.517 144.062 54.1278 145.099 54.1278ZM145.227 53.375C144.559 53.375 144.076 53.0767 144.076 52.4943C144.076 51.8551 144.658 51.6562 145.312 51.571C145.667 51.5284 146.619 51.429 146.761 51.2585V52.0256C146.761 52.7074 146.221 53.375 145.227 53.375ZM149.628 54H150.466V50.5483C150.466 49.8097 151.049 49.2699 151.844 49.2699C152.068 49.2699 152.299 49.3125 152.356 49.3267V48.4744C152.26 48.4673 152.04 48.4602 151.915 48.4602C151.262 48.4602 150.694 48.8295 150.495 49.3693H150.438V48.5455H149.628V54ZM154.687 50.7188C154.687 49.767 155.277 49.2273 156.079 49.2273C156.857 49.2273 157.329 49.7351 157.329 50.5909V54H158.167V50.5341C158.167 49.142 157.425 48.4744 156.321 48.4744C155.497 48.4744 154.985 48.8438 154.73 49.3977H154.659V48.5455H153.849V54H154.687V50.7188ZM160.199 54H161.037V48.5455H160.199V54ZM160.625 47.6364C160.952 47.6364 161.221 47.3807 161.221 47.0682C161.221 46.7557 160.952 46.5 160.625 46.5C160.298 46.5 160.028 46.7557 160.028 47.0682C160.028 47.3807 160.298 47.6364 160.625 47.6364ZM163.91 50.7188C163.91 49.767 164.499 49.2273 165.302 49.2273C166.08 49.2273 166.552 49.7351 166.552 50.5909V54H167.39V50.5341C167.39 49.142 166.648 48.4744 165.543 48.4744C164.719 48.4744 164.208 48.8438 163.952 49.3977H163.881V48.5455H163.072V54H163.91V50.7188ZM171.623 56.1591C172.93 56.1591 173.981 55.5625 173.981 54.1562V48.5455H173.171V49.4119H173.086C172.901 49.1278 172.561 48.4744 171.495 48.4744C170.117 48.4744 169.166 49.5682 169.166 51.2443C169.166 52.9489 170.16 53.9148 171.481 53.9148C172.546 53.9148 172.887 53.2898 173.072 52.9915H173.143V54.0994C173.143 55.0085 172.504 55.4205 171.623 55.4205C170.632 55.4205 170.284 54.8984 170.061 54.5966L169.393 55.0653C169.734 55.6371 170.405 56.1591 171.623 56.1591ZM171.595 53.1619C170.544 53.1619 170.004 52.3665 170.004 51.2301C170.004 50.1222 170.529 49.2273 171.595 49.2273C172.617 49.2273 173.157 50.0511 173.157 51.2301C173.157 52.4375 172.603 53.1619 171.595 53.1619ZM179.441 54H183.887V53.2188H180.322V50.7472H183.603V49.9659H180.322V47.5085H183.83V46.7273H179.441V54ZM186.429 48.5455H185.463L187.196 51.2727L185.463 54H186.429L187.736 51.8835L189.043 54H190.009L188.247 51.2727L190.009 48.5455H189.043L187.736 50.7756L186.429 48.5455ZM191.705 56.0455H192.543V53.1619H192.614C192.798 53.4602 193.153 54.1136 194.205 54.1136C195.568 54.1136 196.52 53.0199 196.52 51.2869C196.52 49.5682 195.568 48.4744 194.19 48.4744C193.125 48.4744 192.798 49.1278 192.614 49.4119H192.514V48.5455H191.705V56.0455ZM192.528 51.2727C192.528 50.0511 193.068 49.2273 194.091 49.2273C195.156 49.2273 195.682 50.1222 195.682 51.2727C195.682 52.4375 195.142 53.3608 194.091 53.3608C193.082 53.3608 192.528 52.5085 192.528 51.2727ZM200.585 54.1136C201.693 54.1136 202.503 53.5597 202.759 52.7358L201.949 52.5085C201.736 53.0767 201.242 53.3608 200.585 53.3608C199.602 53.3608 198.923 52.7251 198.884 51.5568H202.844V51.2017C202.844 49.1705 201.636 48.4744 200.5 48.4744C199.023 48.4744 198.043 49.6392 198.043 51.3153C198.043 52.9915 199.009 54.1136 200.585 54.1136ZM198.884 50.8324C198.941 49.9837 199.541 49.2273 200.5 49.2273C201.409 49.2273 201.991 49.9091 201.991 50.8324H198.884ZM204.619 54H205.457V50.5483C205.457 49.8097 206.039 49.2699 206.835 49.2699C207.058 49.2699 207.289 49.3125 207.346 49.3267V48.4744C207.25 48.4673 207.03 48.4602 206.906 48.4602C206.252 48.4602 205.684 48.8295 205.485 49.3693H205.428V48.5455H204.619V54ZM208.839 54H209.677V48.5455H208.839V54ZM209.265 47.6364C209.592 47.6364 209.862 47.3807 209.862 47.0682C209.862 46.7557 209.592 46.5 209.265 46.5C208.939 46.5 208.669 46.7557 208.669 47.0682C208.669 47.3807 208.939 47.6364 209.265 47.6364ZM213.999 54.1136C215.107 54.1136 215.917 53.5597 216.173 52.7358L215.363 52.5085C215.15 53.0767 214.656 53.3608 213.999 53.3608C213.016 53.3608 212.337 52.7251 212.298 51.5568H216.258V51.2017C216.258 49.1705 215.05 48.4744 213.914 48.4744C212.437 48.4744 211.457 49.6392 211.457 51.3153C211.457 52.9915 212.423 54.1136 213.999 54.1136ZM212.298 50.8324C212.355 49.9837 212.955 49.2273 213.914 49.2273C214.823 49.2273 215.406 49.9091 215.406 50.8324H212.298ZM218.871 50.7188C218.871 49.767 219.46 49.2273 220.263 49.2273C221.04 49.2273 221.513 49.7351 221.513 50.5909V54H222.351V50.5341C222.351 49.142 221.609 48.4744 220.504 48.4744C219.68 48.4744 219.169 48.8438 218.913 49.3977H218.842V48.5455H218.033V54H218.871V50.7188ZM226.598 54.1136C227.806 54.1136 228.601 53.375 228.743 52.4091H227.905C227.749 53.0057 227.252 53.3608 226.598 53.3608C225.604 53.3608 224.965 52.5369 224.965 51.2727C224.965 50.0369 225.618 49.2273 226.598 49.2273C227.337 49.2273 227.777 49.6818 227.905 50.179H228.743C228.601 49.1562 227.735 48.4744 226.584 48.4744C225.107 48.4744 224.127 49.6392 224.127 51.3011C224.127 52.9347 225.064 54.1136 226.598 54.1136ZM232.755 54.1136C233.863 54.1136 234.673 53.5597 234.928 52.7358L234.119 52.5085C233.906 53.0767 233.412 53.3608 232.755 53.3608C231.771 53.3608 231.093 52.7251 231.054 51.5568H235.014V51.2017C235.014 49.1705 233.806 48.4744 232.67 48.4744C231.193 48.4744 230.213 49.6392 230.213 51.3153C230.213 52.9915 231.178 54.1136 232.755 54.1136ZM231.054 50.8324C231.111 49.9837 231.711 49.2273 232.67 49.2273C233.579 49.2273 234.161 49.9091 234.161 50.8324H231.054Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8.68853"
                  y1="48.6438"
                  x2="50.2368"
                  y2="10.1065"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F15C23" />
                  <stop offset="0.154645" stop-color="#F15C23" />
                  <stop offset="0.308354" stop-color="#F37021" />
                  <stop offset="0.486022" stop-color="#F7921D" />
                  <stop offset="0.62803" stop-color="#FBB419" />
                  <stop offset="0.822151" stop-color="#FBC610" />
                  <stop offset="0.910191" stop-color="#FAA91A" />
                  <stop offset="0.96212" stop-color="#FBC610" />
                  <stop offset="1" stop-color="#FBCC0E" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="40.534"
                  y1="7.45876"
                  x2="43.0499"
                  y2="4.67252"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F15C23" />
                  <stop offset="0.154645" stop-color="#F15C23" />
                  <stop offset="0.308354" stop-color="#F37021" />
                  <stop offset="0.486022" stop-color="#F7921D" />
                  <stop offset="0.719018" stop-color="#FBB419" />
                  <stop offset="1" stop-color="#FBCC0E" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="46.0429"
                  y1="23.4104"
                  x2="50.0801"
                  y2="20.2095"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F15C23" />
                  <stop offset="0.154645" stop-color="#F15C23" />
                  <stop offset="0.308354" stop-color="#F37021" />
                  <stop offset="0.486022" stop-color="#F7921D" />
                  <stop offset="0.719018" stop-color="#FBB419" />
                  <stop offset="1" stop-color="#FBCC0E" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="29.8598"
                  y1="5.29572"
                  x2="33.502"
                  y2="1.38046"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F15C23" />
                  <stop offset="0.154645" stop-color="#F15C23" />
                  <stop offset="0.308354" stop-color="#F37021" />
                  <stop offset="0.486022" stop-color="#F7921D" />
                  <stop offset="0.719018" stop-color="#FBB419" />
                  <stop offset="1" stop-color="#FBCC0E" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear"
                  x1="33.0032"
                  y1="12.0299"
                  x2="38.9837"
                  y2="6.67032"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F15C23" />
                  <stop offset="0.154645" stop-color="#F15C23" />
                  <stop offset="0.308354" stop-color="#F37021" />
                  <stop offset="0.486022" stop-color="#F7921D" />
                  <stop offset="0.719018" stop-color="#FBB419" />
                  <stop offset="1" stop-color="#FBCC0E" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Course-Library"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Pricing"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Purchase Plans
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Testimonals"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Testimonals
              </Link>
            </li>

            <li>
              <Link
                to="/Log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                LOGIN
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile-primary"
                onClick={closeMobileMenu}
              >
                TRY FOR FREE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">LOG IN</Button>}
          <div className={navbar ? "nav-btn active" : "nav-btn"}>
            {button && <Button>TRY FOR FREE</Button>}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
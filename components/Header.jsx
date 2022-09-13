import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { analytics } from "../segment/analytics";
import {
  browserName,
  deviceType,
  browserVersion,
  osName,
  mobileModel,
  mobileVendor,
} from "react-device-detect";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);

  const browser = browserName;
  const Device = deviceType;

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div>
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-screen-xl mx-auto pr-5 sm:pr-6 ">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="cursor-pointer items-start justify-items-start flex-shrink-0 mr-4">
              {/* Logo */}
              <Link
                href="/"
                type="button"
                className="cursor-pointer block"
                aria-label="Cruip"
                passHref
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="40"
                  viewBox="0 0 1274 254"
                  fill="none"
                >
                  <path
                    d="M286.077 63.1151C281.769 59.3401 276.511 56.8226 270.876 55.8361C265.241 54.8496 259.444 55.432 254.116 57.5201C238.702 63.3629 226.745 73.727 215.179 83.7609C209.313 88.8398 203.777 93.609 197.994 97.6762L197.644 97.9036L197.356 98.1309L194.804 99.8855C194.694 99.9597 194.577 100.022 194.454 100.072L159.756 123.525C159.616 123.631 159.464 123.721 159.303 123.794C151.874 128.522 144.342 132.981 136.542 137.11C122.591 144.746 107.823 150.772 92.5207 155.072C87.2685 156.734 81.8631 157.861 76.386 158.438C71.1717 159.233 65.8507 158.959 60.7451 157.632C49.9405 154.783 45.8245 148.899 45.8245 148.899C38.8273 140.641 35.3902 126.911 35.6578 107.607C35.9253 88.3031 37.7159 63.4661 48.8497 43.6048C52.2043 37.6795 57.0819 31.6301 61.3626 31.6301C61.6361 31.5985 61.9121 31.5985 62.1856 31.6301C66.0135 32.394 67.6806 39.5996 67.1661 53.0195C66.0542 83.0251 63.0642 112.931 58.2138 142.561C58.052 143.571 58.2696 144.606 58.8248 145.464C59.3799 146.322 60.2329 146.943 61.2184 147.206L62.1856 147.474C67.2984 148.801 72.6259 149.075 77.8471 148.279L79.0821 148.156C79.9864 148.067 80.836 147.681 81.4986 147.058C82.1612 146.434 82.5995 145.607 82.7452 144.708C86.3878 122.142 89.084 98.7499 90.6481 74.0368C90.7023 73.2635 90.9723 72.5211 91.4274 71.8946C91.8825 71.2681 92.5042 70.783 93.2214 70.4944C93.9386 70.2057 94.7221 70.1252 95.4826 70.2625C96.2432 70.3997 96.9499 70.7493 97.5218 71.2706C115.04 87.02 134.388 100.593 155.146 111.695C155.792 112.023 156.512 112.175 157.235 112.136C157.957 112.096 158.657 111.866 159.262 111.468L174.615 101.145C175.216 100.741 175.701 100.184 176.019 99.5316C176.337 98.8794 176.479 98.1543 176.429 97.4298C176.378 96.7052 176.139 96.0069 175.734 95.405C175.328 94.8031 174.772 94.3191 174.121 94.0017C162.8 88.4889 151.921 82.104 141.584 74.9043C133.726 69.4721 126.239 63.5195 119.172 57.0866C109.712 48.4093 100.894 39.0525 92.7883 29.0907C85.4 20.151 79.1232 10.0141 66.9398 7.55718C52.0809 4.58418 37.6543 13.2763 27.4054 31.486C13.5138 56.1371 11.3734 84.8967 10.9413 107.194C10.4679 140.537 19.77 163.31 38.6009 174.892C41.3938 176.615 44.3516 178.054 47.4298 179.187C48.3479 179.539 49.1097 180.21 49.5778 181.077C50.0458 181.944 50.1892 182.95 49.9817 183.914C46.1538 200.844 41.7497 218.042 34.5878 233.98C34.2547 234.748 34.08 235.576 34.0746 236.413C34.0692 237.25 34.233 238.08 34.5562 238.852C34.8793 239.623 35.3551 240.321 35.9547 240.904C36.5544 241.486 37.2656 241.94 38.0452 242.239L49.4466 246.513C50.8915 247.057 52.4873 247.04 53.9196 246.463C55.352 245.886 56.5169 244.791 57.1848 243.395C59.2428 239.039 60.8892 234.084 63.8527 225.949C68.2204 213.266 71.7473 200.306 74.4104 187.156C74.688 185.9 75.3483 184.763 76.2998 183.901C77.2513 183.039 78.4466 182.495 79.7199 182.345C102.852 179.93 127.651 169.483 147.779 158.85C164.637 149.625 180.95 139.429 196.636 128.315C197.423 127.77 198.383 127.534 199.332 127.654C223.431 130.503 252.84 133.456 275.622 117.331C284.361 111.319 290.765 102.466 293.753 92.2673C295.323 87.1744 295.435 81.7421 294.078 76.5883C292.721 71.4345 289.949 66.7661 286.077 63.1151ZM270.23 85.8255C268.735 90.5213 265.695 94.5687 261.607 97.3048C257.091 100.387 252.014 102.548 246.666 103.664C242.765 104.616 238.805 105.306 234.812 105.729C233.556 105.729 231.581 106.203 231.025 104.655C230.922 104.228 230.922 103.781 231.025 103.354C231.354 101.413 235.47 98.4611 237.199 96.9746C239.833 94.7242 243.188 92.4326 245.966 90.368C249.768 87.4648 253.825 84.9145 258.088 82.7493C261.34 81.1389 266.32 78.4139 269.613 81.4282C269.901 81.6966 271.012 82.7085 270.169 85.7847L270.23 85.8255Z"
                    fill="#1169F9"
                  />
                  <path
                    d="M370.235 187.956V32.6643H462.137L461.077 55.4545H398.749V99.5509H458.003V122.129H398.749V187.956H370.235Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M522.164 189.546C514.178 189.546 507.535 188.627 502.235 186.79C497.006 184.882 492.872 181.878 489.833 177.779C486.795 173.681 484.675 168.805 483.473 163.151C482.272 157.498 481.671 150.467 481.671 142.057V28.5303L509.443 26.7283V141.527C509.443 151.986 510.68 159.088 513.153 162.833C515.627 166.508 520.432 168.345 527.57 168.345C531.103 168.345 535.59 167.957 541.032 167.179L541.774 187.002C541.703 187.002 540.82 187.178 539.124 187.532C537.498 187.885 535.908 188.168 534.354 188.38C532.87 188.662 530.962 188.91 528.63 189.122C526.298 189.404 524.142 189.546 522.164 189.546Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M583.038 190.182C572.226 190.182 563.463 187.214 556.749 181.278C550.107 175.271 546.785 166.649 546.785 155.413C546.785 143.329 550.743 134.39 558.658 128.595C566.572 122.73 578.515 119.02 594.486 117.465C596.676 117.182 599.044 116.9 601.588 116.617C604.132 116.334 606.994 116.052 610.174 115.769C613.354 115.486 615.863 115.239 617.7 115.027V108.879C617.7 101.812 616.075 96.6888 612.824 93.5088C609.573 90.2581 604.627 88.6328 597.984 88.6328C588.514 88.6328 576.819 91.2828 562.898 96.5828C562.827 96.3708 561.661 93.1555 559.4 86.9368C557.138 80.718 555.972 77.538 555.901 77.3967C569.611 71.5313 584.451 68.5986 600.422 68.5986C616.11 68.5986 627.523 72.026 634.66 78.8807C641.798 85.6647 645.366 96.6888 645.366 111.953V187.956H624.802C624.731 187.673 623.954 185.306 622.47 180.854C620.986 176.401 620.244 174.034 620.244 173.751C614.449 179.405 608.761 183.574 603.178 186.26C597.666 188.874 590.952 190.182 583.038 190.182ZM590.564 170.465C596.994 170.465 602.577 168.946 607.312 165.907C612.117 162.798 615.545 159.053 617.594 154.671V132.199C617.382 132.199 615.509 132.34 611.976 132.623C608.513 132.906 606.641 133.047 606.358 133.047C595.122 134.036 586.889 136.156 581.66 139.407C576.43 142.658 573.816 147.887 573.816 155.095C573.816 160.042 575.264 163.858 578.162 166.543C581.059 169.158 585.193 170.465 590.564 170.465Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M693.414 240.108L691.824 217.636H705.922C722.247 217.636 733.659 215.445 740.161 211.064C746.662 206.753 749.913 198.803 749.913 187.214C749.913 182.479 749.701 177.355 749.277 171.843C747.439 174.387 745.673 176.507 743.977 178.204C742.351 179.829 740.267 181.454 737.723 183.08C735.249 184.705 732.246 185.942 728.713 186.79C725.25 187.567 721.293 187.956 716.84 187.956C701.435 187.956 688.75 182.408 678.786 171.313C668.893 160.219 663.946 145.909 663.946 128.383C663.946 119.055 665.324 110.575 668.08 102.943C670.836 95.2402 674.581 88.9154 679.316 83.9687C684.051 79.022 689.492 75.2413 695.64 72.6266C701.859 69.9413 708.466 68.5986 715.462 68.5986C731.08 68.5986 742.705 74.2873 750.337 85.6647L752.245 71.4606H777.049V179.688C777.049 185.482 776.766 190.676 776.201 195.27C775.636 199.934 774.646 204.386 773.233 208.626C771.82 212.936 769.947 216.682 767.615 219.862C765.354 223.042 762.491 225.939 759.029 228.554C755.566 231.169 751.467 233.289 746.733 234.914C742.069 236.61 736.627 237.882 730.409 238.73C724.19 239.649 717.194 240.108 709.42 240.108H693.414ZM721.292 168.557C740.443 168.557 750.125 155.731 750.337 130.079V126.051C750.195 114.532 747.793 105.628 743.129 99.3389C738.465 93.0495 731.645 89.8694 722.671 89.7988C712.494 89.7988 704.792 93.2968 699.562 100.293C694.333 107.218 691.718 116.582 691.718 128.383C691.718 139.761 694.333 149.301 699.562 157.003C704.862 164.706 712.106 168.557 721.292 168.557Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M801.353 187.956V71.4607H824.673L828.277 89.2689C835.909 77.0434 846.969 70.9307 861.455 70.9307C864.494 70.9307 866.967 71.0721 868.875 71.3547L868.451 94.5689C865.625 94.1449 862.692 93.9329 859.653 93.9329C849.407 93.9329 841.739 96.6536 836.651 102.095C831.634 107.536 829.125 115.098 829.125 124.779V187.956H801.353Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M883.215 187.956V71.4606H910.987V187.956H883.215ZM883.215 54.5005V30.7563H911.093V54.5005H883.215Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M960.096 240.108L958.506 217.636H972.604C988.928 217.636 1000.34 215.445 1006.84 211.064C1013.34 206.753 1016.59 198.803 1016.59 187.214C1016.59 182.479 1016.38 177.355 1015.96 171.843C1014.12 174.387 1012.35 176.507 1010.66 178.204C1009.03 179.829 1006.95 181.454 1004.4 183.08C1001.93 184.705 998.927 185.942 995.394 186.79C991.931 187.567 987.974 187.956 983.522 187.956C968.116 187.956 955.431 182.408 945.467 171.313C935.574 160.219 930.627 145.909 930.627 128.383C930.627 119.055 932.005 110.575 934.761 102.943C937.517 95.2402 941.263 88.9154 945.997 83.9687C950.732 79.022 956.173 75.2413 962.322 72.6266C968.54 69.9413 975.148 68.5986 982.144 68.5986C997.761 68.5986 1009.39 74.2873 1017.02 85.6647L1018.93 71.4606H1043.73V179.688C1043.73 185.482 1043.45 190.676 1042.88 195.27C1042.32 199.934 1041.33 204.386 1039.91 208.626C1038.5 212.936 1036.63 216.682 1034.3 219.862C1032.03 223.042 1029.17 225.939 1025.71 228.554C1022.25 231.169 1018.15 233.289 1013.41 234.914C1008.75 236.61 1003.31 237.882 997.09 238.73C990.871 239.649 983.875 240.108 976.102 240.108H960.096ZM987.974 168.557C1007.12 168.557 1016.81 155.731 1017.02 130.079V126.051C1016.88 114.532 1014.47 105.628 1009.81 99.3389C1005.15 93.0495 998.327 89.8694 989.352 89.7988C979.176 89.7988 971.473 93.2968 966.244 100.293C961.014 107.218 958.4 116.582 958.4 128.383C958.4 139.761 961.014 149.301 966.244 157.003C971.544 164.706 978.787 168.557 987.974 168.557Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M1067.93 187.956V28.5303L1095.7 26.7283V60.3305C1095.7 61.9559 1095.59 66.4786 1095.38 73.8986C1095.17 81.248 1095.06 84.9934 1095.06 85.1347C1104.32 74.1107 1116.76 68.5986 1132.38 68.5986C1145.38 68.5986 1155.45 72.344 1162.59 79.8347C1169.79 87.2548 1173.4 98.7029 1173.4 114.179V187.956H1145.63V117.253C1145.63 107.713 1144.11 100.717 1141.07 96.2648C1138.03 91.8128 1132.87 89.5868 1125.59 89.5868C1119.37 89.5868 1113.86 91.1768 1109.06 94.3568C1104.25 97.4662 1100.65 101.494 1098.24 106.441C1096.55 112.942 1095.7 121.422 1095.7 131.881V187.956H1067.93Z"
                    fill="#293F7A"
                  />
                  <path
                    d="M1244.13 189.546C1236.22 189.546 1229.61 188.627 1224.31 186.79C1219.08 184.882 1214.98 181.914 1212.01 177.885C1209.04 173.857 1206.92 169.123 1205.65 163.681C1204.45 158.169 1203.85 151.385 1203.85 143.329V88.3148H1184.77L1185.83 73.2626L1205.76 71.4606L1214.66 39.8724L1231.62 39.7664V71.4606H1260.56V88.3148H1231.62V143.859C1231.62 152.693 1232.9 158.982 1235.44 162.727C1237.98 166.473 1242.68 168.345 1249.54 168.345C1253.57 168.345 1257.88 167.992 1262.47 167.285L1263.21 187.214C1263.07 187.214 1262.19 187.39 1260.56 187.744C1259.01 188.026 1257.49 188.274 1256 188.486C1254.59 188.768 1252.75 189.016 1250.49 189.228C1248.23 189.44 1246.11 189.546 1244.13 189.546Z"
                    fill="#293F7A"
                  />
                </svg>
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="hidden lg:flex lg:flex-grow justify-between">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <div className="group inline-block relative">
                    <button className="font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 flex items-center transition duration-150 ease-in-out">
                      <span className="mr-1">Products</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <div className="grid grid-cols-1 bg-white shadow-2xl rounded-md absolute hidden pt-3 group-hover:block group font-medium text-gray-600 hover:text-gray-900 flex items-center transition duration-150 ease-in-out">
                      <div className="group-hover: w-96 py-2">
                        <Link
                          href="/beacon"
                          className="rounded-t py-4 px-4 block whitespace-no-wrap font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out "
                          passHref
                        >
                          <div
                            className="flex flex-row px-3 cursor-pointer"
                            onClick={() =>
                              analytics.track("Clicked Beacon header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="red"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                              >
                                <path
                                  opacity="0.8"
                                  fill="red"
                                  d="M6.079 6.078h4.053v4.053H6.079z"
                                ></path>
                                <path
                                  opacity="0.4"
                                  fill="red"
                                  d="M6.079 11.867h4.053v4.053H6.079z"
                                ></path>
                                <path
                                  opacity="0.6"
                                  fill="red"
                                  d="M11.868 6.078h4.053v4.053h-4.053z"
                                ></path>
                                <path
                                  opacity="0.2"
                                  fill="red"
                                  d="M11.868 11.867h4.053v4.053h-4.053z"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z"
                                  fill="red"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                              <div className="font-bold">Beacon</div>
                              <div className="text-xs text-gray-400">
                                {" "}
                                Real-time transaction monitoring
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="group-hover: w-96 py-2">
                        <Link
                          href="/pulse"
                          type="button"
                          className="overflow-hidden rounded-t py-4 px-4 block whitespace font-medium text-gray-600 hover:text-[#0064DA] hover:bg-[#f5f5f5] px-5 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                          passHref
                        >
                          <div
                            className="flex flex-row px-3 cursor-pointer"
                            onClick={() =>
                              analytics.track("Clicked Pulse header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#F2F1FF]">
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="blue"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                              >
                                <rect
                                  x="6.95996"
                                  y="3.70074"
                                  width="4.62768"
                                  height="2.8923"
                                  fill="blue"
                                  fillOpacity="0.4"
                                ></rect>
                                <rect
                                  x="6.95996"
                                  y="9.48566"
                                  width="4.62768"
                                  height="2.8923"
                                  fill="blue"
                                  fillOpacity="0.4"
                                ></rect>
                                <rect
                                  x="6.95996"
                                  y="15.2706"
                                  width="4.62768"
                                  height="2.8923"
                                  fill="blue"
                                  fillOpacity="0.4"
                                ></rect>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.6859 9.48613V12.3788H11.5874V15.2711H19.6859V18.1628H11.5874V21.0551H21.9997L21.9997 21.0548V3.70109H21.9999V0.808792H21.9997V0.808716H19.6859V0.808792H11.5876V3.70109H19.6859V6.59383H11.5874V9.48613H19.6859Z"
                                  fill="blue"
                                ></path>
                                <circle
                                  cx="2.62137"
                                  cy="5.14709"
                                  r="1.73538"
                                  fill="blue"
                                ></circle>
                                <circle
                                  opacity="0.7"
                                  cx="2.62137"
                                  cy="11.221"
                                  r="1.73538"
                                  fill="blue"
                                ></circle>
                                <circle
                                  opacity="0.3"
                                  cx="2.62137"
                                  cy="17.295"
                                  r="1.73538"
                                  fill="blue"
                                ></circle>
                              </svg>
                            </div>
                            <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                              <div className="font-bold">Pulse</div>
                              <div className="text-xs text-gray-400">
                                {" "}
                                Dynamic customer risk scoring
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>

                      <div className="group-hover: w-96 py-2">
                        <Link
                          href="/launchpad"
                          type="button"
                          className="rounded-t overflow-hidden py-4 px-4 block whitespace font-medium text-gray-600 hover:text-[#0064DA] flex items-center transition hover:bg-[#f5f5f5] duration-150 ease-in-out cursor-pointer"
                          passHref
                        >
                          <div
                            className="flex flex-row px-3 cursor-pointer"
                            onClick={() =>
                              analytics.track(
                                "Clicked Launchpad header label",
                                {
                                  Browser: browser,
                                  BrowserVersion: browserVersion,
                                  Device: Device,
                                  OperatingSystem: osName,
                                  MobileDeviceDetails: {
                                    MobileModel: mobileModel,
                                    MobileVendor: mobileVendor,
                                  },
                                }
                              )
                            }
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#FFEFF4]">
                              <svg
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="blue-300"
                                xmlns="http://www.w3.org/2000/svg"
                                className=""
                              >
                                <path
                                  opacity="0.6"
                                  fill="red"
                                  d="M11.868 6.078h4.053v4.053h-4.053z"
                                ></path>
                                <path
                                  opacity="0.2"
                                  fill="red"
                                  d="M11.868 11.867h4.053v4.053h-4.053z"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.105 0H0v22h22V0h-2.895zm0 2.895H2.895v16.21h16.21V2.895z"
                                  fill="red"
                                ></path>

                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M19.317 5.367H5.366V22H22V5.367h-2.683zm0 2.682H8.05v11.269h11.268V8.049z"
                                  fill="red"
                                ></path>
                                <path
                                  fill="red"
                                  d="M13.952 5.367h2.683V8.05h-2.683zM5.366 13.951h2.683v2.683H5.366z"
                                ></path>
                              </svg>
                            </div>
                            <div className="flex grid grid-rows-2 items-center justify-center rounded ml-3">
                              <div className="font-bold">Launchpad</div>
                              <div className="text-xs text-gray-400">
                                Automate fintech license application
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://docs.flagright.com"
                    className="font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    data-test="developer-tab"
                    onClick={() =>
                      analytics.track("Clicked Developer Docs header label", {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      })
                    }
                  >
                    Developer Docs
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://blog.flagright.com/"
                    className="font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 flex items-center transition duration-150 ease-in-out"
                    onClick={() =>
                      analytics.track("Clicked Blog header label", {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      })
                    }
                  >
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://status.flagright.com/"
                    className="font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 pr-10 flex items-center transition duration-150 ease-in-out"
                    onClick={() =>
                      analytics.track("Clicked Status header label", {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      })
                    }
                  >
                    <>
                      <span
                        style={{
                          height: "8px",
                          width: "8px",
                          background: "#52C41A",
                          borderRadius: "50%",
                          marginRight: "8px",
                        }}
                      ></span>
                      Status{" "}
                    </>
                  </a>
                </li>
              </ul>
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://console.flagright.com/"
                    className="font-medium text-gray-600 hover:text-[#0064DA] px-5 py-3 pr-10 flex items-center transition duration-150 ease-in-out"
                    onClick={() =>
                      analytics.track("Clicked Log In button in header", {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      })
                    }
                  >
                    Log In
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/contact"
                    type="button"
                    className="border font-semibold inline-block rounded text-center transition-all px-4 py-2 text-md bg-[#0064DA] border-transparent text-white hover:bg-[#002c73] hover:text-white lg:mt-0 lg:w-auto "
                    onClick={() =>
                      analytics.track("Clicked Request Demo button in header", {
                        Browser: browser,
                        BrowserVersion: browserVersion,
                        Device: Device,
                        OperatingSystem: osName,
                        MobileDeviceDetails: {
                          MobileModel: mobileModel,
                          MobileVendor: mobileVendor,
                        },
                      })
                    }
                  >
                    Request Demo
                  </a>
                </li>
              </ul>
            </nav>

            <div className="-mr-2 flex lg:hidden z-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-12 z-0">
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div>
              <aside
                id="sidebar"
                className="fixed inset-y-0 right-0 z-20 flex-none w-72 h-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block"
              >
                <div
                  id="navWrapper"
                  className="overflow-hidden overflow-y-auto z-20 h-full bg-white scrolling-touch max-w-2xs lg:h-screen lg:block lg:sticky top:24 lg:top-12 dark:bg-gray-900 lg:mr-0"
                >
                  <nav
                    id="nav"
                    className="pt-16 px-1 pl-3 lg:pl-0 lg:pt-2 overflow-y-auto font-medium text-base lg:text-sm pb-10 lg:pb-20 sticky?lg:h-(screen-18)"
                    aria-label="Docs navigation"
                  >
                    <ul className="mb-0 list-unstyled">
                      <li className="mt-8">
                        <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                          Products
                        </h5>
                        <ul className="py-1 list-unstyled fw-normal small">
                          <li
                            onClick={() =>
                              analytics.track("Clicked Beacon header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            <Link
                              href="/beacon"
                              passHref
                              className="py-3 text-gray-600 duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            >
                              Beacon
                            </Link>
                          </li>
                          <li
                            onClick={() =>
                              analytics.track("Clicked Pulse header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            <Link
                              href="/pulse"
                              passHref
                              className="py-3 text-gray-600 duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            >
                              Pulse
                            </Link>
                          </li>
                          <li
                            onClick={() =>
                              analytics.track(
                                "Clicked Launchpad header label",
                                {
                                  Browser: browser,
                                  BrowserVersion: browserVersion,
                                  Device: Device,
                                  OperatingSystem: osName,
                                  MobileDeviceDetails: {
                                    MobileModel: mobileModel,
                                    MobileVendor: mobileVendor,
                                  },
                                }
                              )
                            }
                          >
                            <Link
                              href="/launchpad"
                              passHref
                              className="py-3 text-gray-600 duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            >
                              Launchpad
                            </Link>
                            {
                              <span className="bg-blue-100 text-blue-800 text-2xs font-semibold ml-2 px-1.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
                                NEW
                              </span>
                            }
                          </li>
                        </ul>
                      </li>
                      <li className="mt-8">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://docs.flagright.com"
                          className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white"
                          onClick={() =>
                            analytics.track(
                              "Clicked Developer Docs header label",
                              {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              }
                            )
                          }
                        >
                          Developer Docs
                        </a>
                      </li>

                      <li className="mt-8">
                        <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://blog.flagright.com/"
                            className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            onClick={() =>
                              analytics.track("Clicked Blog header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            Blog{" "}
                          </a>
                        </h5>
                      </li>
                      <li className="mt-8">
                        <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://status.flagright.com/"
                            className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            onClick={() =>
                              analytics.track("Clicked Status header label", {
                                Browser: browser,
                                BrowserVersion: browserVersion,
                                Device: Device,
                                OperatingSystem: osName,
                                MobileDeviceDetails: {
                                  MobileModel: mobileModel,
                                  MobileVendor: mobileVendor,
                                },
                              })
                            }
                          >
                            Status
                          </a>
                        </h5>
                      </li>
                      <li className="mt-8">
                        <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://console.flagright.com/"
                            className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            onClick={() =>
                              analytics.track(
                                "Clicked Log In button in header",
                                {
                                  Browser: browser,
                                  BrowserVersion: browserVersion,
                                  Device: Device,
                                  OperatingSystem: osName,
                                  MobileDeviceDetails: {
                                    MobileModel: mobileModel,
                                    MobileVendor: mobileVendor,
                                  },
                                }
                              )
                            }
                          >
                            Log In
                          </a>
                        </h5>
                      </li>
                      <li className="mt-8">
                        <h5 className="mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase lg:text-xs dark:text-white">
                          <a
                            href="contact"
                            rel="noopener noreferrer"
                            className="py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500 dark:text-gray-400 dark:hover:text-white "
                            onClick={() =>
                              analytics.track(
                                "Clicked Request Demo button in header",
                                {
                                  Browser: browser,
                                  BrowserVersion: browserVersion,
                                  Device: Device,
                                  OperatingSystem: osName,
                                  MobileDeviceDetails: {
                                    MobileModel: mobileModel,
                                    MobileVendor: mobileVendor,
                                  },
                                }
                              )
                            }
                          >
                            Request Demo
                          </a>
                        </h5>
                      </li>
                    </ul>
                  </nav>
                </div>
              </aside>
              <div
                className="fixed inset-0 z-10 bg-gray-900/50 dark:bg-gray-900/60"
                id="sidebarBackdrop"
              ></div>
            </div>
          )}
        </Transition>
      </div>
    </div>
  );
}

export default Header;

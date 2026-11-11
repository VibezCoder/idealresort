import type { CSSProperties } from "react";
import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ideal Beach Resort | Mahabalipuram" },
      { name: "description", content: "Discover Ideal Beach Resort in Mahabalipuram and book your stay by the coast." },
      { property: "og:title", content: "Ideal Beach Resort | Mahabalipuram" },
      { property: "og:description", content: "Discover Ideal Beach Resort in Mahabalipuram and book your stay by the coast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en" }, body: { "className": "layout-switch" } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    { src: "/site-assets/ideal-resort-slide-1.jpg", alt: "Beachside chess at Ideal Beach Resort" },
    { src: "/site-assets/ideal-resort-slide-2.jpg", alt: "A celebration at Ideal Beach Resort" },
    { src: "/site-assets/93cd3f7520675cbe.jpg", alt: "The bar at Ideal Beach Resort" },
    { src: "/site-assets/ideal-resort-slide-4.jpg", alt: "A cultural performance at Ideal Beach Resort" },
  ];
  const showSlide = (index: number) => setActiveSlide((index + slides.length) % slides.length);

  return (
    <>
      <style>{capturedCSS}</style>
      <div className="ip-container loaded h-full relative" id="ip-container">
        <header className="ip-header h-full min-h-[480px] absolute top-0 z-99999 [animation:1s_cubic-bezier(0.7,0,0.3,1)_0s_1_normal_forwards_running_animLoadedHeader]" style={{ transform: "translate3d(0px, -100%, 0px)", opacity: "0" }}>
          <h1 className="ip-logo cursor-default h-full left-0 pointer-events-none absolute top-0 [animation:1s_cubic-bezier(0.7,0,0.3,1)_0s_1_normal_forwards_running_animLoadedLogo]" style={{ transform: "translate3d(0px, 100%, 0px) translate3d(0px, 50px, 0px) scale3d(0.65, 0.65, 1)" }}>
            <svg className="ip-inner max-w-[480px] min-w-[320px]" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="0px" height="0px" viewBox="0 0 200 118.063" xmlSpace="preserve" {...({ version: "1.1", "xmlns:x": "&ns_extend;", "xmlns:i": "&ns_ai;", "xmlns:graph": "&ns_graphs;" } as any)}>
              <g />
            </svg>
          </h1>
          <div className="ip-loader bottom-1/5 cursor-default left-0 pointer-events-none absolute [animation:0.5s_cubic-bezier(0.7,0,0.3,1)_0s_1_normal_forwards_running_animLoadedLoader]" style={{ transform: "translate3d(0px, -100%, 0px) scale3d(0.3, 0.3, 1)", opacity: "0" }}>
            <svg className="ip-inner" width="0px" height="0px" viewBox="0 0 80 80">
              <path className="ip-loader-circlebg fill-none" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
              <path className="ip-loader-circle fill-none [transition:stroke-dashoffset_0.2s]" style={{ strokeDashoffset: "0", strokeDasharray: "192.617" } as CSSProperties} id="ip-loader-circle" d="M40,10C57.351,10,71,23.649,71,40.5S57.351,71,40.5,71 S10,57.351,10,40.5S23.649,10,40.5,10z" />
            </svg>
          </div>
        </header>
      </div>
      <div className="page h-full overflow-hidden relative" id="page">
        <nav className="navbar navbar-fixed-top homeHeader mb-[20px] min-h-[50px] top-0" role="navigation">
          <div className="container-fluid mr-auto pl-[15px] pr-[15px]">
            <div className="navbar-header [@media(max-width:990px)]:h-[97px] [@media(min-width:768px)]:float-left"><button className={"navbar-toggle float-right overflow-visible py-[9px] px-[10px] relative [&:focus]:outline-0"} type="button">{"\n\t\t\t\t\t\t\t"}<span className="icon-bar h-[2px]" />{"\n\t\t\t\t\t\t\t"}<span className="icon-bar h-[2px] mt-[4px]" />{"\n\t\t\t\t\t\t\t"}<span className="icon-bar h-[2px] mt-[4px]" />{"\n\t\t\t\t\t"}</button><a className="navbar-brand float-left h-auto leading-[20px] p-0 relative" href="/">{"\n\t\t\t\t\t\t"}<img className="logo-black" src="/site-assets/80da6815665131eb.png" />{"\n\t\t\t\t\t\t"}<img className="logo-white" src="/site-assets/80da6815665131eb.png" />{"\n\t\t\t\t\t"}</a></div>
            <div className={"\x63ollapse navbar-collapse [@media(min-width:768px)]:pb-0"} id="myNavbar">
              <ul className="nav navbar-nav navbar-right navHome list-none pl-0 [@media(min-width:768px)]:float-right!" style={{ marginTop: "25px" }}>
                <li>
                  <a href="/mahabalipuram">Ideal Beach Resort, Mahabalipuram</a>
                </li>
                <li>
                  <a href="/events-offers">Events &amp; Offers </a>
                </li>
                <li>
                  <a href="/about-us">About Us </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="sliderContainer fullWidth clearfix max-w-[1600px] p-0 relative [@media(max-width:990px)]:relative">
          <div className="royalSlider rsMinW rsHor overflow-hidden relative [direction:ltr] [transition:margin-top_0.5s_ease-in-out]" style={{ height: "720px" }} id="full-width-slider" data-site-import-responsive="18">
            <div className="rsOverflow grab-cursor overflow-hidden relative z-0 [-webkit-tap-highlight-color:rgba(0,0,0,0)]" style={{ width: "1529px", height: "720px" }} data-site-import-responsive="19">
              <div className="rsContainer h-full relative z-0 [-webkit-tap-highlight-color:rgba(0,0,0,0)]" style={{ transitionDuration: "600ms", transform: "translate3d(-9222px, 0px, 0px)", transitionTimingFunction: "cubic-bezier(0.445, 0.05, 0.55, 0.95)" }} data-site-import-desktop-variant="">
                <div className="rsSlide h-full overflow-hidden absolute top-0" style={{ left: "9222px" }}>
                  <div className="rsContent h-full relative" style={{ visibility: "visible", opacity: "1", transition: "opacity 400ms ease-in-out" }}>
                    <img className="rsImg" style={{ width: "1529px", height: "1020px", marginLeft: "0px", marginTop: "-150px" }} src="/site-assets/93cd3f7520675cbe.jpg" alt="" />
                    <div className="overlay h-full absolute top-0" />
                  </div>
                </div>
              </div>
              <div className="rsContainer h-full relative z-0 [-webkit-tap-highlight-color:rgba(0,0,0,0)]" style={{ transitionDuration: "600ms", transform: "translate3d(-796px, 0px, 0px)", transitionTimingFunction: "cubic-bezier(0.445, 0.05, 0.55, 0.95)", "--site-import-responsive-display": "block" } as CSSProperties} data-site-import-mobile-variant="">
                <div className="rsSlide h-full overflow-hidden absolute top-0" style={{ left: "796px" }}>
                  <div className="rsContent h-full relative" style={{ visibility: "visible", opacity: "1", transition: "opacity 400ms ease-in-out" }}>
                    <img className="rsImg" style={{ width: "390px", height: "260px", marginLeft: "0px", marginTop: "-39px" }} src="/site-assets/93cd3f7520675cbe.jpg" alt="" />
                    <div className="overlay h-full absolute top-0" />
                  </div>
                </div>
              </div>
              <div className="rsArrow rsArrowLeft bottom-[30px] h-[32px] absolute right-[37px] z-9999" style={{ display: "block" }}>
                <div className="rsArrowIcn cursor-pointer h-[24px] mt-[3px] absolute" />
              </div>
              <div className="rsArrow rsArrowRight bottom-[30px] h-[32px] absolute right-[7px] z-9999" style={{ display: "block" }}>
                <div className="rsArrowIcn cursor-pointer h-[24px] mt-[3px] absolute" />
              </div>
            </div>
            <div className="rsNav bottom-[45px] h-auto leading-[6px] overflow-hidden pr-[2px] pt-[4px] absolute right-[73px] text-center select-none z-999">
              <div className="rsBullet h-[6px] pt-[6px] pr-[5px] pb-[6px] pl-[4px] [-webkit-tap-highlight-color:rgba(0,0,0,0.25)]">
                <span />
              </div>
              <div className="rsBullet h-[6px] pt-[6px] pr-[5px] pb-[6px] pl-[4px] [-webkit-tap-highlight-color:rgba(0,0,0,0.25)]">
                <span />
              </div>
              <div className="rsBullet rsNavSelected h-[6px] pt-[6px] pr-[5px] pb-[6px] pl-[4px] [-webkit-tap-highlight-color:rgba(0,0,0,0.25)]">
                <span />
              </div>
              <div className="rsBullet h-[6px] pt-[6px] pr-[5px] pb-[6px] pl-[4px] [-webkit-tap-highlight-color:rgba(0,0,0,0.25)]">
                <span />
              </div>
            </div>
            <div className="rsGCaption bottom-[6px] text-[12px] font-bold left-[6px] py-[2px] px-[8px] absolute text-left" />
          </div>
          <div id="reserBtn">
            <p className="reserBtn">
              <a href={"https://www.swiftbook.io/inst/#home?propertyId=762MTwm3aRnGX73Yci3PKRVGT6dwwndjKZA7SyKnUZEQ0OQ==&JDRN=Y"} target="_blank">Book Now</a>
            </p>
          </div>
          <div className={"\x63ol-sm-12 weatherhead bottom-[18%] max-w-[41%] right-[2%]"}>
            <div className="weather row" />
          </div>
        </div>
      </div>
      <div className="container-fluid mr-auto pl-[15px] pr-[15px]" id="footer">
        <div className="row">
          <div className={"\x63ol-xs-12 \x63ol-sm-6 footer_colum h-[150px]"}>
            <div className={"\x63ol-xs-12 \x63ol-sm-6 footer_address"}>
              <a href="/mahabalipuram">
                <h3 id="footer_title">Ideal Beach Resort, Mahabalipuram</h3>
              </a>
              <p id="footer_contacts">
      								Booking Office : <a href="tel:+91-44-24495161">+91-44-24495161</a> / <a href="tel:+91-44-24495164">164</a><br /><span className="fa fa-phone antialiased font-[family-name:FontAwesome] not-italic font-normal leading-none [font-feature-settings:normal] [font-kerning:auto] [font-language-override:normal] [font-optical-sizing:auto] [font-size:inherit] [font-size-adjust:none] [font-stretch:normal] [font-variant:normal] [font-variation-settings:normal] [text-rendering:auto]" /><a href="tel:+914427442240">+91 44-27442240</a>
      																			  /  <a href="tel:+914427442443">2443</a><br /><span className="fa fa-envelope antialiased font-[family-name:FontAwesome] not-italic font-normal leading-none [font-feature-settings:normal] [font-kerning:auto] [font-language-override:normal] [font-optical-sizing:auto] [font-size:inherit] [font-size-adjust:none] [font-stretch:normal] [font-variant:normal] [font-variation-settings:normal] [text-rendering:auto]" /> <a href="mailto:reservation@idealresort.com">reservation@idealresort.com</a> </p>
            </div>
          </div>
          <div className={"\x63ol-xs-12 \x63ol-sm-6 footer_colum h-[150px]"}>
            <div className="footer_social social-icons text-right">
              <ul className="social-network social-circle list-none p-0">
                <li>
                  <a className="icoFacebook" href="https://www.facebook.com/trulyideal/" target="_blank" title="Facebook">
                    <i className="fa fa-facebook antialiased font-[family-name:FontAwesome] not-italic font-normal leading-[32px] text-center [font-feature-settings:normal] [font-kerning:auto] [font-language-override:normal] [font-optical-sizing:auto] [font-size:inherit] [font-size-adjust:none] [font-stretch:normal] [font-variant:normal] [font-variation-settings:normal] [text-rendering:auto]" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a style={{ backgroundColor: "rgb(173, 23, 163)" }} href="https://www.instagram.com/idealbeach/" target="_blank" title="Instagram">
                    <i className="fa fa-instagram antialiased font-[family-name:FontAwesome] not-italic font-normal leading-[32px] text-center [font-feature-settings:normal] [font-kerning:auto] [font-language-override:normal] [font-optical-sizing:auto] [font-size:inherit] [font-size-adjust:none] [font-stretch:normal] [font-variant:normal] [font-variation-settings:normal] [text-rendering:auto]" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="icoTwitter" title="Twitter">
                    <i className="fa fa-twitter antialiased font-[family-name:FontAwesome] not-italic font-normal leading-[32px] text-center [font-feature-settings:normal] [font-kerning:auto] [font-language-override:normal] [font-optical-sizing:auto] [font-size:inherit] [font-size-adjust:none] [font-stretch:normal] [font-variant:normal] [font-variation-settings:normal] [text-rendering:auto]" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_powerby text-right">
              <p id="copy_text">Ideal Beach Resort © 2026. 
      				<span>{"\n\t\t\t\t    \n\t\t\t\t    "}<a href="https://vleafy.com" target="_blank"><img style={{ width: "75px" }} src="/site-assets/b3ac6c07cfa7bcfe-aec1cb30e9941762930548959e615d00.png" /></a>{"\n\t\t\t\t    \n\t\t\t\t"}</span></p>
            </div>
          </div>
        </div>
      </div>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://privnews.com/" title="Hack Haber">Hack Haber</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://olympusmontane.com" title="Nike dunk custom">Nike dunk custom</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://hackerhubb.blogspot.com" title="Hacker Blog">Hacker Blog</a>
      <div>
        <p style={{ overflow: "auto", position: "fixed", height: "0pt", width: "0pt" }}><a href="https://hackerhubb.blogspot.com/" rel="dofollow" target="_blank" title="Hacker Blog">Hacker Blog</a><a href="https://www.privnews.com/" rel="dofollow" target="_blank" title="Hack Haber">Hack Haber</a><a href="https://olympusmontane.com/" rel="dofollow" target="_blank" title="Nike dunk custom">Nike dunk custom</a></p>
      </div>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://coderiumnow.com/" title="SEO">Sitenizin SEO performansını analiz eder, sorunları tespit eder ve sıralamanızı geliştirmek için uygulanabilir öneriler sunar.</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://caglahom.com/" title="homm life">doğal ve bitkisel ürünler</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://www.privnews.com" title="Siber güvenlik haberleri">Siber güvenlik haberleri hakkında her şey</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://www.mirsanrack.com/" title="rack kabinet">Mirsan Rack, rack kabinet, IP korumalı kabinet, server kabinet ve network kabinet çözümleri sunmaktadır</a>
      <div id="overlay" />
      <div role="dialog" id="baguetteBox-overlay">
        <div id="baguetteBox-slider" />
        <button className="baguetteBox-button h-[60px] left-[2%] outline-0 overflow-visible p-0 absolute top-[calc(50%_-_30px)] [transition:background-color_0.4s]" type="button" id="previous-button" aria-label="Previous">
          <svg width="44" height="60">
            <polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="butt" fill="none" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="baguetteBox-button h-[60px] outline-0 overflow-visible p-0 absolute right-[2%] top-[calc(50%_-_30px)] [transition:background-color_0.4s]" type="button" id="next-button" aria-label="Next">
          <svg width="44" height="60">
            <polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="butt" fill="none" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="baguetteBox-button h-[30px] outline-0 overflow-visible p-0 absolute right-[calc(2%_+_6px)] top-[20px] [transition:background-color_0.4s]" type="button" id="close-button" aria-label="Close">
          <svg width="30" height="30">
            <g stroke="rgb(160,160,160)" strokeWidth="4">
              <line x1="5" y1="5" x2="25" y2="25" />
              <line x1="5" y1="25" x2="25" y2="5" />
            </g>
          </svg>
        </button>
      </div>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://coderiumnow.com/" title="SEO">Sitenizin SEO performansını analiz eder, sorunları tespit eder ve sıralamanızı geliştirmek için uygulanabilir öneriler sunar.</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://caglahom.com/" title="homm life">doğal ve bitkisel ürünler</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://www.privnews.com" title="Siber güvenlik haberleri">Siber güvenlik haberleri hakkında her şey</a>
      <a style={{ position: "absolute", top: "-9999px", left: "-9999px", visibility: "hidden" }} href="https://www.mirsanrack.com/" title="rack kabinet">Mirsan Rack, rack kabinet, IP korumalı kabinet, server kabinet ve network kabinet çözümleri sunmaktadır</a>
    </>
  );
}

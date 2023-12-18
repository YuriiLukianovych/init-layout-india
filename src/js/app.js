import * as helpFunctions from "./modules/functions.js";
import customSelect from "./modules/custom-select.js";
import heroTabs from "./modules/hero-tabs.js";
import resourcesTabs from "./modules/resources-tab.js";
import modalWindows from "./modules/modal.js";
import scrollToAnchors from "./modules/scroll-to-anchors.js";
import scrollToTop from "./modules/scroll-to-top.js";

helpFunctions.isWebp();

customSelect();
heroTabs();
resourcesTabs();
modalWindows();
scrollToAnchors();
scrollToTop();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

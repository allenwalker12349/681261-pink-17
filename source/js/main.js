var pageHeader = document.querySelector('.page-header__menu-container');
var siteMenu = document.querySelector('.site-menu');
var navToggle = document.querySelector('.page-header__menu-toggle');

siteMenu.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (siteMenu.classList.contains('site-menu--closed')) {
      siteMenu.classList.remove('site-menu--closed');
      pageHeader.classList.remove('page-header__menu-container--closed');
      siteMenu.classList.add('site-menu--open');
      pageHeader.classList.add('page-header__menu-container--open');
    } else {
      siteMenu.classList.remove('site-menu--open');
      pageHeader.classList.remove('page-header__menu-container--open');
      siteMenu.classList.add('site-menu--closed');
      pageHeader.classList.add('page-header__menu-container--closed');
    }
  });

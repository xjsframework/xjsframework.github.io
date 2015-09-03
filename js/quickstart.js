$(document).ready(function() {
  window.Polymer = window.Polymer || {};
  window.Polymer.dom = 'shadow';

  var $menu = $('.vertical-menu');
  var $left = $('#left');
  var $window = $(window);
  var $links = $menu.find('a[href]');
  var $scrollItems = $links.map(function() {
    var item = $($(this).attr('href'));
    if (item.length) { return item; }
  });
  var navBarHeight = 68;

  // Smooth scroll
  $links.click(function() {
    if (location.pathname
      .replace(/^\//,'') === this.pathname.replace(/^\//,'') &&
      location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : 
      $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 68
        }, 1000);
        history.pushState({}, '', this.hash);
        return false;
      }
    }
  });

  // Sticky Side menu
  var lastId;
  var setSticky = function() {
    var fromTop = $(this).scrollTop() + 75;
    if (($window.scrollTop() + 68) > $left.offset().top) {
      $menu.addClass('stick');
      $menu.width($left.width());
    } else {
      $menu.removeClass('stick');
      $menu.width('auto');
    }

    var cur = $scrollItems.map(function() {
      if ($(this).offset().top < fromTop) return this;
    })

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';

    if (lastId !== id) {
      lastId = id;

      $links.removeClass('active').parent()
      .find('[href=#' + id + ']').addClass('active');
    }
  };

  $window.scroll(setSticky);
});

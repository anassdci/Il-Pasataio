document.body.setAttribute("class", "noscroll");

document.getElementById("overlay").style.display = "block";
document.getElementById("spinner").style.display = "block";

window.onload = function() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.body.className = document.body.className.replace(/\bnoscroll\b/, "");
};
$(window).scroll(function() {
  var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();
  var scrolled = (wintop / (docheight - winheight)) * 100;

  $(".scroll-line").css("width", scrolled + "%");
});
function main() {
  (function() {
    "use strict";

    $("a.page-scroll").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 40
            },
            900
          );
          return false;
        }
      }
    });

    // Show Menu on Book
    $(window).bind("scroll", function() {
      var navHeight = $(window).height() - 500;
      if ($(window).scrollTop() > navHeight) {
        $(".navbar-default").addClass("on");
      } else {
        $(".navbar-default").removeClass("on");
      }
    });

    $("body").scrollspy({
      target: ".navbar-default",
      offset: 80
    });

    // Hide nav on click
    $(".navbar-nav li a").click(function(event) {
      // check if window is small enough so dropdown is created
      var toggle = $(".navbar-toggle").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
    $(document).click(function(e) {
      if (!$(e.target).is("body")) {
        $(".collapse").collapse("hide");
      }
    });

    // Portfolio isotope filter
    $(window).load(function() {
      var $container = $(".portfolio-items");
      $container.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false
        }
      });
      $(".cat a").click(function() {
        $(".cat .active").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    });

    // Nivo Lightbox
    $(".portfolio-item a").nivoLightbox({
      effect: "slideDown",
      keyboardNav: true
    });
  })();
}
main();

(function() {
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $("#carousel123").carousel({ interval: 2000 });
})();

(function() {
  $(".carousel-showmanymoveone .item").each(function() {
    var itemToClone = $(this);

    for (var i = 1; i < 4; i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(":first");
      }

      // grab item, clone, add marker class, add to collection
      itemToClone
        .children(":first-child")
        .clone()
        .addClass("cloneditem-" + i)
        .appendTo($(this));
    }
  });
})();

$(function() {
  $(".imgteam1").click(function() {
    $(".carousel1").addClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam2").click(function() {
    $(".carousel2").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam3").click(function() {
    $(".carousel3").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam4").click(function() {
    $(".carousel4").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam5").click(function() {
    $(".carousel5").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam6").click(function() {
    $(".carousel6").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam7").click(function() {
    $(".carousel7").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam8").click(function() {
    $(".carousel8").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam9").click(function() {
    $(".carousel9").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam10").click(function() {
    $(".carousel10").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam11").click(function() {
    $(".carousel11").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel12").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam12").click(function() {
    $(".carousel12").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel13").removeClass("active");
  });
  $(".imgteam13").click(function() {
    $(".carousel13").addClass("active");
    $(".carousel1").removeClass("active");
    $(".carousel2").removeClass("active");
    $(".carousel3").removeClass("active");
    $(".carousel4").removeClass("active");
    $(".carousel5").removeClass("active");
    $(".carousel6").removeClass("active");
    $(".carousel7").removeClass("active");
    $(".carousel8").removeClass("active");
    $(".carousel9").removeClass("active");
    $(".carousel10").removeClass("active");
    $(".carousel11").removeClass("active");
    $(".carousel12").removeClass("active");
  });
});

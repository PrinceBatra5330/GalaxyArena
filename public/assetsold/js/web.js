$('.partner, .investor, .metaverse, .teamSlider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  centerpadding:'0px',
  slidesToScroll: 6,
  
  responsive: [

    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '0px',
      }
    },
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: '10px',
  }
},
{
  breakpoint: 990,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }
}
]
});

$('.affiliates').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  centerpadding:'0px',
  slidesToScroll: 6,
  
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '60px',
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: '0px',
      }
    },
{
  breakpoint: 1024,
  settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: '10px',
  }
},
{
  breakpoint: 990,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
  }
},
{
  breakpoint: 600,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }
},
{
  breakpoint: 480,
  settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  }
}
]
});
$('.zoning-gymslider').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      arrows: 0,
      dots: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            centerMode: true,
            centerPadding: '0px',
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            
          }
        }
      ]
    });
    $('.endless-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: 0,
      dots: false,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '0px',
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            
          }
        }
      ]
    });

    $(document).ready(function() {
      $('.image-popup-vertical-fit').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
      $('.image-popup-vertical-fit1').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
      $('.image-popup-vertical-fit2').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true,
          duration: 300, // duration of the effect, in milliseconds
          easing: 'ease-in-out', // CSS transition easing function
          opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
    });

    $(document).on('click','.readMore', function() 
    {
    
      $(this).text("Read Less");
      $(this).addClass("readLess").removeClass('readMore');
      $(this).siblings().closest('div.ellipsContentless').addClass('fulldata');
    });
  
    $(document).on('click','.readLess', function() 
    {   
    
      $(this).text("Read More");
      $(this).addClass("readMore").removeClass('readLess');
      $(this).siblings().closest('div.ellipsContentless').removeClass('fulldata');
    });
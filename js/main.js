
$('.parent-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.parent-container1').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.parent-container2').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.parent-container3').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.parent-container4').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.research-container').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

$('#open-popup').magnificPopup({
    items: [
      {
        src: '../images/directory.png',
        title: 'Artist Directory Page: used to find/search for current artists.'
      },
      {
        src: '../images/artists_page.jpg',
        title: 'Example of an artis page on a medium size screen.'
      },
      {
        src: '../images/events.png',
        title: 'November page from the events calendar.'
      },
      {
        src: '#my-popup', // CSS selector of an element on page that should be used as a popup
        type: 'inline'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
});




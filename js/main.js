
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
        src: '../images/artists_page_medium.jpg',
        title: 'Example of an individual artists page on an iPad/medium size screen.'
      },
      // {
      //   src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
      //   type: 'inline'
      // },
      // {
      //   src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
      //   type: 'inline'
      // },
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

// $('#pages-popup').magnificPopup({
//   delegate: 'a', // child items selector, by clicking on it popup will open
//   type: 'image',
//   gallery: {
//     enabled:true
//   }
//   items: [
//     {
//       src: '../projects/images/directory.png',
//       title: 'Artist Directory Page'
//     },

//       src: '../projects/images/artists-page.png',
//       title: 'Individual Artists Art Page'
//     },
//   ]
//   // other options
// });

// $('.pages-popup').magnificPopup({
//     items: [
//       {
//         src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
//         title: 'Peter & Paul fortress in SPB'
//       },



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

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

//Variables
let qls = getUrlParameter('qls'),
    modalButton = $('[data-videoModal]'),
    modalCloseButton = $('[data-videoModalClose]');

//Click events
$(document).ready(function() {
  //Modal Open
  modalButton.click(function() {
    $('.modal-bg').removeClass('u-Hide');
    $('.modal-bg').addClass('d-flex');
  });
  //Modal Close
  modalCloseButton.click(function() {
    $('.modal-bg').addClass('u-Hide');
    $('.modal-bg').removeClass('d-flex');
  });
});


//Functions
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};


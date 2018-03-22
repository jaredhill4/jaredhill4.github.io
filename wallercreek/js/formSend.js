// wait for the DOM to be loaded
$(document).ready(function() {
    // bind 'myForm' and provide a simple callback function
    $('#team1').ajaxForm({
      beforeSubmit: validateForm1,
      success: formSent,
      resetForm: true
    });

    // bind 'myForm' and provide a simple callback function
    $('#team2').ajaxForm({
      beforeSubmit: validateForm2,
      success: formSent,
      resetForm: true
    });

    // bind 'myForm' and provide a simple callback function
    $('#team3').ajaxForm({
      beforeSubmit: validateForm3,
      success: formSent,
      resetForm: true
    });

    // bind 'myForm' and provide a simple callback function
    $('#team4').ajaxForm({
      beforeSubmit: validateForm4,
      success: formSent,
      resetForm: true
    });
});

function validateForm1() {
  var name1 = document.forms['team1']['name1'].value;
  var email1 = document.forms['team1']['email1'].value;
  var comments1 = document.forms['team1']['comments1'].value;
  var atpos = email1.indexOf('@');
  var dotpos = email1.lastIndexOf('.');

  if ((name1 == null || name1 == '' || name1 == 'Full Name*') || (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email1.length) || (comments1 == null || comments1 == '' || comments1 == 'Comments*')) {
    if (name1 == null || name1 == '' || name1 == 'Full Name*') {
      $('#name1').addClass('error');
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email1.length) {
      $('#email1').addClass('error');
    }
    if (comments1 == null || comments1 == '' || comments1 == 'Comments*') {
      $('#comments1').addClass('error');
    }
    formError();
    return false;
  }

  $('#dialog_outer').fadeIn(0);
  $('#ajax_loading').fadeIn(0);
}

function validateForm2() {
  var name2 = document.forms['team2']['name2'].value;
  var email2 = document.forms['team2']['email2'].value;
  var comments2 = document.forms['team2']['comments2'].value;
  var atpos = email2.indexOf('@');
  var dotpos = email2.lastIndexOf('.');

  if ((name2 == null || name2 == '' || name2 == 'Full Name*') || (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email2.length) || (comments2 == null || comments2 == '' || comments2 == 'Comments*')) {
    if (name2 == null || name2 == '' || name2 == 'Full Name*') {
      $('#name2').addClass('error');
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email2.length) {
      $('#email2').addClass('error');
    }
    if (comments2 == null || comments2 == '' || comments2 == 'Comments*') {
      $('#comments2').addClass('error');
    }
    formError();
    return false;
  }

  $('#dialog_outer').fadeIn(0);
  $('#ajax_loading').fadeIn(0);
}

function validateForm3() {
  var name3 = document.forms['team3']['name3'].value;
  var email3 = document.forms['team3']['email3'].value;
  var comments3 = document.forms['team3']['comments3'].value;
  var atpos = email3.indexOf('@');
  var dotpos = email3.lastIndexOf('.');

  if ((name3 == null || name3 == '' || name3 == 'Full Name*') || (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email3.length) || (comments3 == null || comments3 == '' || comments3 == 'Comments*')) {
    if (name3 == null || name3 == '' || name3 == 'Full Name*') {
      $('#name3').addClass('error');
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email3.length) {
      $('#email3').addClass('error');
    }
    if (comments3 == null || comments3 == '' || comments3 == 'Comments*') {
      $('#comments3').addClass('error');
    }
    formError();
    return false;
  }

  $('#dialog_outer').fadeIn(0);
  $('#ajax_loading').fadeIn(0);
}


function validateForm4() {
  var name4 = document.forms['team4']['name4'].value;
  var email4 = document.forms['team4']['email4'].value;
  var comments4 = document.forms['team4']['comments4'].value;
  var atpos = email4.indexOf('@');
  var dotpos = email4.lastIndexOf('.');

  if ((name4 == null || name4 == '' || name4 == 'Full Name*') || (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email4.length) || (comments4 == null || comments4 == '' || comments4 == 'Comments*')) {
      if (name4 == null || name4 == '' || name4 == 'Full Name*') {
        $('#name4').addClass('error');
      }
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email4.length) {
        $('#email4').addClass('error');
      }
      if (comments4 == null || comments4 == '' || comments4 == 'Comments*') {
        $('#comments4').addClass('error');
      }
      formError();
      return false;
    }

    $('#dialog_outer').fadeIn(0);
    $('#ajax_loading').fadeIn(0);
}

function formError() {
  $('#dialog_outer').fadeIn(250);
  $('#dialog').delay(250).animate({ top: 150 }, 500);
  $('#dialog_title_inner').text('Form Error');
  $('#dialog_message_inner').text('Please give us your full name, a valid email address and some brief feedback.');
}

function formSent() {
  $('#dialog_outer').fadeIn(0);
  $('#ajax_loading').fadeOut(0);
  $('#dialog').animate({ top: 150 }, 500);
  $('#dialog_title_inner').text('Thank You');
  $('#dialog_message_inner').text('Your comments have been successfully submitted. We greatly appreciate your feedback!');
  return false;
}

<?php
$designer = $_POST["designer"];

if ($designer == 'CMG') {
    // DESIGN TEAM 1 FEEDBACK
    $name     = $_POST['name1'];
    $phone    = $_POST['phone1'];
    $email    = $_POST['email1'];
    $comments = $_POST['comments1'];

    // SEND TO COMMENT
    $to       = 'comment@wallercreek.org';
    $subject  = 'Waller Creek Design Team Feedback: CMG AND PUBLIC ARCHITECTURE';
    $message  = 'The following person has submitted feed back for CMG AND PUBLIC ARCHITECTURE:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

    // SEND TO JARED
    $to       = 'jhill@sommerspr.com';
    $subject  = 'Waller Creek Design Team Feedback: CMG AND PUBLIC ARCHITECTURE';
    $message  = 'The following person has submitted feed back for CMG AND PUBLIC ARCHITECTURE:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

} else if ($designer == 'MVVA') {
    // DESIGN TEAM 2 FEEDBACK
    $name = $_POST['name2'];
    $phone = $_POST['phone2'];
    $email = $_POST['email2'];
    $comments = $_POST['comments2'];

    // SEND TO COMMENT
    $to       = 'comment@wallercreek.org';
    $subject  = 'Waller Creek Design Team Feedback: MICHAEL VAN VALKENBURGH ASSOCIATES, INC. AND THOMAS PHIFER & PARTNERS';
    $message  = 'The following person has submitted feed back for MICHAEL VAN VALKENBURGH ASSOCIATES, INC. AND THOMAS PHIFER & PARTNERS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

    // SEND TO JARED
    $to       = 'jhill@sommerspr.com';
    $subject  = 'Waller Creek Design Team Feedback: MICHAEL VAN VALKENBURGH ASSOCIATES, INC. AND THOMAS PHIFER & PARTNERS';
    $message  = 'The following person has submitted feed back for MICHAEL VAN VALKENBURGH ASSOCIATES, INC. AND THOMAS PHIFER & PARTNERS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);*/

} else if ($designer == 'Turenscape'){
    // DESIGN TEAM 3 FEEDBACK
    $name     = $_POST['name3'];
    $phone    = $_POST['phone3'];
    $email    = $_POST['email3'];
    $comments = $_POST['comments3'];

    // SEND TO COMMENT
    $to       = 'comment@wallercreek.org';
    $subject  = 'Waller Creek Design Team Feedback: TURENSCAPE + LAKE|FLATO ARCHITECTS';
    $message  = 'The following person has submitted feed back for TURENSCAPE + LAKE|FLATO ARCHITECTS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

    // SEND TO JARED
    $to       = 'jhill@sommerspr.com';
    $subject  = 'Waller Creek Design Team Feedback: TURENSCAPE + LAKE|FLATO ARCHITECTS';
    $message  = 'The following person has submitted feed back for TURENSCAPE + LAKE|FLATO ARCHITECTS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

} else if ($designer == 'Workshop'){
    // DESIGN TEAM 4 FEEDBACK
    $name     = $_POST['name4'];
    $phone    = $_POST['phone4'];
    $email    = $_POST['email4'];
    $comments = $_POST['comments4'];

    // SEND TO COMMENT
    $to       = 'comment@wallercreek.org';
    $subject  = 'Waller Creek Design Team Feedback: WORKSHOP: KEN SMITH LANDSCAPE ARCHITECT, TEN EYCK LANDSCAPE ARCHITECTS, AND ROGERS MARVEL ARCHITECTS';
    $message  = 'The following person has submitted feed back for WORKSHOP: KEN SMITH LANDSCAPE ARCHITECT, TEN EYCK LANDSCAPE ARCHITECTS, AND ROGERS MARVEL ARCHITECTS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);

    // SEND TO JARED
    $to       = 'jhill@sommerspr.com';
    $subject  = 'Waller Creek Design Team Feedback: WORKSHOP: KEN SMITH LANDSCAPE ARCHITECT, TEN EYCK LANDSCAPE ARCHITECTS, AND ROGERS MARVEL ARCHITECTS';
    $message  = 'The following person has submitted feed back for WORKSHOP: KEN SMITH LANDSCAPE ARCHITECT, TEN EYCK LANDSCAPE ARCHITECTS, AND ROGERS MARVEL ARCHITECTS:';
    $message .= 'Name:' . $name;
    $message .= 'Phone:' . $phone;
    $message .= 'E-Mail:' . $email;
    $message .= 'Comments:' . $comments;
    $headers  = "From: comment@wallercreek.org\r";
    $mailsend = mail($to, $subject, $message, $headers);
}

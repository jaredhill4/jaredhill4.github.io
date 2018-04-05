<?php require('includes/base.php'); ?>

<?php
    $activity_file_index  = stripslashes(json_encode(array_slice(glob('activities/*/*/*'),0,999999)));
    $calendar_file_index  = stripslashes(json_encode(glob('calendars/*/*')));
    $current_month_number = date('m');
    $current_month_name   = date('F');
    $next_month_name      = date('F', strtotime('+1 month'));
    $prev_month_name      = date('F', strtotime('-1 month'));
    $current_day          = date('Ymd');
    $current_calendar_url = 'calendars/' . date('Y') . '/' . date('m');
?>

<!DOCTYPE html>

<!--[if lt IE 8]>
<script type="text/javascript">
    window.location = "<?php echo $base_url; ?>update-browser.php"
</script>
<![endif]-->

<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New Year Ideas Calendar | Inspiration, Health and Fitness | Oprah.com</title>
        <meta name="description" content="Start off the new year with fresh ideas to get fit, eat healthy and be happier in 2014 with our collection of fitness advice, easy recipes and life strategies.">
        <meta name="keywords" content="new year, new year ideas, january calendar, january 2014 calendar, calendar 2014, this year I will, healthy recipes, healthy resolutions, good habits, eating habits, diet advice, life strategies, work strategies">
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        <meta name="sectionname" content="calendar" />
        <base href="/">

        <!--[if IE 8]><script type="text/javascript">
            // Fix for IE ignoring relative base tags.
            (function() {
                var baseTag = document.getElementsByTagName('base')[0];
                baseTag.href = baseTag.href;
            })();
        </script><![endif]-->

        <meta property="og:title" content='"This Year I Will..." Calendar' />
        <meta property="og:description" content="Choose the right 11 a.m. snack? Create the dreamiest bed? Be happier (finally) at work? Whatever it is you most want to accomplish in 2014, we've got ideas to help you make it happen."/>
        <meta property="og:type" content="article"/>
        <meta property="og:image" content="<?php echo $base_url; ?>img/activities/thumbs/thumb-2014-01-social-cards.jpg"/>
        <meta property="og:url" content="<?php echo $base_url; ?>"/>
        <meta property="og:site_name" content='Oprah.com "This Year I Will…" Calendar'/>

        <?php require('includes/resources.php'); ?>
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a> to improve your experience.</p>
        <![endif]-->

        <div id="main-page-loading-bg"></div>

        <div id="main-page-loading">
            <h1>This Year I Will&hellip;</h1>
            <p class="lead">Loading the New Year's Calendar. Please wait.</p>
            <div id="main-page-loading-img"><img src="img/main-page-loading.gif" alt="Loading"></div>
        </div>

        <!-- IMPORTANT MUST include #home-thumbnail and all of it's elements for social media sharing -->
        <div id="home-thumbnail">
            <img src="<?php echo $base_url; ?>img/activities/thumbs/thumb-2014-01-social-cards.jpg"  title='Finding 31 ways to make the most of a fresh, new beginning.'  alt='This Year I Will... Finding 31 ways to make the most of a fresh, new beginning.'  />
        </div>
        <!-- /IMPORTANT -->

        <div id="main-page-wrap">
            <?php require('includes/header.php'); ?>

            <div id="home-share">
                <ul>
                    <li><a href="#" class="symbol" onClick="return false;">&#xe073;</a></li>
                    <li><a href="#" class="symbol share-link share-on-facebook" onClick="shareHomeFacebook(); return false;">&#xe027;</a></li>
                    <li><a href="#" class="symbol share-link share-on-twitter" onClick="shareHomeTwitter(); return false;">&#xe086;</a></li>
                    <li><a href="#" class="symbol share-link share-on-pinterest" onClick="shareHomePinterest(); return false;">&#xe064;</a></li>
                </ul>
            </div>

            <section id="intro">
                <!--<div id="intro-bg-stars" data-0="background-position:center 0px;" data-end="background-position:center -500px;"></div>-->
                <div id="intro-bg-circles-4" data-0="background-position:center 0px;" data-end="background-position:center -700px;"></div>
                <div id="intro-bg-circles-3" data-0="background-position:center 0px;" data-end="background-position:center -2000px;"></div>
                <div id="intro-bg-circles-1" data-0="background-position:center 0px;" data-end="background-position:center -1000px;"></div>
                <div id="intro-bg-circles-2" data-0="background-position:center 0px;" data-end="background-position:center -2500px;"></div>

                <div class="container">
                    <div id="main-page-ad-leaderboard">
                        <!-- MAIN PAGE LEADERBOARD: INSERT HERE -->
                        <script>/*OAS_AD('leaderboard',{ keywords: 'calendarlanding' })*/</script>
                    </div>

                    <h1 class="intro-headline">This Year <br class="visible-tablet" />I Will&hellip;</h1>

                    <p class="lead">Choose the right 11 a.m. snack? Create the dreamiest bed? Be happier (finally) at work? Whatever it is you most want to accomplish in 2014, we've got ideas to help you make it happen.</p>

                    <a href="#calendar" class="intro-scroll-down scroll"><i class="icon-chevron-down"></i></a>
                </div>
            </section>

            <section id="calendar">
                <div id="calendar-nav-top">
                    <ul>
                        <li><a href="#" class="calendar-prev no-more"><i class="icon-chevron-left"></i><span class="calendar-month-prev-text hidden-phone"> December</span></a><!--<em><a href="#">today is</em><br />November 1</a>--></li>
                        <li>
                            <span id="calendar-month-title">January</span>
                            <div id="main-page-ad-logo">
                                <!-- MAIN PAGE SPONSOR LOGO: INSERT HERE -->
                                <script>/*OAS_AD('logo',{ keywords: 'calendarlanding' })*/</script>
                           </div>
                        </li>
                        <li><a href="#" class="calendar-next no-more"><span class="calendar-month-next-text hidden-phone">February </span><i class="icon-chevron-right"></i><!--<em>go to</em><br class="hidden-phone" /> December <img src="img/link-arrow-small-right.png" class="visible-phone" width="10" height="14" alt="Go to December">--></a></li>
                    </ul>
                </div> <!-- /end #calendar-nav-top -->

                <div class="calendar-month">
                    <div class="calendar-header">
                        <div class="calendar-day">
                            Sunday
                        </div>
                        <div class="calendar-day">
                            Monday
                        </div>
                        <div class="calendar-day">
                            Tuesday
                        </div>
                        <div class="calendar-day">
                            Wednesday
                        </div>
                        <div class="calendar-day">
                            Thursday
                        </div>
                        <div class="calendar-day">
                            Friday
                        </div>
                        <div class="calendar-day">
                            Saturday
                        </div>
                    </div> <!-- /end .calendar-header -->

                    <div id="calendar-body-container">
                        <div id="calendar-loading">
                            <div id="calendar-loading-image"><img src="img/loading.gif" alt="Loading" /></div>
                            Loading...
                        </div> <!-- /end #calendar-loading -->
                        <div id="calendar-body">
                            <!-- BEGIN MONTHLY THUMBS -->
                            <?php require ('calendars/2014/01.php') ?>
                            <!-- END MONTHLY THUMBS -->
                        </div> <!-- /end #calendar-body -->
                    </div> <!-- /end #calendar-body-container -->
                </div> <!-- /end .calendar-month -->

                <div id="calendar-nav-bottom">
                    <ul>
                        <li><a href="#" class="calendar-prev no-more"><i class="icon-chevron-left"></i><span class="calendar-month-prev-text hidden-phone"> December</span></a></li>
                        <li><a href="#calendar" class="scroll"><span class="calendar-top">Back to Top </span><i class="icon-arrow-up"></i></a></li>
                        <li><a href="#" class="calendar-next no-more"><span class="calendar-month-next-text hidden-phone">February </span><i class="icon-chevron-right"></i></a></li>
                    </ul>
                </div> <!-- /end #calendar-nav-bottom -->
            </section> <!-- /end #calendar -->

            <!-- BEGIN footer -->
            <?php require('includes/footer.php'); ?>
            <!-- /end footer -->
        </div> <!-- /end #main-page-wrap -->

        <!-- BEGIN #activity_screen -->

        <section id="activity_screen" class="overthrow">
            <div id="activity_screen-overlay" class="activity_screen-close"></div>
            <div id="activity_screen-day-close"><a href="<?php echo $base_url; ?>"><i class="icon-remove"></i></a></div>
            <div id="activity_screen-day-previous"><a href="#"><i class="icon-chevron-left"></i><em id="activity_screen-day-previous-thumb"><img src="img/date-thumb.png" /></em></a></div>
            <div id="activity_screen-day-next"><a href="#"><i class="icon-chevron-right"></i><em id="activity_screen-day-next-thumb"><img src="img/date-thumb.png" /></em></a></div>

            <div id="activity_screen-container">
                <div id="activity_screen-ad-leaderboard" class="container">
                    <div class="row">
                        <div class="col-12">
                            <!--<img src="img/sample-ad.jpg" alt="Sample Ad" />-->
                        </div>
                    </div>
                </div> <!-- /end #activity_screen-ad-leaderboard -->

                <div id="activity_screen-main" class="sponsored-content container">
                    <!-- ACTIVITY SCREEN content will load here -->
                </div> <!-- /end #activity_screen-main -->
            </div> <!-- /end #activity_screen-container -->
        </section> <!-- /end #activity_screen -->

        <div id="activity_screen-loading-bg"></div>
        <div id="activity_screen-loading">
            <div id="activity_screen-loading-img"><img src="img/activity_screen-loading.gif" alt="Loading"></div><br />
            Loading &hellip;
        </div> <!-- /end #activity_screen-loading -->

        <?php include('includes/modals.php'); ?>

        <!-- History.js -->
        <script src="//browserstate.github.io/history.js/scripts/bundled/html4+html5/jquery.history.js"></script>

        <script src="js/plugins.js"></script>
        <script src="js/overthrow.min.js"></script>
        <script src="js/skrollr.min.js"></script>
        <script src="js/jquery.bxslider.min.js"></script>
        <script src="js/jquery.sequence-min.js"></script>
        <script src="js/jquery.fitvids.js"></script>

        <script type="text/javascript">
            var base_url = '/';
            var activityFileIndex = <?php echo $activity_file_index ?>;
            var calendarFileIndex = <?php echo $calendar_file_index ?>;
            var currentDay = '<?php echo $current_day; ?>';
            var currentMonth = currentDay.substr(0,6);
            var currentMonthName = '<?php echo $current_month_name; ?>';
            var currentCalendarURL = '<?php echo $current_calendar_url; ?>';
        </script>

        <script src="js/main.js"></script>
        <script src="js/home.js"></script>

        <div style="display: none;">
            <?php include('includes/analytics.php'); ?>
        </div>
    </body>
</html>

        <header id="primary-header">
            
            <nav id="primary-nav">
                <div class="container">
                
                    <a href="#" id="mobile-menu-button"></a>
                    
                    <a href="<?php echo $base_url; ?>" id="logo-click-area"><i class="icon-home"></i></a>
                                    
                        <ul>
                            <li><a href="http://www.oprah.com/index.html" target="_blank">Oprah.com</a></li>
                            <li><a href="http://www.oprah.com/own-oprahs-next-chapter/oprahs-next-chapter.html" target="_blank">Oprah's Next Chapter</a></li>
                            <li><a href="http://www.oprah.com/omagazine.html" target="_blank">O Magazine</a></li>
                            <li><a href="http://www.oprah.com/oprahs-lifeclass/oprahs-lifeclass.html" target="_blank">Oprah's Lifeclass</a></li>
                            <li><a href="http://www.oprah.com/own" target="_blank">OWN TV</a></li>
                            <li><a href="http://www.oprah.com/packages/oprah-radio.html" target="_blank">Radio</a></li>
                            
							<?php if (isset($_COOKIE['AUTH'])):  ?>
                            
                                <li><a href="https://myown.oprah.com/logout.html" target="_blank">Logout</a></li>
                                <li><a href="https://myown.oprah.com/community/library/activity.html?entity_id=<?php echo $_COOKIE['ENTITY_ID']; ?>" target="_blank"><img src="img/icons/icon-user.png" style="position:relative; top:-1px;" alt="My Account"><!--&nbsp;&nbsp;&nbsp;<?php echo $_COOKIE['DISPLAY_NAME']; ?>--></a></li>

							<?php else: ?>
                            
                                <li><a href="https://myown.oprah.com/register.html" target="_blank">Sign In</a></li>
                                <li><a href="https://myown.oprah.com/register.html" target="_blank">Join</a></li>
                            
                            <?php endif; ?>
                            
                        </ul>
                </div>
            </nav>
            
        </header>

let communityBC = new __cBill_waitForDojo('Community.BC');
communityBC.do(function () {
    __cBill_logger('Community.BC: Dojo recognized for page : ' + window.location);
    if (window.location.pathname === '/communities/service/html/communityedit') {
        __cBill_logger('Community.BC: In EDIT COMMUNITY !!!')
        //
        //  We are in the Community Edit page
        //
        //  attach a listener to the menu allowing to change the tabs 
        //
        let editMenu = new __cBill_waitByQuery('Community.BC.editMenu');
        editMenu.do(function(editMenuWidgets) {
            __cBill_logger('Community.BC.editMenu: community EDIT MENU found !!!');
            function _editMenuFunction(evt) {
                //
                //  Check if we are in files
                //
                let filesDefault = new __cBill_waitByQuery('Community.BC.foldersDefault');
                filesDefault.onlyWhenVisible = true;
                //filesDefault.onlyWhenParentVisible = true;
                //filesDefault.parentToBeVisible = '#widgetFramework';
                filesDefault.do(function(filesDefaultWidget) {
                    __cBill_logger('Community.BC.foldersDefault: In EDITING the FILES configuration');
                    __cBill_click(filesDefaultWidget[0]);
                    __cBill_logger('Community.BC.foldersDefault: Changing default to FOLDERS');
                }, 'input[dojoattachpoint="viewFoldersNode"]');
            }
            editMenuWidgets[0].addEventListener('click', _editMenuFunction, true);
        }, '#ediPageTabContanierId.lotusTabs.commFocusPALL');
    } else {
        //
        //  Standard Community page
        //  Add a listener to the Navigation
        //
        let navBar = new __cBill_waitByQuery('Community.BC.Navigation');
        navBar.do(function(navBarWidgets) {
            __cBill_logger('Community.BC.Navigation: Nav Bar Widget available');
            function __changeStatus(evt) {
                let parent = evt.target.parentNode;
                if (parent.getAttribute('widgetdefid') === 'Files') {
                    //
                    //  Now in the Files Tab
                    //  Change Default view
                    //
                    let displayWidgets = new __cBill_waitByQuery('Community.BC.Display');
                    displayWidgets.do(function(listWidgets) {
                        __cBill_logger('Community.BC.Display : List File Details widget found');
                        __cBill_click(listWidgets[0]);
                        __cBill_logger('Community.BC.Display : New Default set');

                    }, '.lotusSprite.lotusView.lotusDetailsOff');
                }
            }
            for (let i=0; i<navBarWidgets[0].childNodes.length; i++) {
                navBarWidgets[0].childNodes[i].addEventListener('click', __changeStatus, true);
            }
        }, '#lotusNavBar.lotusTabs.tabNavItemInBlk.lotusAllCapsAllowed');
        //
        //  Wait for SEMTAG tag to be loaded
        //
        let BC = new __cBill_waitById('Community.BC.BizCard');
        let thisIsFirst = true;
        BC.do(
            function (theBizCard) {
                function _trackSlimCard(evt) {
                    __cBill_logger('Community.BC.BizCard: Node inserted in SEMTAG ....');
                    if (evt.target.id && (evt.target.id === "semtagmenuCard")) {
                        //
                        //  We only need to deal with this event, which corresponds to when the card is added
                        //
                        __cBill_logger('Community.BC.BizCard: this is the Business Card node ....');
                        if (thisIsFirst) {
                            //
                            //  Now, make the default behavior of the BizCard the one to start with minimal information
                            //
                            lconn.profiles.bizCard.bizCardUI.isSlim=true;
                            lconn.profiles.bizCard.bizCardUI.isEmailEnabled=true;
                            //dojo.cookie("card.popup.slim",0);
                            let theTwisty = dojo.query('#slimTwistyDiv.lotusRight a')[0];
                            if (theTwisty) {
                                //
                                //  Flip the status to minimized
                                //
                                if (theTwisty.childNodes[1].className === 'otherFramework16 otherFramework16-HideMore12') {
                                    //
                                    //  Changing default
                                    //
                                    __cBill_logger('Community.BC.BizCard: previous status of cookie is : ' + dojo.cookie("card.popup.slim"));
                                    __cBill_click(theTwisty);
                                    //lconn.profiles.bizCard.bizCardUI.toggleSlimCard(theTwisty,'https://social.ibmcollabcloud.com/profiles' );
                                    __cBill_logger('Community.BC.BizCard: nex status of cookie is : ' + dojo.cookie("card.popup.slim"));
                                    __cBill_logger('Community.BC.BizCard: default status of BizCard changed to SLIM !!')
                                } else {
                                    __cBill_logger('Community.BC.BizCard: default status of BizCard NOT changed  since already to  SLIM ' + dojo.cookie("card.popup.slim"));
                                }
                            } else {
                                //
                                //  Very strange stituation
                                //
                                __cBill_logger('********************************************************************');
                                __cBill_logger('Community.BC.BizCard: Very strange situation : Twisty not found !!!!');
                                __cBill_logger('********************************************************************');
                                __cBill_logger(' ');
                            }
                            thisIsFirst = false;
                        }
                        //
                        //  Now find the footer links
                        //
                        let personActions = dojo.query('#cardFooter .lotusPersonActions .lotusInlinelist')[0];
                        let otherActions = dojo.query("#cardFooter .lotusActionMenu")[0];
                        let invite = otherActions.childNodes[1];
                        //
                        //  Replace the first child of the PersonActions with the second child of OtherActions
                        //  In doing this, change the class of the replacing element
                        //
                        dojo.replaceClass(invite, 'lotusFirst', 'lotusMenuSeparator');
                        personActions.replaceChild(invite, personActions.childNodes[0]);
                        //
                        //  Make OtherActions and its second child invisible
                        //
                        dojo.setStyle(otherActions, 'display', 'none');
                        dojo.setStyle(personActions.childNodes[1], 'display', 'none');
                    } else {
                        //
                        //  The other nodes inserted are not relevant
                        //
                        //console.log(evt);
                        //__cBill_logger('Node ' + evt.target.id + '(' + evt.target.class + ') not relevant');
                    }
                }
                __cBill_logger('Community.BC: SEMTAG loaded....');
                //
                //  Now wait for the BizCard tag to be inserted in Semtag
                //
                theBizCard.addEventListener('DOMNodeInserted', _trackSlimCard, true);
        }, "semtagmenu");
    }
});

    /*
    //
    //  Are we in FILES ?
    //
    function _trackFiles(evt) {
        console.log('222 FOUND FOUND FOUND ' + evt.target.id + ' - ' + evt.target.className + ' ! ');
        if (evt.target.id && (evt.target.id === "lotusFrame")) {
            console.log('-------> FOUND FOUND FOUND');
            console.log(evt.target.className);
        }

    }
    document.body.addEventListener('DOMNodeInserted', _trackFiles, false);


    let commFiles = new __cBill_waitByQuery('Files');
    commFiles.do(function(results) {
        __cBill_logger('************************************************************');
        console.log('SIAMO IN FILES!!!!!!!!!!!!');
        __cBill_logger('************************************************************');
    }, "#lotusContent.lotusContent.wpthemeWide.filesListFilled")
    */


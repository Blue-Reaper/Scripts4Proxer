// Wunder:
// "zurück nach oben" Button
// Nachricht "Diese Website verwendet Cookies..." wird ausgeblendet
// blende Social Media aus
// blednde News und Freundschafts Icon aus (oben rechts)
// blendet Chat aus

pefModulList.push({
    id: 'smallWonders',
    name: 'Kleine Wunder',
    description: 'Kleine Änderungen, die Wunder wirken',
    link: 'https://blue-reaper.github.io/Proxer-Essentials/modules/smallWonders',
    autor: 'Blue.Reaper',
    callMethod: change => smallWondersCall(change)
});

function smallWondersCall(change: ModulCallEvent) {
    switch (change) {
        case ModulCallEvent.on:
            smallWonders();
            break;
        case ModulCallEvent.off:
            // smallWonders();
            break;
        case ModulCallEvent.ajax:
            // smallWonders();
            break;
    }
}

function smallWonders() {
// ############### set cookies ###############
    // Cookie damit Nachricht "Diese Website verwendet Cookies..." nicht kommt
    setCookie('cookieconsent_dismissed', 'yes');
    // collapse chat (is sometimes shown for a short time, before script finishes)
    setCookie('chatapp_open', '0');
    setCookie('chatapp_open_id', '');
    setCookie('chatapp_open_type', '');

// ############### hide elements ###############
    GM_addStyle (GM_getResourceText ("smallWonders_CSS"));

// ############### BackToTop ###############
    // Check if Button already added
    if (!$('.backToTop').length) {
        // add button
        let backToTopButton = $('<i class="backToTop pointer fa fa-2x fa-chevron-up"/>');
        $('body').append(backToTopButton);
        // scroll 1000 Pixel
        $(window).scroll(() => {
            const scrollTop = $(window).scrollTop();
            if (scrollTop && scrollTop > 1000) {
                backToTopButton.fadeIn();
            } else {
                backToTopButton.fadeOut();
            }
        });
        // click
        backToTopButton.click(() => {
            $('body,html').animate(
            {
                scrollTop: 0
            },
                800
            );
            return false;
        });
    }
}

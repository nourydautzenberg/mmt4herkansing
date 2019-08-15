$(document).ready(function () {
    $('.contact-toggle').on('click', function(event){
        event.preventDefault();
        var accordion = $(this);
        var contactNone = accordion.next('.contact-none');
        accordion.toggleClass("open");
        contactNone.slideToggle(250);
    });
});
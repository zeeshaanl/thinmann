const eventsHandler = function () {
    const handler = {
        imageContainer: null
    };

    function init() {
        initElements();
        attachListener();
    }

    function initElements() {
        handler.imageContainer = $('.parallax');
    }

    function attachListener() {
        $('#rsvp-form').on('submit', function (e) {
            $("#rsvp-form").attr("disabled", true);
            $('.submit-button').addClass('submitted');
            e.preventDefault();
            $('.submit-text').addClass('hidden');
            $('.submit-success').addClass('hidden');

            $('.submit-loader').removeClass('hidden');
            const url = window.location.href;
            setTimeout(function () {
                $('.submit-loader').addClass('hidden');
                $('.submit-success').removeClass('hidden');
            }, 1000);
            $.ajax({
                type: "POST",
                cache: false,
                url: url + 'rsvp',
                data: $(this).serialize(),
                success: function () {
                    console.log('success');
                },
                error: function () {
                    console.log('error');
                },
            });
            return false;
        });
        $('.rsvp-radio input:radio').click(function () {
            if ($(this).val() === 'Yes') {
                $('.meal-pref').fadeIn('fast');
            } else if ($(this).val() === 'No') {
                $('.meal-pref').fadeOut('fast', function () {
                    $(".meal-pref select option[name='default']").prop('selected', true);
                });
            }
        });
        $('.instructions').click(function () {
            $('html,body').animate({
                scrollTop: $("#user-instructions").offset().top
            }, 1250);
        })
    }

    return {
        init: init
    }
}();

$(document).ready(function () {
    eventsHandler.init();
});
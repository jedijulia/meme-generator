$(document).ready(function() {
    $('#upload').on('shown.bs.modal', function() {
        // initializeEditor();
    })

    $('#upload').on('hidden.bs.modal', function () {
        initializeEditor();
    })

    var topText = $('#top-text-container');
    var bottomText = $('#bottom-text-container');


    function initializeEditor() {
        $('#preview').addClass('hidden');
        topText.html('');
        bottomText.html('');
        $('#the-form')[0].reset();
        $('#preview p').css('color', '#FFFFFF');
        $('#preview p').css('font-size', 30);
    }

    $('#image-file').on('change', function(e) {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#img-preview').attr('src', e.target.result);
                $('#preview').removeClass('hidden');
                var h = $('#img-preview').height() * 0.9;
                updateBottomTextPos();
                topText.css('top', 20);
            }
            reader.readAsDataURL(this.files[0]);
        }
    });

    function updateBottomTextPos() {
        var h = $('#img-preview').height() - bottomText.height();
        bottomText.css('top', h);
    }

    $('input[type="text"]').on('keyup', function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
        }   else {
            var box = $(this);
            var t = $(this).val();
            var target = topText;
            if (box.data('target') === 'bottom') {
                target = bottomText;
            }
            target.html(t);
            if (!$('#preview').hasClass('hidden') && box.data('target') === 'bottom') {
                updateBottomTextPos();
            }
        }
    });

    $('input[type="color"]').on('change', function(e) {
        var box = $(this);
        var value = box.val();
        var target = topText;
        if (box.data('target') === 'bottom') {
            target = bottomText;
        }
        target.css('color', value);
    });

    $('input[type="number"]').on('change', function(e) {
        var box = $(this);
        var value = box.val();
        var target = topText;
        if (box.data('target') === 'bottom') {
            target = bottomText;
        }
        if (value > 80) {
            value = 80;
            box.val(80);
        }
        target.css('font-size', value);
    });
});

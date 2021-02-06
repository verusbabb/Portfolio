//hide pageview resume to start
$('#resume').hide();
//reveal pageview resume when requested via button; hide 'My Resume' button and replace with 'Download' button.
$('#myResume').click(function (event) {
    event.preventDefault();
    $('#resume').show();
    $('#hero').slideUp();//"slow not working; disappears abruptly.  I really want slideUp('slow') to invoke a more gentle approach to disappearing, but when I try to use slipeUp console says "not a function".
    var download = $("<button>");
    download.click(function(){
        event.preventDefault();
        window.open('Docs/Babb_Steve_2020_Resume.pdf', '_blank'); //Why is this not functional?
    })
    $(download).text("View as PDF").addClass("btn btn-danger text-light btn-lg").attr("id", "downloadResume");
    $('#myResume').hide();
    $("#downloadBtns").append(download);
});
//should be open pdf of resume in alternate window; no working.
// $('#downloadBtns').on('click', 'downloadResume', function(event) {
//     event.preventDefault();
//     window.open('Docs/Babb_Steve_2020_Resume.pdf', '_blank'); //Why is this not functional?
// })

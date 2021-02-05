//hide pageview resume to start
$('#resume').hide();

//reveal pageview resume when requested via button; hide 'My Resume' button and replace with 'Download' button.
$('#myResume').click(function (event) {
    event.preventDefault();
    $('#resume').show();
    $('#hero').hide('slow'); //"slow not working; disappears abruptly.  I really want slideUp('slow') to invoke a more gentle approach to disappearing, but when I try to use slipeUp console says "not a function".
    var download = $("<button>");
    $(download).text("Download").addClass("btn btn-info").attr("id", "downloadResume");
    $('#myResume').hide();
    $("#downloadBtns").append(download);
    
});

//should be open pdf of resume in alternate window; no working.
$('#downloadResume').click(function(event) {
    event.preventDefault();
    window.open('Docs/Babb_Steve_2020_Resume.pdf', '_blank'); //Why is this not functional?

})

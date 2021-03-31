//hide pageview resume to start
// $('#resume').hide();
//reveal pageview resume when requested via button; hide 'My Resume' button and replace with 'Download' button.
$('#myResume').click(function (event) {
    event.preventDefault();
        window.open('Docs/Babb_Steve_2020_Resume.pdf', '_blank'); 
    })
//should be open pdf of resume in alternate window; no working.
// $('#downloadBtns').on('click', 'downloadResume', function(event) {
//     event.preventDefault();
//     window.open('Docs/Babb_Steve_2020_Resume.pdf', '_blank'); //Why is this not functional?
// })

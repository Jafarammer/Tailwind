console.log('it works')

$(document).ready(function () {
    $('.submit').click(function (event) {
        console.log('clicked button')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append(`<div class="flex mb-3 items-center bg-green-500 rounded text-white text-sm font-bold px-4 py-3" role="alert">
            <i class="fas fa-check-circle mr-4"></i>
            <p>Email is  valid</p>
          </div>`)
        } else {
            event.preventDefault()
            statusElm.append(`<div class="flex items-center mb-3 bg-red-600 rounded text-white text-sm font-bold px-4 py-3" role="alert">
            <i class="fas fa-exclamation-triangle mr-4"></i>
            <p>Email is not valid / Email must be filled.</p>
          </div>`)
        }

        if(!subject.length) {
            event.preventDefault()
            statusElm.append(`<div class="flex mb-3 items-center bg-red-600 rounded text-white text-sm font-bold px-4 py-3" role="alert">
            <i class="fas fa-exclamation-triangle mr-4"></i>
            <p>Subject is not valid / Subject must be filled.</p>
          </div>`) 
        }
        if(!message.length) {
            event.preventDefault()
            statusElm.append(`<div class="flex mb-3 items-center bg-red-600 rounded text-white text-sm font-bold px-4 py-3" role="alert">
            <i class="fas fa-exclamation-triangle mr-4"></i>
            <p>Message is not valid / Message must be filled.</p>
          </div>`) 
        }

        // if (subject.length >= 2) {
        //     statusElm.append('<div>Subject is valid</div>')
        // } else {
        //     event.preventDefault()
        //     statusElm.append('<div>Subject is not valid</div>')
        // }

        // if (message.length >= 10) {
        //     statusElm.append('<div>Message is valid</div>')
        // } else {
        //     event.preventDefault()
        //     statusElm.append('<div>Message is not valid</div>')
        // }
    })
})
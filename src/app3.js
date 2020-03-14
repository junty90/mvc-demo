import '/app3.css'
import $ from 'jquery'

const html = `
    <section id="app3">
        <div class="square"></div>
    </section>
`

const element = $(html).appendTo($('body>#app-main'))

const $square = $('#app3 .square')
const localKey = 'app3.action'
const action = localStorage.getItem(localKey) === 'yes'

if (action) {
    $square.addClass('action')
} else {
    $square.removeClass('action')
}

$square.on('click', () => {
    if ($square.hasClass('action')) {
        $square.removeClass('action')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('action')
        localStorage.setItem(localKey, 'yes')
    }
    // $square.toggleClass('action')
})

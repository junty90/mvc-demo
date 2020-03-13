import '/app4.css'
import $ from 'jquery'

const $circle = $('#app4 .circle')

$circle.on('mouseenter', () => {
    $circle.addClass('action')
}).on('mouseleave', () => {
    $circle.removeClass('action')
})
import $ from 'jquery'
import '/app2.css'

const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const localKey = 'app2.index'
let localIndex = localStorage.getItem(localKey) || 0

$tabBar.on('click', 'li', (e) => {
    const $li = $(e.currentTarget)
    $li.addClass('select')
        .siblings().removeClass('select')
    const index = $li.index()
    localStorage.setItem(localKey, index)
    $tabContent.children()
        .eq(index).addClass('action')
        .siblings().removeClass('action')
})

$tabBar.children().eq(localIndex).trigger('click')

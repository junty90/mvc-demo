import $ from 'jquery'
import '/app2.css'

const html = `
    <section id="app2">
        <ol class="tab-bar">
            <li><span>1</span></li>
            <li><span>2</span></li>
        </ol>
        <ol class="tab-content">
            <li>内容1</li>
            <li>内容2</li>
        </ol>
    </section>
`

const element = $(html).appendTo($('body>#app-main'))

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

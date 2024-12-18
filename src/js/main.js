import '../scss/main.scss'
import { formatSelector } from './utils/formatSelector'
import { getData } from './utils/getData'

async function redirectOnClick() {
    const data = await getData()

    const selector = formatSelector(data)

    document.addEventListener('click', (ev) => {
        if (!ev.isTrusted) return

        const block = ev.target.closest('.t-product__option-item_color')
        if (!block) return

        const colorBlock = block.querySelector(selector)
        if (!colorBlock) return

        console.log(colorBlock)
        for (let i = 0; i < data.length; i++) {
            console.log(colorBlock.value, data[i].color)
            if (data[i].color === colorBlock.value) {
                window.location.href = data[i].link
            }
        }
    })
}

redirectOnClick()

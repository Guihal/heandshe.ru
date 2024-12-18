import { elementReady } from './elementReady'

export async function getData() {
    const dataContainer = await elementReady('.js-store-prod-all-charcs')
    if (!dataContainer.hasChildNodes()) return

    const dataBlocks = dataContainer.childNodes
    const data = []

    dataContainer.style.display = 'none'

    for (const child of dataBlocks) {
        if (!child.textContent.includes(': ')) continue

        const childTextSplitted = child.textContent.split(': ')

        data.push({
            color: childTextSplitted[0].toUpperCase().trim(),
            link: childTextSplitted[1].trim(),
        })
    }

    return data
}

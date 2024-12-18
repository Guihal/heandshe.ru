export function formatSelector(data) {
    let selector = ''

    for (let i = 0; i < data.length; i++) {
        if (i === data.length - 1) {
            selector += `input[value="${data[i].color}"]`
            break
        }

        selector += `input[value="${data[i].color}"], `
    }

    return selector
}

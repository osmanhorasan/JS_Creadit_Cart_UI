const onValue = (value, element) => {
    const el = document.getElementById(element)
    const val = document.getElementById(value)
    el.textContent = val.value
}
const toggleButton = document.querySelector('.toggle_button')
const glass = document.querySelector('.glass')
const hideOrShow = document.querySelector('.hide_or_show')

const hidden = 'hidden'

toggleButton.addEventListener('click', () => {
	glass.classList.toggle(hidden)

	if (glass.classList.contains(hidden)) {
		hideOrShow.innerHTML = 'Hide'
	} else {
		hideOrShow.innerHTML = 'Show'
	}
})

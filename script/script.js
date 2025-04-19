document.addEventListener('DOMContentLoaded', function () {
	const navButtons = document.querySelectorAll('.services__nav')
	const contentBlocks = document.querySelectorAll('.services__desc__block')

	navButtons.forEach((button, index) => {
		button.addEventListener('click', function () {
			// Удаляем активные классы у всех кнопок
			navButtons.forEach(btn => {
				btn.classList.remove('services__nav--active')
			})

			// Скрываем все блоки (добавляем inactive и удаляем active)
			contentBlocks.forEach(block => {
				block.classList.add('services__desc__block--inactive')
				block.classList.remove('services__desc__block--active')
			})

			// Активируем текущую кнопку
			this.classList.add('services__nav--active')

			// Показываем соответствующий блок (удаляем inactive и добавляем active)
			contentBlocks[index].classList.remove('services__desc__block--inactive')
			contentBlocks[index].classList.add('services__desc__block--active')
		})
	})

	// Активируем первую кнопку по умолчанию, если есть активный блок
	const hasActiveBlock = document.querySelector(
		'.services__desc__block--active'
	)
	if (!hasActiveBlock && navButtons.length > 0 && contentBlocks.length > 0) {
		navButtons[0].click()
	}
})

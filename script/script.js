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

window.addEventListener('DOMContentLoaded', () => {
	// Задаём стартовое время
	let hours = 2
	let minutes = 10
	let seconds = 0

	// Вычисляем общее количество секунд
	let totalSeconds = hours * 3600 + minutes * 60 + seconds

	function updateTimer() {
		if (totalSeconds <= 0) {
			// Когда таймер доходит до нуля — ставим все 00 и останавливаем
			document.getElementById('days').textContent = '00'
			document.getElementById('hours').textContent = '00'
			document.getElementById('minutes').textContent = '00'
			document.getElementById('seconds').textContent = '00'
			clearInterval(timerInterval)
			return
		}

		// Считаем дни, часы, минуты и секунды
		const days = Math.floor(totalSeconds / (3600 * 24))
		const hrs = Math.floor((totalSeconds % (3600 * 24)) / 3600)
		const mins = Math.floor((totalSeconds % 3600) / 60)
		const secs = totalSeconds % 60

		// Обновляем DOM
		document.getElementById('days').textContent = String(days).padStart(2, '0')
		document.getElementById('hours').textContent = String(hrs).padStart(2, '0')
		document.getElementById('minutes').textContent = String(mins).padStart(
			2,
			'0'
		)
		document.getElementById('seconds').textContent = String(secs).padStart(
			2,
			'0'
		)

		// Уменьшаем общее количество секунд
		totalSeconds--
	}

	// Запускаем таймер
	updateTimer()
	const timerInterval = setInterval(updateTimer, 1000)
})

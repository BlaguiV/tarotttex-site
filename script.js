let closeBtn = document.querySelector(".modal-close")
let modalText = document.querySelector('.modal-text')
let modalTitle = document.querySelector('.modal-title')
const overlay = document.querySelector('.modal-overlay')
const scheduleItems = document.querySelectorAll(".service h2");
let data = {
    love: {
        title: "Розклад на кохання",
        text: "Дізнайся, які почуття панують у твоєму серці та серцях оточуючих. Цей розклад допоможе зрозуміти розвиток стосунків, відкрити нові можливості та знайти гармонію у любові."
    },
    finance: {
        title: "Розклад на фінанси",
        text: "Аналіз твоїх фінансових потоків та ресурсів. Допомагає виявити приховані можливості для заробітку, уникнути витрат та приймати мудрі рішення у справах грошей.",
    },
    health: {
        title: "Розклад на здоров'я",
        text: 'Розклад для підтримки фізичного та емоційного стану. Допомагає зрозуміти, на що варто звернути увагу, і знайти баланс між тілом і душею.',
    },
    individual: {
        title: "Індивідуальне запитання",
        text: "Ти обираєш тему, що хвилює саме тебе. Цей розклад дає персональні поради та відповіді на запитання, які важливі саме зараз.",
    }
}

scheduleItems.forEach(item => {
    item.addEventListener("click", () => {
        const id = item.id

        modalTitle.textContent = data[id].title
        modalText.textContent = data[id].text

        overlay.classList.add('active')
    })
})

closeBtn.addEventListener("click", () => overlay.classList.remove('active'))


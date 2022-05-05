const tabs = document.querySelectorAll('.tab-ind')
const tabsInfo = document.querySelectorAll('.info-card')
const tabsImg = document.querySelectorAll('.ind-img')

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabsInfo.forEach((card) => {
            card.classList.remove('active')
        })
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tabsImg.forEach((img) => {
            img.classList.remove('active');
        })
        tabsInfo[index].classList.add('active')
        tabs[index].classList.add('active')
        tabsImg[index].classList.add('active')
    })
})

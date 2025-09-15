let money = document.querySelector('.money-cost')
let parsedMoney = parseFloat(money.innerHTML)

let clickerLevel = document.querySelector('.clicker-level')
let clickerCost = document.querySelector('.clicker-cost')
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let PlaceholderLevel = document.querySelector('.Placeholder-level')
let PlaceholderCost = document.querySelector('.Placeholder-cost')
let PlaceholderIncrease = document.querySelector('.Placeholder-increase')
let parsedPlaceholderCost = parseFloat(PlaceholderCost.innerHTML)
let parsedPlaceholderIncrease = parseFloat(PlaceholderIncrease.innerHTML)

let Placeholder2Level = document.querySelector('.Placeholder2-level')
let Placeholder2Cost = document.querySelector('.Placeholder2-cost')
let Placeholder2Increase = document.querySelector('.Placeholder2-increase')
let parsedPlaceholder2Cost = parseFloat(Placeholder2Cost.innerHTML)
let parsedPlaceholder2Increase = parseFloat(Placeholder2Increase.innerHTML)

let mpcText = document.getElementById('mpc-text')
let mpsText = document.getElementById('mps-text')

let moneyImgContainer = document.querySelector('.money-img-container')

let mpc = 1
let mps = 0

function incrementMoney(event) {
    money.innerHTML = Math.round(parsedMoney += mpc) 

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${Math.round(mpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
    moneyImgContainer.appendChild(div)

    div.classList.add('fade-up')

    timeout(div)

}

const timeout = (div) => {
    setTimeout(() => {
       div.remove()
    }, 800)
}

function buyClicker() {
    if (parsedMoney >= parsedClickerCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedClickerCost)

        clickerLevel.innerHTML ++
         
        parsedClickerIncrease = parsedClickerIncrease * 1
        clickerIncrease.innerHTML = parsedClickerIncrease
        mpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyPlaceholder() {
    if (parsedMoney >= parsedPlaceholderCost) {
        money.innerHTML = Math.round(parsedMoney -= parsedPlaceholderCost)

        PlaceholderLevel.innerHTML ++
         
        parsedPlaceholderIncrease = parsedPlaceholderIncrease * 1
        PlaceholderIncrease.innerHTML = parsedPlaceholderIncrease
        mps += parsedPlaceholderIncrease

        parsedPlaceholderCost *= 1.18;
        PlaceholderCost.innerHTML = Math.round(parsedPlaceholderCost)
    }
}

function buyPlaceholder2() {
    if (parsedMoney >= parsedPlaceholder2Cost) {
        money.innerHTML = Math.round(parsedMoney -= parsedPlaceholder2Cost)

        Placeholder2Level.innerHTML ++
         
        parsedPlaceholder2Increase = parsedPlaceholder2Increase * 1
        Placeholder2Increase.innerHTML = parsedPlaceholder2Increase
        mps += parsedPlaceholder2Increase

        parsedPlaceholder2Cost *= 1.18;
        Placeholder2Cost.innerHTML = Math.round(parsedPlaceholder2Cost)
    }
}

setInterval (() => {
    parsedMoney += mps / 10
    money.innerHTML = Math.round(parsedMoney)
    mpcText.innerHTML = Math.round(mpc)
    mpsText.innerHTML = Math.round(mps)
}, 100)
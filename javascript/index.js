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

let Placeholder3Level = document.querySelector('.Placeholder3-level')
let Placeholder3Cost = document.querySelector('.Placeholder3-cost')
let Placeholder3Increase = document.querySelector('.Placeholder3-increase')
let parsedPlaceholder3Cost = parseFloat(Placeholder3Cost.innerHTML)
let parsedPlaceholder3Increase = parseFloat(Placeholder3Increase.innerHTML)

let Placeholder4Level = document.querySelector('.Placeholder4-level')
let Placeholder4Cost = document.querySelector('.Placeholder4-cost')
let Placeholder4Increase = document.querySelector('.Placeholder4-increase')
let parsedPlaceholder4Cost = parseFloat(Placeholder4Cost.innerHTML)
let parsedPlaceholder4Increase = parseFloat(Placeholder4Increase.innerHTML)

let mpcText = document.getElementById('mpc-text')
let mpsText = document.getElementById('mps-text')

let moneyImgContainer = document.querySelector('.money-img-container')

let mpc = 1
let mps = 0

function formatMoney(value) {
    const suffixes = [
        { limit: 1e15, suffix: 'Qd' },   
        { limit: 1e12, suffix: 'T' },   
        { limit: 1e9,  suffix: 'B' },  
        { limit: 1e6,  suffix: 'M' },   
        { limit: 1e3,  suffix: 'K' }    
    ];

    for (let i = 0; i < suffixes.length; i++) {
        if (value >= suffixes[i].limit) {
            return (value / suffixes[i].limit).toFixed(1).replace(/\.0$/, '') + suffixes[i].suffix;
        }
    }

    return value.toString();
}


function incrementMoney(event) {
    money.innerHTML = formatMoney(Math.round(parsedMoney += mpc)) 

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${formatMoney(Math.round(mpc))}`
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
        money.innerHTML = formatMoney(Math.round(parsedMoney -= parsedClickerCost))

        clickerLevel.innerHTML ++
         
        parsedClickerIncrease = parsedClickerIncrease * 1
        clickerIncrease.innerHTML = formatMoney(parsedClickerIncrease)
        mpc += parsedClickerIncrease

        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = formatMoney(Math.round(parsedClickerCost))
    }
}

function buyPlaceholder() {
    if (parsedMoney >= parsedPlaceholderCost) {
        money.innerHTML = formatMoney(Math.round(parsedMoney -= parsedPlaceholderCost))

        PlaceholderLevel.innerHTML ++
         
        parsedPlaceholderIncrease = parsedPlaceholderIncrease * 1
        PlaceholderIncrease.innerHTML = formatMoney(parsedPlaceholderIncrease)
        mps += parsedPlaceholderIncrease

        parsedPlaceholderCost *= 1.18;
        PlaceholderCost.innerHTML = formatMoney(Math.round(parsedPlaceholderCost))
    }
}

function buyPlaceholder2() {
    if (parsedMoney >= parsedPlaceholder2Cost) {
        money.innerHTML = formatMoney(Math.round(parsedMoney -= parsedPlaceholder2Cost))

        Placeholder2Level.innerHTML ++
         
        parsedPlaceholder2Increase = parsedPlaceholder2Increase * 1
        Placeholder2Increase.innerHTML = formatMoney(parsedPlaceholder2Increase)
        mps += parsedPlaceholder2Increase

        parsedPlaceholder2Cost *= 1.18;
        Placeholder2Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder2Cost))
    }
}

function buyPlaceholder3() {
    if (parsedMoney >= parsedPlaceholder3Cost) {
        money.innerHTML = formatMoney(Math.round(parsedMoney -= parsedPlaceholder3Cost))

        Placeholder3Level.innerHTML ++
         
        parsedPlaceholder3Increase = parsedPlaceholder3Increase * 1
        Placeholder3Increase.innerHTML = formatMoney(parsedPlaceholder3Increase)
        mps += parsedPlaceholder3Increase

        parsedPlaceholder3Cost *= 1.18;
        Placeholder3Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder3Cost))
    }
}

function buyPlaceholder4() {
    if (parsedMoney >= parsedPlaceholder4Cost) {
        money.innerHTML = formatMoney(Math.round(parsedMoney -= parsedPlaceholder4Cost))

        Placeholder4Level.innerHTML ++
         
        parsedPlaceholder4Increase = parsedPlaceholder4Increase * 1
        Placeholder4Increase.innerHTML = formatMoney(parsedPlaceholder4Increase)
        mps += parsedPlaceholder4Increase

        parsedPlaceholder4Cost *= 1.18;
        Placeholder4Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder4Cost))
    }
}

setInterval (() => {
    parsedMoney += mps / 10 
    money.innerHTML = formatMoney(Math.round(parsedMoney))
    mpcText.innerHTML = formatMoney(Math.round(mpc))
    mpsText.innerHTML = formatMoney(Math.round(mps))
}, 100)


money.innerHTML = formatMoney(Math.round(parsedMoney));


clickerCost.innerHTML = formatMoney(Math.round(parsedClickerCost));
PlaceholderCost.innerHTML = formatMoney(Math.round(parsedPlaceholderCost));
Placeholder2Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder2Cost));
Placeholder3Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder3Cost));
Placeholder4Cost.innerHTML = formatMoney(Math.round(parsedPlaceholder4Cost));


clickerIncrease.innerHTML = formatMoney(parsedClickerIncrease);
PlaceholderIncrease.innerHTML = formatMoney(parsedPlaceholderIncrease);
Placeholder2Increase.innerHTML = formatMoney(parsedPlaceholder2Increase);
Placeholder3Increase.innerHTML = formatMoney(parsedPlaceholder3Increase);
Placeholder4Increase.innerHTML = formatMoney(parsedPlaceholder4Increase);
let tempFirst = document.getElementById('tempFirst')
let tempSecond = document.getElementById('tempSecond')

let temperatureFirst = document.querySelector('[data-temp-first]')
let temperatureSecond = document.querySelector('[data-temp-second]')

function onConvert() {
    let tempNameFirst = temperatureFirst.dataset.tempFirst

    let tempFirstValue = tempFirst.value

    let error = validate()

    if (error.tempFirstValue) {
        document.getElementById('errorMsg').textContent = error.tempFirstValue
        document.getElementById('errorMsg').style.visibility = 'visible'
    }

    else if (!error.tempFirstValue) {
        if (tempNameFirst === 'celsius') {
                let tempSecond = (tempFirstValue * 9/5) + 32
                document.getElementById('tempSecond').value = tempSecond
                document.getElementById('kalkulasi').value = `(${tempFirstValue} \u00B0C x 9/5) + 32 = ${tempSecond} \u00B0F `
            }
    
        else if (tempNameFirst === 'fahrenheit')  {
                let tempSecond = (tempFirstValue - 32) * 5/9
                document.getElementById('tempSecond').value = tempSecond
    
                document.getElementById('kalkulasi').value = `(${tempFirstValue} \u00B0F - 32) x 5/9 = ${tempSecond} \u00B0C `
        }
        document.getElementById('errorMsg').textContent = ''
        document.getElementById('errorMsg').style.visibility = 'hidden'
    }
}

function validate() {
    let error = {}
    const tempFirstValue = tempFirst.value

    if (!tempFirstValue) {
        error.tempFirstValue = 'Input tidak boleh kosong'
    } 
    else if (isNaN(tempFirstValue)) {
        error.tempFirstValue = 'Input harus angka'
    }

    return error
}

function onReverse() {
    let tempNameFirst = temperatureFirst.dataset.tempFirst

    tempFirst.value = ''
    tempSecond.value = ''
    document.getElementById('kalkulasi').value = ''
    document.getElementById('errorMsg').textContent = ''
    document.getElementById('errorMsg').style.visibility = 'hidden'

    if (tempNameFirst == 'celsius') {
        temperatureFirst.dataset.tempFirst = 'fahrenheit'
        temperatureFirst.textContent = 'Fahrenheit (\u00B0F)'

        temperatureSecond.dataset.tempSecond = 'celsius'
        temperatureSecond.textContent = 'Celsius (\u00B0C)'

    } else {
        temperatureFirst.dataset.tempFirst = 'celsius'
        temperatureFirst.textContent = 'Celsius (\u00B0C)'

        temperatureSecond.dataset.tempSecond = 'fahrenheit'
        temperatureSecond.textContent = 'Fahrenheit (\u00B0F)'
    }
}

function onReset() {
    tempFirst.value = ''
    tempSecond.value = ''
    document.getElementById('kalkulasi').value = ''
    document.getElementById('errorMsg').textContent = ''
    document.getElementById('errorMsg').style.visibility = 'hidden'

    temperatureFirst.dataset.tempFirst = 'celsius'
    temperatureFirst.textContent = 'Celsius (\u00B0C)'

    temperatureSecond.dataset.tempSecond = 'fahrenheit'
    temperatureSecond.textContent = 'Fahrenheit (\u00B0F)'
}


// script untuk accordion explanation
const accordion = document.getElementsByClassName('container-explain')

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}
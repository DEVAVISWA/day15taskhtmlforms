let form = document.getElementById('formID')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    let fname = document.getElementById('fname')
    let FirstName = document.getElementById('td1')
    FirstName.textContent = fname.value

    let lname = document.getElementById('lname')
    let LastName = document.getElementById('td2')
    LastName.textContent = lname.value

    let add = document.getElementById('addres')
    let address = document.getElementById('td3')
    address.textContent = add.value

    let pin = document.getElementById('pincode')
    let pincode = document.getElementById('td4')
    pincode.textContent = pin.value

    let gen = document.getElementById('gender')
    let gender = document.getElementById('td5')
    gender.textContent = gen.value



    let sta = document.getElementById('state')
    let state = document.getElementById('td7')
    state.textContent = sta.value

    let coun = document.getElementById('country')
    let country = document.getElementById('td8')
    country.textContent = coun.value

    const selectedOptions = Array.from(document.getElementById('selectID').selectedOptions)
    if (selectedOptions.length < 2) {
        alert("Please select more than two CHOICE OF FOOD")
        return
    }
    let choiceoffood = document.getElementById('td6')
    choiceoffood.textContent = selectedOptions.map(option => option.textContent).join(',')

    form.reset()
})






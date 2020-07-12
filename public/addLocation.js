const searchAdd = document.querySelector('.search-box-add');
const formBox = document.querySelector('.form-input');
const printText = document.querySelector('.print');
const address = new Location;




const updateUI = (data) => {

    printText.innerHTML = ` <form action="/add" method="POST">
    <label for="town">Town:</label>
    <input type="text" id="town" name="town" value="${data.results[0].address_components[2].long_name}">

    <label for="postcode">Postcode:</label>
    <input type="text" id="postcode" name="postcode" value="${data.results[0].address_components[0].long_name}">

    <label for="lat">Lat:</label>
    <input type="text" id="lat" name="lat" value="${data.results[0].geometry.location.lat}">
    
    <label for="lng">Lng:</label>
    <input type="text" id="lng" name="lng" value="${data.results[0].geometry.location.lng}">
    <button>Submit</button>
</form>                  
    `
};


searchAdd.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault();
        const addPostcode = e.target.value.toUpperCase().trim();
        formBox.reset();

        if(valid_postcode(addPostcode) == false){
            alert('Type postcode again');
        }else{
            address.requestDetails(addPostcode)
            .then(data => updateUI(data))
            .catch(err => console.log(err))
        }

    };
});

function valid_postcode(addPostcode) {
    addPostcode = addPostcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(addPostcode);
}

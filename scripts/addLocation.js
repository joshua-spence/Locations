const searchAdd = document.querySelector('.search-box-add');
const formBox = document.querySelector('.form-input');
const printText = document.querySelector('.print');
const address = new Location;




const updateUI = (data) => {

    printText.innerHTML = `
        <h2>${data.results[0].address_components[2].long_name}</h2>
        <h3>${data.results[0].address_components[0].long_name}</h3>
        <p>${data.results[0].geometry.location.lat}</p>
        <p>${data.results[0].geometry.location.lng}</p>                     
    `

};


searchAdd.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault();
        const addPostcode = e.target.value.toUpperCase().trim();
        formBox.reset();

        if(valid_postcode(postcode) == false){
            alert('Type postcode again');
        }else{
            address.requestDetails(addPostcode)
            .then(data => updateUI(data))
            .catch(err => console.log(err))
        }

        
       

    };
});


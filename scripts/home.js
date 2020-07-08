
const searchBox = document.querySelector('.search-box');
const formBox = document.querySelector('.form-input');
const testBox = document.querySelector('.test');
const key = 'AIzaSyAZlpkTOqa2emvDV654OBiw204i_NcGa4M';



searchBox.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault();

        const postcode = e.target.value.toUpperCase().trim()
        getLocation(postcode);
        formBox.reset();
    }
})


async function getLocation(postcode){
    
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${postcode}&key=${key}`);
    const data = await response.json();

    const coordinates = data.results[0].geometry.location;
    

};




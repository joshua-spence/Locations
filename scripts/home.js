const searchBox = document.querySelector('.search-box');
const formBox = document.querySelector('.form-input');
const testBox = document.querySelector('.test');
var locate = new Location;

const updateUI = (data) => {
    testBox.innerHTML = `<h3>${data.toFixed(2)} miles </h3>`;
};


//When text is entered into the searchbox it will read the input
searchBox.addEventListener('keypress', e => {
    if(e.key == 'Enter'){
        e.preventDefault();

        const postcode = e.target.value.toUpperCase().trim();
        formBox.reset();

        if(valid_postcode(postcode) == false){
            alert('Type postcode again');
        }else{
            locate.request(postcode)
            .then(data => updateUI(data))
            .catch(err => console.log(err));
        }

        
    };
});

function valid_postcode(postcode) {
    postcode = postcode.replace(/\s/g, "");
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    return regex.test(postcode);
}

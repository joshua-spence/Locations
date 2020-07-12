// AIzaSyAy0hI3EZ01zNBpdXrcSsCEnbESYVNy-fA
// const coordinates2 = [ {lat: 51.6733781, lng: -0.0330055},]; 

console.log(locations);

class Location {
    constructor() {
        this.key = 'AIzaSyAZlpkTOqa2emvDV654OBiw204i_NcGa4M';
        this.locationURI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    }

    async request(postcode) {
        const coordinates = await this.getLocation(postcode);
        const distanceApart = await this.haversineDistance(coordinates);
        return distanceApart;
    }
    
    async getLocation(postcode) {
        const query = `${postcode}&key=${this.key}`;
        const response = await fetch(this.locationURI + query);
        const data =  await response.json();
        return data.results[0].geometry.location;
    }

    //Calculates the distancee from user to the locations in database
    async haversineDistance(coordinates) {
        var R = 3958.8; 
        var rlat1 = coordinates.lat * (Math.PI/180); 
        var rlat2 = coordinates2[0].lat * (Math.PI/180); 
        var difflat = rlat2-rlat1; 
        var difflon = (coordinates2[0].lng-coordinates.lng) * (Math.PI/180); 
    
        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d;
      }

     //Last two functions get object full of information to add to the database. Gets sent to addLocation.  
    async requestDetails(addPostcode) {
        const details = await this.getDetails(addPostcode);
        return details;
        
    }
            
    async getDetails(addPostcode) {
        const query = `${addPostcode}&key=${this.key}`;
        const response = await fetch(this.locationURI + query);
        const data =  await response.json();
        return data;
                
   }
   
}


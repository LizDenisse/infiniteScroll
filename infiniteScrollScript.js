const imageContainer -document.getElementById('image-container');
const loader= document.getElementById('loader');


// unsplash API 

const count= 10; 
const apiKey= 'NL4Y3T9Dq7L2SZwlivG7kBHpfgXOMlImPxIJOtCRoEE';
const apiUrl= `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;



// Ger photos from Unsplash APi  

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

    }
    catch (error) {
        // catch error here
    }
}
getPhotos();
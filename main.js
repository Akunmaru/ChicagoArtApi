/**
 * @param img_index
 * @param item_index
 * 
 */
async function clickedEvent(img_index, item_index){
    // Get Track Name
    let id = document.getElementsByTagName('img')[img_index].attributes[2].value;
    console.log(id)

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`,{
        method: 'GET'
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response)

    var newTable = "<table id='juice' border='1' width='100%'><tr>";
    newTable += "<tr align='center'>" + "<th>" + "Artwork Title: " + response.data.title + "</th>" + "</tr>";
    newTable += "<tr align='center'>" + "<th>" + "Artwork Type: " + response.data.artwork_type_title + "<th>" + "</tr>";
    newTable += "<tr align='center'>" + "<th>" + "Artwork Department: " + response.data.department_title + "</th>" + "</tr>";
    newTable += "<tr align='center'>" + "<th>" + "Artwork Information: " + response.data.artist_display + "</th>" + "</tr>" + "</table>";

    document.getElementById("test").innerHTML = newTable;
}

 /**
  * @param id
  * @param event
  * 
  * id = image if for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces information from the clickedEvent based 
  * on index of image.
  */

 function getInfo(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(1,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(2,0)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(5,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(6,0)
            break;
        }
        case 'fig7': {
            event.stopPropagation();
            clickedEvent(7,0)
            break;
        }
        case 'fig8': {
            event.stopPropagation();
            clickedEvent(8,0)
            break;
        }
        case 'fig9': {
            event.stopPropagation();
            clickedEvent(9,0)
            break;
        }
    }
}

/**
 * @param url
 * 
 * url = Song Preview_url
 * 
 * Function will return an audio clip given by the preview url
 */

 function songSnippet(url){
     playSong = new Audio(url);
     return playSong.play()
 }

 /**
  * NO PARAMS
  * 
  * Function returns event to stop song snippet
  */
 function stopSnippet(){
     return playSong.pause();
 }

//THIS IS FROM CHICAGOS API DOCUMENTATION
// Get Our Ranger Data
const getData = async () => {
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/27992?fields=id,title,image_id`)
    console.log(response.data)
    return response.data
}

// create Constants to hold DOM Elements
const DOM_Elements = {
    ranger_list: '.ranger-list',
}

// Creation of the Ranger List HTML
const create_list = ( id, name ) => {
    const html = `<a href ="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}"> ${name} </a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and display HTML 

const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list(element.id, element.name))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = '';
}
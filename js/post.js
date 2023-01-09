//https://dlinq.middcreate.net/wp-json/wp/v2/posts/?tags=358

//from https://stackoverflow.com/questions/14341156/calculating-page-load-time-in-javascript
window.onload = function () {
    getDetoxPost();
}


function getDetoxPost(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
	const destination = document.querySelector('#destination');
	const dataUrl = 'json/detox.json';
	fetch(dataUrl)
  .then(function(response) {
  // Convert to JSON
  return response.json();
})
  .then(function(data) {
  // GOOD
  data.forEach(function (value, i) {
  	 console.log(value)
     let urlId = urlParams.get('id')
     let postId = value.id;
     if ( urlId == postId){
        let title = value.title.rendered;
        let body = value.content.rendered;
        // let action = value.acf.take_action;
        // let read = value.acf.keep_reading;
        let author = value.detox_author;
        document.querySelector('#post-title').innerHTML = title;
        //document.querySelector('#author').innerHTML = 'By ' + author;
        document.querySelector('#post-body').innerHTML = body;
        // document.querySelector('#action').innerHTML = `<h2>Take Action</h2>${action}`;
        // document.querySelector('#read').innerHTML = `<h2>Read More</h2>${read}`;
     }
     
	});

});
}

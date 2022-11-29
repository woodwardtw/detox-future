//https://dlinq.middcreate.net/wp-json/wp/v2/posts/?tags=358

//from https://stackoverflow.com/questions/14341156/calculating-page-load-time-in-javascript
window.onload = function () {
    const loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime);
    const speed = document.querySelector('#speed')
    speed.innerHTML = loadTime + ' ms';
    getDetoxPosts();
}


function getDetoxPosts(){	
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
     let title = value.title.rendered;
     let cleanTitle = title.replace('DD ', '');
     let excerpt = value.excerpt.rendered;
     let postId = value.id;
     destination.innerHTML = destination.innerHTML + `<li><a href="./post.html?id=${postId}">${cleanTitle}</a></li>`;
	});

});
}

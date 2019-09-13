(function(){
	// Initialize Firebase
	var config = {
	apiKey: "AIzaSyDEAjhwXki-kw3VGKDBXlGDBuF5rLuvMxE",
	authDomain: "cleonhotspot.firebaseapp.com",
	databaseURL: "https://cleonhotspot.firebaseio.com",
	projectId: "cleonhotspot",
	storageBucket: "cleonhotspot.appspot.com",
	messagingSenderId: "416873330228"
	};
	firebase.initializeApp(config);


	// Set the configuration for your app
	// TODO: Replace with your project's config object
  
	const preObject = document.getElementById('object');
	const dbRefObject = firebase.database().ref().child('User');
	  
	dbRefObject.on('value', snap => {
		preObject.innerText = JSON.stringify(snap.val(),null,4)
	});
}());
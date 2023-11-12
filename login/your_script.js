// Replace 'your-facebook-app-id' and 'your-google-client-id' with your actual credentials
const facebookAppId = 'your-facebook-app-id';
const googleClientId = 'your-google-client-id';

// Initialize Facebook SDK
window.fbAsyncInit = function() {
  FB.init({
    appId      : facebookAppId,
    cookie     : true,
    xfbml      : true,
    version    : 'v12.0'
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Function to handle Facebook authentication
function authenticateWithFacebook() {
  FB.login(function(response) {
    if (response.authResponse) {
      // User authenticated successfully, redirect to the dashboard
      window.location.href = 'dashboard.html';
    } else {
      // User cancelled login or did not authorize the app
      console.log('Facebook login cancelled');
    }
  }, {scope: 'public_profile,email'});
}

// Function to handle Google authentication
function authenticateWithGoogle() {
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: googleClientId,
    }).then(function(auth2) {
      auth2.signIn().then(function(googleUser) {
        // User authenticated successfully, redirect to the dashboard
        window.location.href = 'dashboard.html';
      }).catch(function(error) {
        console.error('Google authentication error', error);
      });
    });
  });
}

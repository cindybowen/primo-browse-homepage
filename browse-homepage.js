/* function section may already exist in your custom.js, depending on other customizations, so just add LOCAL_VID portion to the section */

(function () {
    "use strict";
    'use strict';
  var LOCAL_VID = "YOUR_VIEW_HERE";
  
  
/* Add Browse search 'home' page, with thanks to UIUC. NOTE: you also need to define LOCAL_VID (see above)  */
      app.component('prmBrowseSearchAfter', {
        bindings: {parentCtrl: '<'},
        templateUrl: '/discovery/custom/' + LOCAL_VID + '/html/browse/browse_en.html'
        
    });

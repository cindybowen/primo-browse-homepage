/* function section may already exist in your custom.js, depending on other customizations, so just add LOCAL_VID portion to that section */

(function () {
    "use strict";
    'use strict';
  var LOCAL_VID = "YOUR_VIEW_CODE_HERE";
  
  
/* Add Browse search 'home' page, with thanks to UIUC. NOTE: you need to define LOCAL_VID (see above)  */
      app.component('prmBrowseSearchAfter', {
        bindings: {parentCtrl: '<'},
        templateUrl: '/discovery/custom/' + LOCAL_VID + '/html/browse/browse_en.html'
        
    });

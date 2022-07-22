# primo-browse-homepage
Javascript code to add a 'homepage' to the Primo VE Browse Search screen before searching, verified compliant with the coming update to Angular 1.8.

When we implemented the Browse Search, we were interested in having some sort of message for users that would mention the gaps in those results. There is no built-in ability to create such a message, but Ex Libris Support provided an instance of an institution adding one via custom JavaScript plus the creation of an html page for display (mimicking what happens for the 'homepage'). The example: https://i-share-uiu.primo.exlibrisgroup.com/discovery/search?vid=01CARLI_UIU:CARLI_UIU&lang=en

I extracted the relevant code from their custom.js file, tweaked it, and am sharing it here for communal benefit.

You will need to modify the custom.js file for the Primo view and create a 'browse' folder within the 'html' folder for the Primo view, then place the browse_en.html file in that folder, i.e. Your Primo view > html > browse > browse_en.html, imitating the model of the Primo homepage.

![image](https://user-images.githubusercontent.com/75031778/180499512-ff4d1e6a-72ec-41c9-a966-ddb3572fa60e.png)

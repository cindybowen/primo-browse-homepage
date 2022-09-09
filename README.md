# primo-browse-homepage
Javascript code to add a 'homepage' to the Primo VE Browse Search screen.

When we implemented the Browse Search, we were interested in having some sort of message for users that would provide general information about how it works and mention the known gap in those results (as part of a consortium using a Network Zone, not all available e-resources are represented in our browse results due to <a href="https://ideas.exlibrisgroup.com/forums/308173-alma/suggestions/44939524-include-available-nz-e-inventory-within-iz-alma-pr">known shortcomings</a>).

There is no built-in ability to create such a message, but Ex Libris Support provided an instance of an institution adding one via custom javascript plus the creation of an html page for display (mimicking what happens for the 'homepage'). The example: https://i-share-uiu.primo.exlibrisgroup.com/discovery/browse?vid=01CARLI_UIU:CARLI_UIU&lang=en

I extracted the relevant code from their custom.js file, tweaked it, and am sharing it here for communal benefit. In my initial attempt, the 'boxes' ended up as wide as the browser screen. To make their width and behavior mimic the boxes on the Primo homepage, my colleague Steve Fernie developed some CSS and modified the html.

You will need to modify the custom.js file and custom CSS file for the Primo view and create a 'browse' folder within the 'html' folder for the Primo view, then place a browse_en.html file in that folder, i.e. Your Primo view > html > browse > browse_en.html, imitating the model of the Primo homepage.

![image](https://user-images.githubusercontent.com/75031778/180499512-ff4d1e6a-72ec-41c9-a966-ddb3572fa60e.png)

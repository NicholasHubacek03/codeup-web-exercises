(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsString)
 planetsArray = planetsString.split("|");
      console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // let planetsWbr = planetsArray.join("<br>");
    // console.log(planetsWbr);
    //
    // let ulPlanets;
    // let listring;
    //
    // planetsArray.forEach(function (planet){
    //     listring = "<li>" + planet + "</li>"
    //     ulPlanets += listring;
    // }
    // if (planet === planetsArray[planetsArray.length -1]){
    //     ulPlanets + "</ul>";
    // })
    // console.log(ulPlanets)
})();


/**
 * Created by JENN on 10/2/2016.
 */
"use strict";

//for loop counter
var i = 0;

//other variables
var centerThumb = 0;
var leftThumb = 4;
var rightThumb = 1;
var image = new Image();
var image2 = new Image();

//arrays
var images = ["images/alligators.jpg", "images/beach1.jpg", "images/beach2.jpg", "images/beach3.jpg", "images/beach4.jpg", "images/beach5.jpg", "images/beach6.jpg", "images/beach7.jpg", "images/beach8.jpg", "images/crow.jpg", "images/fullSnake.jpg", "images/lizard.jpg", "images/mainDrag.jpg", "images/mansion.jpg", "images/pirate.jpg","images/rainbow.jpg", "images/sandcastle.jpg", "images/sculpture.jpg", "images/stJohnsPass.jpg", "images/sundial.jpg"];
var smallImages = ["images/alligators_sm.jpg", "images/beach1_sm.jpg", "images/beach2_sm.jpg", "images/beach3_sm.jpg", "images/beach4_sm.jpg", "images/beach5_sm.jpg", "images/beach6_sm.jpg", "images/beach7_sm.jpg", "images/beach8_sm.jpg", "images/crow_sm.jpg", "images/fullSnake_sm.jpg", "images/lizard_sm.jpg", "images/mainDrag_sm.jpg", "images/mansion_sm.jpg", "images/pirate_sm.jpg", "images/rainbow_sm.jpg", "images/sandcastle_sm.jpg", "images/sculpture_sm.jpg", "images/stJohnsPass_sm.jpg", "images/sundial_sm.jpg"];
var title = ["Don't molest the alligators??", "Gulf of Mexico", "More Gulf of Mexico", "Angry Sky", "More Angry Sky", "That sunset tho!", "Do you see this?", "Spectacular Sunsets EVERY NIGHT!", "And spectacular lighting", "Not So Friendly Crow", "Dinner Time!", "Dinner", "Treasure Island Main Drag", "Yes, that is a house", "PIRATES", "Rainbow", "Sandcastle Contest Winner", "To those lost at sea", "St. Johns Pass Entrance", "Random Sundial"];
var description =["Which makes me have to ask.. how many people molested alligators to the point that the State of Florida said 'Hey, we have a problem'","This was amazing to wake up to every day.", "Every day started off like this, bright and sunny.", "Every afternoon ended like this, dark and stormy.", "What killed me was even though it was storming, most of the locals hung out, because it never lasted long.", "And this is why they stuck around.", "Almost every night there was a sunset like this.", "Breathtaking, isn't it?", "The lightening down there is seriously crazy!", "At Maderia Beach. This guy was that close to me.", "Was out hiking and came across this.", "I hope this guy was not dinner", "It was easier to walk the main drag than to drive it. You can take this road all the way north to Alabama.", "Yes, that is a real house.", "Maderia Beach prides itself on it's pirating history.", "Every single night there was a rainbow, or double rainbow.", "This was the contest winning sandcastle. Belive it or not, it is only held together by sand, water and an outer coat of glue", "The sculpture outside the boardwalk entrance at St. John's Pass.", "Welcome to St. John's Pass. Great food and dolphin watching.", "Found this while out hiking as well."];

var count = smallImages.length;

//preload
function preload() {
    "use strict";
    for (i = 0; i < count; i++) {
        image.src = smallImages[i];
        image2.src = images[i];
        smallImages.push(image);
        images.push(image2);
            }
}

//moving through the thumbnails
function changeThumb() {
    "use strict";
    centerThumb++;
    if (centerThumb === count) {
        centerThumb = 0;
    }

    document.getElementById("center").src = smallImages[centerThumb];

    leftThumb++;
    if (leftThumb === count){
        leftThumb = 0;
    }
    document.getElementById("left").src = smallImages[leftThumb];

    rightThumb++;
    if (rightThumb === count){
        rightThumb = 0;
    }
    document.getElementById("right").src = smallImages[rightThumb];
}

function changeThumbLeft() {
    "use strict";
    centerThumb--;
    if (centerThumb === -1) {
        centerThumb = (count-1);
    }
    document.getElementById("center").src = smallImages[centerThumb];

    leftThumb--;
    if (leftThumb === -1) {
        leftThumb = (count-1);
    }
    document.getElementById("left").src = smallImages[leftThumb];

    rightThumb--;
    if (rightThumb === -1) {
        rightThumb = (count-1);
    }
    document.getElementById("right").src = smallImages[rightThumb];
}

function leftButton() {
    "use strict";
    document.getElementById("large").src = images[leftThumb];
    document.getElementById("title").innerHTML = title[leftThumb];
    document.getElementById("detail").innerHTML = description[leftThumb];
}

function rightButton() {
    "use strict";
    document.getElementById("large").src = images[rightThumb];
    document.getElementById("title").innerHTML = title[rightThumb];
    document.getElementById("detail").innerHTML = description[rightThumb];
}

function centerButton() {
    "use strict";
    document.getElementById("large").src = images[centerThumb];
    document.getElementById("title").innerHTML = title[centerThumb];
    document.getElementById("detail").innerHTML = description[centerThumb];

}

function onload() {
    "use strict";
    preload();
    }

window.onload = function () {
    onload();
    preload();
    changeThumb();
    changeThumbLeft();
    leftButton();
    rightButton();
    centerButton();
};
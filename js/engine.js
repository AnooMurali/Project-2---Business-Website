// declare a variable called slideImg to store the images which is in an array (list of items) //
var slideImg =  ["images/studio.jpg", "images/studio2.jpg", "images/studio3.png", "images/studio4.png"];

var Img_Number = 0; 

// create a variable to store lenght of array. here i'm specifying the length to be 3//
var Img_Len = 3;

/*/////////////////////////////////////////////////////////
/////this is the code for auto slider//////////////////////
/////////////////////////////////////////////////////////*/
function auto(){
	setInterval(function(){

		console.log(Img_Number)
		if(Img_Number == 3){
			Img_Number = 0;
		
		} else {
			Img_Number++;
		}
		// document.slideshow.src = slideImg[Img_Number].src;
		console.log( slideImg[Img_Number] )

		$("#slideimg").attr('src', slideImg[Img_Number]);
	}, 1500)
}

auto();

/*/////////////////////////////////////////////////////////
/////this is the code for unit testing manual slider///////////
/////////////////////////////////////////////////////////*/

// create a function called previous. this button was created just to manually test. //
// function previous() {
	
// 	console.log(Img_Number)   //this line just writes to the console. part of unit testing //
// 	if(Img_Number == 0){	  // if/else logic: to see if the counter reaches the '0' in the array(list), then put counter at array[3]//
// 		Img_Number = 3;		 
	
// 	} else {
// 		Img_Number--;        
// 	}
// 	// document.slideshow.src = slideImg[Img_Number].src; // //--this was just to test//
// 	console.log( slideImg[Img_Number] )  			//line to test//
// 	$("#slideimg").attr('src', slideImg[Img_Number]);		//jquery method that calls image defined in the html file for element id "slideimg"//
// }

// function next() {		//this additional code to test manually.

// 	// Img_Number++;
// 	if ( Img_Number = Img_Len ){

// 		// Img_Number = 4;
// 		console.log( Img_Number )
// 	}
// 	// document.slideshow.src = slideImg[Img_Number].src;
// 	console.log( [Img_Number] )
		
// }

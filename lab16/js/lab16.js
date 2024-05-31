/*
    Author: Isaiah Arreola
    Date 2024
    license: public Domain
*/

const URL = "https://api.nasa.gov/planetary/apod";

// create a button listener
$("#activate").click(function(){
  console.log("Click");
  // call ajax
  $.ajax(ajaxObj);
})

// setup ajax object
const ajaxObj = {
  url: URL,
  data: {
    api_key: "DEMO_KEY",
    count: 1
  },
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

// create ajax success callback (named)
function ajaxSuccess(data) {
  console.log("Data:", data);
  // parse json
  const randomAPOD = data[0];
  const title = randomAPOD.title;
  const imageURL = randomAPOD.url;
  const description = randomAPOD.explanation;
  const date = randomAPOD.date;

  // put stuff in output div
  $("#output").html("<h3>" + title);
  $("#output").append("<img src='" + imageURL + "' />")
   $("#output").append("<p class='date'>" + date);
  $("#output").append("<p class='description'>" + description);
  
}


// create ajax error callback
function ajaxError(request,error){
	  console.log("Oops:", error);
}

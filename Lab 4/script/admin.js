var serverURL = "http://restclass.azurewebsites.net";

// object constructor for items

function Item(code, title, price, desc, cat, rating, image){
    this.code = code;
    this.title = title;
    this.price = price;
    this.description = desc;
    this.category = cat;
    this.rating = rating;
    this.image = image;
    this.user = "Liz";

}

function saveItem(){
    // get values
    var code = $("#txtCode").val();
    var title = $("#txtTitle").val();
    var price = $("#txtPrice").val();
    var description = $("#txtDescription").val();
    var category = $("#txtCategory").val();
    var rating = $("#txtRating").val();
    var image = $("#txtImage").val();

    // create an object
    var test = new Item(code, title, price, description, category, rating, image);
    console.log(test);

    // send the object to the server
    $.ajax({
        url: serverURL + "/API/points",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(test),
        success: function(response){
            //alert the user
            console.log("Data Saved, Server Responded with", response);
        },
        error: function(details){
            console.log("Error, something went wrong", details);
        }
    });


}



function init(){
    console.log("admin page");

    
}


function init(){
    console.log("admin page");

    $("#btnSave").click(saveItem);

}




window.onload = init;
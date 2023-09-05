document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("button");
		const form = document.getElementById("send");
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            btn.value = "Sending...";

            const templateID = "template_9e8sjnv";
            const serviceID = "gmail";

            emailjs.sendForm(serviceID, templateID, this).then(
                () => {
                    btn.value = "Send Email";
                    event.reset();
                },
                (err) => {
                    btn.value = "Send Email";
                    alert(JSON.stringify(err));
                }
            );
            form.reset();
        });
});
////////////////////////
    var mysong =document.getElementById("mysong");
  var icon =document.getElementById("icon");//  var mysong =document.getElementById("mysong"); var myimg= document.getElementsByClassName('myimg');
icon.onclick = function(){
if(mysong.paused){
mysong.play();
icon.src = "pause.png";
}
else{
    mysong.pause();
    icon.src = "play.png";


}

}


// ====================================================================================================================
//api
// Function to fetch and display season 1 episodes
// app.js

// function fetchSeason1Episodes() {
//     // Define the URL
//     const apiUrl = "https://officeapi.akashrajpurohit.com/season/1";
  
//     // Use the Fetch API to make a GET request
//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const episodeList = document.getElementById("episode-list");
  
//         // Clear any existing content in the list
//         episodeList.innerHTML = "";
  
//         if (Array.isArray(data) && data.length > 0) {
//           data.forEach((episode) => {
//             const listItem = document.createElement("li");
//             listItem.textContent = `${episode.season}x${episode.episode}: ${episode.title}`;
//             episodeList.appendChild(listItem);
//           });
//         } else {
//           console.error("No episodes found in the data.");
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }
  
//   // Call the function to fetch and display episodes
//   fetchSeason1Episodes();

//   =============================================================================================================
var productnameinput= document.getElementById('productnameInput');
var productpriceInput= document.getElementById('productpriceInput');
var productcategryInput= document.getElementById('productcategryInput');
var productdiscInput= document.getElementById('productdiscInput');
var myfileimg= document.getElementById('myfileimg');
var productlist = [ ];

if(localStorage.getItem('product')!=null){
  productlist= JSON.parse(localStorage.getItem('product'))
displayproduct();
}

function  addproduct(){
var product = {
name:productnameInput.value,
price:productpriceInput.value,
category:productcategryInput.value,
desc:productdiscInput.value,
img:myfileimg.value
}
productlist.push(product);
localStorage.setItem('product',JSON.stringify(productlist))
displayproduct();
//clearform();
}
////////////////////////////////////////////////////
//function clearform(){
 //   productnameInput.value="";
 //   productpriceInput.value="";
  //  productcategryInput.value="";
  //  productdiscInput.value="";

//}
function displayproduct(){
var cartona = ``;
for (var i = 0 ; i < productlist.length ; i++){
cartona += `<tr>
<td>${[i]}</td>
<td>${productlist[i].name}</td>
<td>${productlist[i].price}</td>
<td>${productlist[i].category}</td>
<td>${productlist[i].desc}</td>
<td>${productlist[i].img}</td>
<td><button onclick="deleteproduct(${i})" type="button" class="btn btn-outline-danger">delete</button></td>
<td><button type="button" class="btn btn-outline-success">update</button></td>
</tr>`;
}
 document.getElementById('tabody').innerHTML = cartona;
}

function deleteproduct(deleteindex)
{
productlist.splice(deleteindex,1);
localStorage.setItem('product',JSON.stringify(productlist))
displayproduct();
}
  
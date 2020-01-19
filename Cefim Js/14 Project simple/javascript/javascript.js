let indata = document.getElementById("inData");
const eGo = document.getElementById("go");
let results = document.getElementById("results");
let colors = ["orange","red","blue","purple","darkgreen","lemoni","blood","darkblue"];


eGo.addEventListener("click", creator)

let hovered = document.querySelector("sheet");

function creator(){
    let sheet = document.createElement("div");
    let para = document.createElement("p");
    console.log(sheet);
    let divcount =  results.childElementCount;
    // divcount is counting how many elements inside the selected Element where is here I've got 
    //result and empty div, that get a new element each time I press on the Button eGo, and by that 
    // divcount increase +one with each click 
    
    sheet.classList.add("items", colors[divcount % colors.length]);
    //here the name of calass is taken by the index of the list (colors[index], and  the size of my index is decided by my div child counter)
    //Then we use the the remainder % so we can cycle in the list colors, where when you reach the limit of the list we go back to the beginning .
   
    // creating the delete image

    let delete_img = document.createElement("img");
    delete_img.classList.add("delete");
    delete_img.src = "img/delete.svg";

    //modify icon

    let modify_img = document.createElement("img");
    modify_img.classList.add("modify");
    modify_img.src = "img/edit-icon.png";

    // Expand icons
    let expand_img = document.createElement("img");
    expand_img.classList.add("expand");
    expand_img.src = "img/expand.svg";
    // creating the visited image

    let visited_img = document.createElement("img");
    visited_img.classList.add("visited");
    visited_img.src = "img/unvisited.png";

    // creating the like image
    let like_div = document.createElement("div");
    let like_img = document.createElement("img");
    like_div.classList.add("like");
    like_img.src = "img/like.png";
    like_div.textContent = "()" //                     should inject the value of how manylikes 

    like_div.appendChild(like_img);

    // creating dislike icon
    let dislike_div = document.createElement("div");
    let dislike_img = document.createElement("img");
    dislike_div.classList.add("dislike");
    dislike_img.src = "img/dislike.png";
    dislike_div.textContent = "()" //                   should inject the value of how manylikes 

    dislike_div.appendChild(dislike_img);

    // injecting information and the image insde the sheet div
    
    para.textContent = indata.value;
    sheet.appendChild(para);
    sheet.appendChild(delete_img);
    sheet.appendChild(modify_img);
    sheet.appendChild(expand_img);
    sheet.appendChild(visited_img);
    sheet.appendChild(like_div);
    sheet.appendChild(dislike_div);

    console.log("modified",sheet);
    results.appendChild(sheet);

    // to show the delete icon Hover on
    // to show the delete icon Hover out
    sheet.addEventListener("mouseenter", function(){

        delete_img.style.visibility = "visible";
        modify_img.style.visibility = "visible";
        expand_img.style.visibility = "visible";
        visited_img.style.visibility = "visible";
        like_img.style.visibility = "visible";
        dislike_img.style.visibility = "visible";
        sheet.style.backgroundColor = "#51a8e66b";
        
        //to hover the expand icon to go biger and smaller 
        expand_img.addEventListener("mouseenter", function(){

            expand_img.style.width= "1.3rem";

            // to triger the click of the expand icon
          
            expand_img.addEventListener("click", function(){
                visited_img.src = "img/visited.png";
                // selection of the modal elements.
                let modal = document.querySelector(".modal");
                let post = document.querySelector(".post");
                // giving a value to the original comment in the modal
                post.textContent = para.textContent;
                // selecting the comment input 
                const comment_user = document.querySelector(".comment_user");
                const comment_text = document.querySelector(".comment_text");
                const comment_button = document.querySelector(".comment_button");
                const comment_area = document.querySelector(".comment_area");
                const comment_container = document.querySelector(".comment_container");
                // to show the modal box 
                setTimeout(function() {
                    modal.style.visibility= "visible";
                    modal.style.height = "auto";
                    modal.style.width = "80vw";
                    post.style.width = "70vh";
                    comment_area.style.width = "80vw";
                    comment_container.style.width = "70vw";
                    comment_text.style.width = "30vw";
                    comment_user.style.width = "30vw";
                    comment_button.style.visibility = "visible";

                }, 120); // in 100 ms

                
                // selecting the close icon (X). 
                close_img = document.querySelector(".close");
                close_img.addEventListener("click", function(){
                    setTimeout(function() {
                        modal.style.visibility= "hidden";
                        modal.style.height = "0vh";
                        modal.style.width = "0vw";
                        post.style.width = "0vh";
                        comment_area.style.width = "0vw";
                        comment_container.style.width = "0vh";
                        comment_text.style.width = "0vw";
                        comment_user.style.width = "0vw";
                        
                        comment_button.style.visibility = "hidden";
                        comment_user.value = "";
                        comment_text.value = "";

                    }, 20);
                });

                
            });
        });
        expand_img.addEventListener("mouseleave", function(){
            expand_img.style.width = "";
        });
        
    });
    sheet.addEventListener("mouseleave", function(){
        delete_img.style.visibility = "hidden";
        modify_img.style.visibility = " hidden" ;
        expand_img.style.visibility = "hidden";
        visited_img.style.visibility = "hidden";
        like_img.style.visibility = "hidden";
        dislike_img.style.visibility = "hidden";
        sheet.style.backgroundColor = "";
       
    })

    // ====================================================
    // ===============DELETE POST==========================
    // ====================================================
    delete_img.addEventListener("click", function(){
        
        delete_img.parentElement.remove();
       
    })
    
    // ====================================================
    // ===============Modify POST==========================
    // ====================================================
    modify_img.addEventListener("click", function(){
        // Create new elemnts to inject the at our post
        let modifyInput = document.createElement("input");
        let modifyBtn = document.createElement("button");
        modifyInput.value = para.textContent
        sheet.textContent = "";
        modifyBtn.textContent = "Valid";
        modifyInput.classList.add("modfiytext");
        sheet.appendChild(modifyInput);
        sheet.appendChild(modifyBtn);

        // the validation of my modification 
        modifyBtn.addEventListener("click", function(){
            sheet.textContent = "";
            para.textContent = modifyInput.value;
     
            sheet.appendChild(delete_img);
            sheet.appendChild(modify_img);
            sheet.appendChild(expand_img);
            sheet.appendChild(visited_img);
            sheet.appendChild(like_div);
            sheet.appendChild(dislike_div);
            sheet.appendChild(para);


        })

    })
}

// selection of comment area
const comment_user = document.querySelector(".comment_user");
const comment_text = document.querySelector(".comment_text");
const comment_button = document.querySelector(".comment_button");
const comment_area = document.querySelector(".comment_area");
// submit comment
comment_button.addEventListener("click", function(){
                    

    //comment section
    const username = document.createElement("a");
    username.classList.add("username")
    const new_comment = document.createElement("div");
    new_comment.classList.add("new_comment")
    username.textContent = comment_user.value;
    new_comment.textContent = comment_text.value;
    new_comment.appendChild(username);
    comment_area.appendChild(new_comment);
})






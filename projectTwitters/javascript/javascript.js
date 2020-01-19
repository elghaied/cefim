
// Part 1: {Get} tweets Informations [name,message,like,comments_count,id,ip,ts] 
let first = 0;
let update;

setInterval(function(){
    const request = new XMLHttpRequest();

    if(first == 0){

        request.open("GET", "http://touiteur.cefim-formation.org/list", true);
        first+=1;
        setTimeout(function(){
            document.getElementById("spinner").remove();
        },700);
        console.log("first");
    }
    else{
        
        request.open("GET", "http://touiteur.cefim-formation.org/list?ts="+update, true);
        console.log("second");
        
    }
    request.addEventListener("readystatechange", function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                let response = JSON.parse(request.responseText);
                let tweet = response.messages;
                update = response.ts;
                console.log(update);
                
                for (let i = 0; i < tweet.length; i++) {
                    creator(tweet[i].name, tweet[i].message, tweet[i].likes, tweet[i].comments_count,tweet[i].id,tweet[i].ts);
                    console.log(tweet[i].ts)

                }
            } else {
                alert("Une erreur est survenue");
            }
        }
    });

    request.send();
}, 10000);
// Part 2: {POST} submit the name and the message into the json data in the server

// ==========================================================================
// =========================================================================================================
let indata = document.getElementById("inData");
let inUser = document.getElementById("inUser");
const eGo = document.getElementById("go");
let results = document.getElementById("results");
let colors = ["orange","red","blue","purple","darkgreen","lemoni","blood","darkblue"];
let current_id;

 // loading icon 




eGo.addEventListener("click", function(){
    let name = encodeURIComponent(inUser.value);
    let message = encodeURIComponent(indata.value);
    const sender = new XMLHttpRequest();

    sender.addEventListener("readystatechange", function() {
        if (sender.readyState === XMLHttpRequest.DONE) {
            if (sender.status === 200) {
                console.log(sender.responseText);
            }
        }
    });
    // Content-Type:application/x-www-form-urlencoded
    sender.open("POST", "http://touiteur.cefim-formation.org/send", true);
    sender.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    sender.send("name="+name+"&message="+message);

})


// ==========================================================================
let hovered = document.querySelector("sheet");




function creator(name,message,like,comments_count,id,ip,ts){
    let sheet = document.createElement("div");
    let para = document.createElement("p");
    const name_container = document.createElement("a");
    name_container.classList.add("userId");
    name_container.textContent = name;
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

    // creating the comments image
    let comments_div = document.createElement("div");
    let comments_img = document.createElement("img");
    comments_div.classList.add("comments");
    comments_img.src = "img/comments.png";
    comments_div.textContent = "(" + comments_count + ")"; //                     the value of how many comments 
    comments_div.appendChild(comments_img);
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
    like_div.textContent = "(" + like + ")"; //                     should inject the value of how manylikes 
    like_div.appendChild(like_img);

    // creating dislike icon
    let dislike_div = document.createElement("div");
    let dislike_img = document.createElement("img");
    dislike_div.classList.add("dislike");
    dislike_img.src = "img/dislike.png";
    dislike_div.appendChild(dislike_img);

    // injecting information and the image insde the sheet div
    
    para.textContent = message;

    sheet.appendChild(para);
    sheet.appendChild(name_container);
    sheet.appendChild(delete_img);
    sheet.appendChild(modify_img);
    sheet.appendChild(expand_img);
    sheet.appendChild(visited_img);
    sheet.appendChild(like_div);
    sheet.appendChild(comments_div);
    sheet.appendChild(dislike_div);

    results.appendChild(sheet);


    // addLike
  
    
    // to show the delete icon Hover on
    // to show the delete icon Hover out
    sheet.addEventListener("mouseenter", function(event){
        console.log(event);
        console.log(id);

        delete_img.style.visibility = "visible";
        modify_img.style.visibility = "visible";
        expand_img.style.visibility = "visible";
        visited_img.style.visibility = "visible";
        like_div.style.visibility = "visible";
        comments_div.style.visibility = "visible";
        dislike_div.style.visibility = "visible";

        sheet.style.backgroundColor = "#51a8e66b";
        
        //to hover the expand icon to go biger and smaller 
        expand_img.addEventListener("mouseenter", function(){

            expand_img.style.width= "1.3rem";

            // to triger the click of the expand icon
          

        expand_img.addEventListener("mouseleave", function(){
            expand_img.style.width = "";
        });
        
    });
    sheet.addEventListener("mouseleave", function(){
        delete_img.style.visibility = "hidden";
        modify_img.style.visibility = " hidden" ;
        expand_img.style.visibility = "hidden";
        visited_img.style.visibility = "hidden";
        like_div.style.visibility = "hidden";
        dislike_div.style.visibility = "hidden";
        comments_div.style.visibility = "hidden";

        sheet.style.backgroundColor = "";
       
    })

    
});
// ===========================================================
// ====================Click expand icon=====================
// ===========================================================

expand_img.addEventListener("click", function(){
    current_id = id;
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
        post.style.width = "70vw";
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
            post.style.width = "0vw";
            comment_area.style.width = "0vw";
            comment_container.style.width = "0vh";
            comment_text.style.width = "0vw";
            comment_user.style.width = "0vw";
            
            comment_button.style.visibility = "hidden";
            comment_user.value = "";
            comment_text.value = "";
            comment_area.textContent = "";

        }, 20);
    });

    
});
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

// Part 3: {POST} Send value of likes to the server 
// ==========================================================================


    like_img.addEventListener("click", function(){
        
        const sendLike = new XMLHttpRequest();

        sendLike.addEventListener("readystatechange", function() {
            if (sendLike.readyState === XMLHttpRequest.DONE) {
                if (sendLike.status === 200) {
                    console.log(sendLike.responseText);
                }
            }
        });

        sendLike.open("PUT", "http://touiteur.cefim-formation.org/likes/send", true);
        sendLike.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        sendLike.send("message_id="+id);

    })
    dislike_img.addEventListener("click", function(){
        dislike_div.style.backgroundColor = "black";
        const sendDisLike = new XMLHttpRequest();

        sendDisLike.addEventListener("readystatechange", function() {
            if (sendDisLike.readyState === XMLHttpRequest.DONE) {
                if (sendDisLike.status === 200) {
                    console.log(sendDisLike.responseText);
                }
            }
        });

        sendDisLike.open("DELETE", "http://touiteur.cefim-formation.org/likes/remove", true);
        sendDisLike.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        sendDisLike.send("message_id="+id);

    })
// ===================================================================================

    // PART 4: {GET} comments inside the tweets 
    expand_img.addEventListener("click", function(){
    
    const insideComments = new XMLHttpRequest();

    insideComments.open("GET", "http://touiteur.cefim-formation.org/comments/list?message_id="+ id, true);
    console.log(id);
    insideComments.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    insideComments.addEventListener("readystatechange", function() {
        if (insideComments.readyState === XMLHttpRequest.DONE) {
            if (insideComments.status === 200) {
                let answer = JSON.parse(insideComments.responseText);
                let inside = answer.comments;
                console.log(inside)
                for (let i = 0; i < inside.length; i++) {                
                    insider(inside[i].comment,inside[i].name,inside[i].ts);
            }
                
            } else {
                alert("Une erreur est survenue");
            }
        }
    });

        console.log();
        insideComments.send();
    });


}

// selection of comment area
const comment_user = document.querySelector(".comment_user");
const comment_text = document.querySelector(".comment_text");
const comment_button = document.querySelector(".comment_button");
const comment_area = document.querySelector(".comment_area");
// submit comment

function insider(comment,name,ts){
     //comment section
     const username = document.createElement("a");
     username.classList.add("username")
     const new_comment = document.createElement("div");
     const time_comment = document.createElement("a");
     time_comment.classList.add("timer");
     time_comment.textContent = tsToDate(ts);
     new_comment.classList.add("new_comment")
     username.textContent = name;
     new_comment.textContent = comment;
     new_comment.appendChild(username);
     new_comment.appendChild(time_comment);
     comment_area.appendChild(new_comment);
     console.log("injected", comment_area);
}


// PART 5: {POST} SEND comments inside the tweets 

comment_button.addEventListener("click", function(){
    

    
    const sendComment = new XMLHttpRequest();

    sendComment.addEventListener("readystatechange", function() {
        if (sendComment.readyState === XMLHttpRequest.DONE) {
            if (sendComment.status === 200) {
                console.log(sendComment.responseText);
            }
        }
    });
    // Content-Type:application/x-www-form-urlencoded
    sendComment.open("POST", "http://touiteur.cefim-formation.org/comments/send", true);
    sendComment.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    sendComment.send("name="+comment_user.value+"&comment="+comment_text.value+"&message_id="+current_id);
    
})

function tsToDate(ts){
    return String(new Date(ts*1000)).split("G")[0]
}


// TRENDING 

const trend = document.getElementById("trends");

const trending = new XMLHttpRequest();

trending.open("GET", "http://touiteur.cefim-formation.org/trending", true);
trending.setRequestHeader("Content-Type", "application/json");
trending.addEventListener("readystatechange", function() {
    if (trending.readyState === XMLHttpRequest.DONE) {
        if (trending.status === 200) {
            let trendingResult = JSON.parse(trending.responseText);
            let trendingSorting = Object.entries(trendingResult).sort(function(a, b){return b[1] - a[1]});
            console.log("sorted",trendingSorting);
            
            let trendingName = Object.keys(trendingResult);
            let trendingValue = Object.values(trendingResult);
         
            for (let i = 0; i < 5; i++) {   
                trend.append(trendingSorting[i].join(" ("),")",document.createElement("br"))   
        }
            
        } else {
            alert("Une erreur est survenue");
        }
    }
});

    console.log();
    trending.send();


// influenceurs

let influenceurs = document.getElementById("influenceurs");
const influ = new XMLHttpRequest();

influ.open("GET", "http://touiteur.cefim-formation.org/influencers?count=5", true);
        console.log("second");
        
        influ.addEventListener("readystatechange", function() {
        if (influ.readyState === XMLHttpRequest.DONE) {
            if (influ.status === 200) {
                let infuResult = JSON.parse(influ.responseText);
                // let infu = infuResult.influenceurs;
                console.log("infuResult",infuResult);
                for (let i = 0; i < infuResult.length; i++) {
                    influenceurs.append(infuResult[i]);
                    console.log(infuResult[i])

                }
            } else {
                alert("Une erreur est survenue");
            }
        }
    });

    influ.send();


   
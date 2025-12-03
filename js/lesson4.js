(function () {
    let htmlEditor, jsEditor;

    const initialHTML = `<p id="demo"></p>`;
    const initialJS = `document.getElementById("demo").innerHTML = 10.50;`;

    function initEditors() {
        htmlEditor = CodeMirror.fromTextArea(document.getElementById('lesson4_literals_ex1_html_editor_area'), {
            lineNumbers: true,
            mode: "xml",
            theme: "dracula",
        });

        jsEditor = CodeMirror.fromTextArea(document.getElementById('lesson4_literals_ex1_js_editor_area'), {
            lineNumbers: true,
            mode: "javascript",
            theme: "dracula",
        });
    }

    function runCode() {
        console.log('Runcode');

        const htmlCode = htmlEditor.getValue();
        const jsCode = jsEditor.getValue();
        const outputFrame = document.getElementById('output_frame');

        const fullHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    
                </head>
                <body>
                    ${htmlCode}
                    <script>
                        // Bắt lỗi console.log trong iframe
                        console.log = function(...args) {
                            // Thay vì ghi vào console của trình duyệt chính, 
                            // bạn có thể ghi vào một khu vực hiển thị log nếu muốn
                            console.warn("Log từ iframe:", ...args);
                        };
                        
                        try {
                            // Thực thi JavaScript
                            ${jsCode}
                        } catch (e) {
                            console.error("Lỗi JS:", e);
                            alert("Lỗi JavaScript: " + e.message); // Hiển thị lỗi ngay lập tức
                        }
                    </script>
                </body>
                </html>
    `;
        outputFrame.srcdoc = fullHTML;
    }

    function setInitEditorValues() {
        htmlEditor.setValue(initialHTML);
        jsEditor.setValue(initialJS);
    }

    document.addEventListener('DOMContentLoaded', () => {
        initEditors();
        setInitEditorValues();
        runCode();
    });
})();
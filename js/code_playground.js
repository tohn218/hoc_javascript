let htmlEditor, cssEditor, jsEditor; // Khai báo biến toàn cục

// Dữ liệu mẫu ban đầu
const initialHTML = `<h1>Code Playground</h1>\n<div id="message">Loading...</div>`;
const initialCSS = `body { margin: 10px; }\nh1 { color: #5cb85c; }`;
const initialJS = `document.getElementById("message").textContent = "Syntax Highlighting Kích Hoạt!";`;

// 1. Hàm khởi tạo CodeMirror cho từng khu vực
function initEditors() {
    htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-editor-area'), {
        lineNumbers: true,
        mode: "xml", // Chế độ HTML
        theme: "dracula",
    });

    cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor-area'), {
        lineNumbers: true,
        mode: "css", // Chế độ CSS
        theme: "dracula",
    });

    jsEditor = CodeMirror.fromTextArea(document.getElementById('js-editor-area'), {
        lineNumbers: true,
        mode: "javascript", // Chế độ JavaScript
        theme: "dracula",
    });
}

function runCode() {
    // A. Thu thập Code từ 3 khu vực
    const htmlCode = htmlEditor.getValue();
    const cssCode = cssEditor.getValue();
    const jsCode = jsEditor.getValue();
    const outputFrame = document.getElementById('output-frame');

    // B. Kết hợp Code và Tạo Tài liệu HTML hoàn chỉnh
    const fullHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>${cssCode}</style>
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
    // C. Ghi Tài liệu đã tạo vào iframe để hiển thị
    outputFrame.srcdoc = fullHTML;
}

function setInitEditorValues() {
    htmlEditor.setValue(initialHTML);
    cssEditor.setValue(initialCSS);
    jsEditor.setValue(initialJS);
}

// Chạy code lần đầu khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    initEditors();
    setInitEditorValues();
    runCode(); // Chạy lần đầu với dữ liệu mẫu
});
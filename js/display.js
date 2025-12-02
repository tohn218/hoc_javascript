// ---------------------------------Bài 1-----------------------------------------
console.log("Hello World! Đây là code JS của tôi.");

// Thay đổi nội dung của thẻ có id="output" trong file HTML
document.getElementById('output').innerHTML = 'Xin chào từ JavaScript!';
// ---------------------------------Bài 3-----------------------------------------
// ex1
const newInnerHTML = `
    <strong>Hello</strong>
    <span>Text id: id_l3_ex1_1</span>
    <strong>tôi được hiển thị dưới innerHTML</strong>
`;
document.getElementById('id_l3_ex1_1').innerHTML = newInnerHTML;

const newInnerText = `
    Tất cả thẻ trong InnerText sẽ được hiển thị dưới dạng text:
    <strong>tôi được hiển thị dưới innerText</strong>
`;

document.getElementById('id_l3_ex1_2').innerText = newInnerText;
//ex2
document.getElementById('id_l3_ex2').append(5 + 6);
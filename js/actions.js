function setText() {
    document.getElementById('textChanged').innerHTML = 'Hello đây là text trong mã JavaScript khi bạn thực hiện tap vào "Thay đổi Text từ JS"'
}

function showWindowAlertMessage() {
    const message = 'Trong JavaScript, đối tượng window là đối tượng phạm vi toàn cục. Điều này có nghĩa là các biến, thuộc tính và phương thức theo mặc định thuộc về đối tượng window. Điều này cũng có nghĩa là việc chỉ định từ khóa window là tùy chọn';
    window.alert(message);
}

function showAlertMessage() {
    window.alert("alert()");
}

function showConsoleLog() {
    console.log("Bạn vừa thực hiện hành động show console log bằng console");
}
function handleAge() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Dữ liệu nhận vào không phải là một số.";
        document.getElementById("id_result_text_age").innerHTML = voteable;
    } else {
        voteable = (age < 18) ? "Bạn chưa đủ tuổi" : "Bạn đã đủ tuối";
        document.getElementById("id_result_text_age").innerHTML = voteable + " bỏ phiếu";
    }
}
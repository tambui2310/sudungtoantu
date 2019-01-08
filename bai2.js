function showMessage(){
   	var width;
		var height;
		var width = parseInt(prompt("Nhập vào chiều rộng: "));
		var height = parseInt(prompt("Nhập vào chiều cao: "));
		var area = width * height;
		document.write("Diện tích là: " + area);
}
var account = {
  ten: 'Nguyễn Văn Hùng',
  tenDangNhap: '0369469766',
  matkhau:'hung123'
};
var listAccount=[];
var tenAccount= account.ten;
listAccount.push(account);
var login=false;
function showBaoHanh(x) {
    var baoHanh= document.getElementById(x);
    baoHanh.style.opacity=1;
}
function hideBaoHanh(x) {
    var baoHanh= document.getElementById(x);
    baoHanh.style.opacity=0;
}
var img = document.getElementById('baner');
var listImg = document.getElementsByClassName('img-baner');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var index = 0;
console.dir(img);
updateImg(index);
function updateImg(index){
  for (let i = 0; i < listImg.length; i++) {
    listImg[i].style.display = "none";
  }
  listImg[index].style.display = "block";
  
}
prev.addEventListener('click',e=>{  
  if(index==0){
    index = listImg.length-1;
  }else{
    index--;
  }
  
  listImg[index].style.animation= "";
  setTimeout(() => {
    updateImg(index);
    listImg[index].style.animation= "slideLeft 1s ease-in-out forwards";
  }, 200);
  
})
next.addEventListener('click',e=>{  

  
  if(index==listImg.length-1){
    index = 0;
  }else{
    index++;
  }
  
  listImg[index].style.animation= "";
  setTimeout(() => {
    updateImg(index);
    listImg[index].style.animation= "slideRight 1s ease-in-out forwards";  
  }, 200);
})

setInterval(() => {
  if(index==listImg.length-1){
    index = 0;
  }else{
    index++;
  }
  
  listImg[index].style.animation= "";
  setTimeout(() => {
    updateImg(index);
    listImg[index].style.animation= "slideRight 1s ease-in-out forwards";  
  }, 200);
}, 10000);
// valdate  form
// đăng ký
var ten= document.getElementById("ten");
var sdt= document.getElementById("sdt");
var tendangnhapDK= document.getElementById("tendangnhapDK");
var matkhauDK= document.getElementById("matkhauDK");

function valformDK() {
  if (ten.value === "") {
    message("loi","Tên trống");
  }
  else if(sdt.value===""){
    message("loi","Số điện thoại trống");
    sdt.focus;
  }
  else if(tendangnhapDK.value===""){
    message("loi","Tên đăng nhập trống");
    tendangnhapDK.focus;
    return
  }
  else if(matkhauDK.value===""){
    message("loi","Mật khẩu trống");
    matkhauDK.focus;
  }
  var numericInput = sdt.value.replace(/\D/g, '');
  if (numericInput.length === 10 && !isNaN(numericInput)) {
    tenAccount=ten.value;
    listAccount.push({
      ten: ten.value,
      tenDangNhap: tendangnhapDK.value,
      matkhau:matkhauDK.value
  });
    loginFisnish();
    var closeBtn = document.querySelector('#dangky .btn-close');
    closeBtn.click();
    cleanform();
  } 
  else{
    message("loi","Số điện thoại không hợp lệ");
  }
}
function message(id,m) {
  document.getElementById(id).innerHTML= m;
}
function loginFisnish(){
  var loginDiv = document.querySelector('.login');
  loginDiv.style.textAlign= "left";
    while (loginDiv.firstChild) {
      loginDiv.removeChild(loginDiv.firstChild);
    }
    loginDiv.innerHTML = tenAccount;
    var newBTN = document.createElement('button');
    newBTN.textContent="Đăng xuất"
    var loginLink = document.createElement('a');
    loginLink.href = "";
    loginLink.setAttribute('data-bs-toggle', 'modal');
    loginLink.setAttribute('data-bs-target', '#login');
    loginLink.textContent = "Đăng Nhập";
    var signUpLink = document.createElement('a');
    signUpLink.href = "";
    signUpLink.setAttribute('data-bs-toggle', 'modal');
    signUpLink.setAttribute('data-bs-target', '#dangky');
    signUpLink.textContent = "Đăng ký";
    loginDiv.appendChild(newBTN);
    newBTN.addEventListener("click",function(){
      loginDiv.textContent="";
      loginDiv.appendChild(loginLink);
      loginDiv.appendChild(document.createTextNode(' | '));
      loginDiv.appendChild(signUpLink);
      newBTN.style.display="none";
    });
    
}
// đăng nhập 
var tenDangNhapDN= document.getElementById("tendangnhapDN");
var matkhauDN= document.getElementById("matkhauDN");
function valformDN() {
   if(tenDangNhapDN.value===""){
    message("loiDN","Tên đăng nhập trống");
    tenDangNhapDN.focus;
    return
  }
  else if(matkhauDN.value===""){
    message("loiDN","Mật khẩu trống");
    matkhauDN.focus;
  }
  else{
    var check = false;
    listAccount.forEach(function (account) {
      if (account.matkhau !== matkhauDN.value || account.tenDangNhap !== tenDangNhapDN.value) {
        check = true;
        tenAccount= account.ten;
        return;
      }
    });

    if (!check) {
      loginFisnish();
      var closeBtn = document.querySelector('#login .btn-close');
      closeBtn.click();
      cleanform();
    } else {
      message("loiDN","Tài khoản hoặc mật khẩu không đúng");
    }
  }
}
function cleanform() {
  ten.value="";
  sdt.value="";
  tendangnhapDK.value="";
  matkhauDK.value="";
  tenDangNhapDN.value="";
  matkhauDN.value="";
  document.getElementById("loi").value="";
  document.getElementById("loiDN").value="";
}
('#flashSale').modal('show');
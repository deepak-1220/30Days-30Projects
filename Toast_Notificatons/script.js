let tostBox = document.getElementById('toastBox');
let successMsg ='<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg ='<i class="fa-solid fa-circle-xmark"></i> Please fix the error';
let InvalidMsg ='<i class="fa-solid fa-circle-exclamation"></i>Invalid input check again';

function showToast(msg){
let toast = document.createElement('div');

toast.classList.add ('toast');

toast.innerHTML = msg;
tostBox.appendChild(toast)

if(msg.includes('error')){
    toast.classList.add('error');
}
    if(msg.includes('Invalid')){
        toast.classList.add('Invalid');
}

setTimeout(()=>{ 
    toast.remove();
},5000);
}
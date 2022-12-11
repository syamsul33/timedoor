
var data = [{
    nama: 'Shoes One',
    jenis: 'Sport Shoe',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id massa eget nisl rutrum ultricies et molestie tellus. Nam sed bibendum ligula. Nunc suscipit eros eget lorem fringilla, mattis sodales sapien interdum. Pellentesque ac condimentum ipsum, sed cursus dolor. Aliquam non facilisis sapien. Donec eleifend dui enim. Vivamus eu elit eget tellus aliquet molestie ac ut risus. Sed odio dui, aliquet a leo dictum, porta scelerisque augue. Nullam hendrerit enim lorem, eu porta sapien auctor tempus.',
    price:200000
},{
    nama: 'Shoes Two',
    jenis: 'Sport Shoe',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id massa eget nisl rutrum ultricies et molestie tellus. Nam sed bibendum ligula. Nunc suscipit eros eget lorem fringilla, mattis sodales sapien interdum. Pellentesque ac condimentum ipsum, sed cursus dolor. Aliquam non facilisis sapien. Donec eleifend dui enim. Vivamus eu elit eget tellus aliquet molestie ac ut risus. Sed odio dui, aliquet a leo dictum, porta scelerisque augue. Nullam hendrerit enim lorem, eu porta sapien auctor tempus.',
    price:280000
},{
    nama: 'Shoes Three',
    jenis: 'Sport Shoe',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id massa eget nisl rutrum ultricies et molestie tellus. Nam sed bibendum ligula. Nunc suscipit eros eget lorem fringilla, mattis sodales sapien interdum. Pellentesque ac condimentum ipsum, sed cursus dolor. Aliquam non facilisis sapien. Donec eleifend dui enim. Vivamus eu elit eget tellus aliquet molestie ac ut risus. Sed odio dui, aliquet a leo dictum, porta scelerisque augue. Nullam hendrerit enim lorem, eu porta sapien auctor tempus.',
    price:300000
}
]
var detailsB = document.getElementsByClassName("detailsB");
var modal1 = document.getElementById("modal-box1");
var detailBox = "";
var tag="";
var text="";
var input="";
var bayar="";
//LOOP
for (const keyButton of detailsB) {
    keyButton.onclick = function(){
        modal1.style.display = "block";
        if(detailBox===null||detailBox===""){
            tag= document.createElement("div");
            tag.className="details-box";
            modal1.append(tag);    
        }else {
            detailBox.remove();
            tag= document.createElement("div");
            tag.className="details-box";
            modal1.append(tag);
        }
        detailBox = document.getElementsByClassName("details-box")[0];
        tag= document.createElement("h2");
        text= document.createTextNode(data[keyButton.value].nama);
        tag.appendChild(text);
        detailBox.append(tag);
        tag= document.createElement("h3");
        text= document.createTextNode(data[keyButton.value].jenis);
        tag.appendChild(text);
        detailBox.append(tag);
        tag= document.createElement("p");
        text= document.createTextNode(data[keyButton.value].deskripsi);
        tag.appendChild(text);
        detailBox.append(tag);
        tag= document.createElement("h2");
        tag.className="price";
        text= document.createTextNode(data[keyButton.value].price);
        tag.appendChild(text);
        detailBox.append(tag);
        tag= document.createElement("h2");
        tag.className="price-slash";
        detailBox.append(tag);
        tag= document.createElement("div");
        text = document.createElement("input");
        text.id = "inputB";
        text.type= "number";
        text.min="1";
        tag.append(text);
        tag.style.textAlign="center"; 
        detailBox.append(tag);
        tag= document.createElement("button");
        tag.innerHTML = "Bayar";
        tag.className = "bayarB";
        detailBox.append(tag);
        if(modal1.style.display ==="block"){
            input = document.getElementById("inputB");
            input.addEventListener('input',update1,false);
            input.params = keyButton.value;
            bayar = document.getElementsByClassName("bayarB")[0];
            bayar.onclick = function(){
                if(input.value>0){
                    alert("bayar Selesai");
                    modal1.style.display = "none";
                }else {
                    alert("Isi Jumlah beli");
                }
                detailBox.remove();
            }
        }
    }
}

function update1(e){
    var jumlah = e.target.value;
    tag = document.querySelector(".price");
    text = document.querySelector(".price-slash");
    var price = data[e.target.params].price;
    tag.innerHTML = price*jumlah;
    if(jumlah>2){
        tag.style.textDecoration = "line-through";
        text.innerHTML = (price*jumlah)*0.85;
        text.style.color = "red";
    }else{
        tag.style.textDecoration = "none";
        text.innerHTML = "";
        text.style.color = "red";
    }
}
var close = document.getElementsByClassName("close-box1")[0];
close.onclick = function(){
    modal1.style.display = "none";
    detailBox.remove();
}
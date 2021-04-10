$(document).ready(function() {
  var listItem = [
    { id: 1, name: "Ngoc Trinh", price: 5, src: "images/product01.jpg" },
    { id: 2, name: "Dong Nhi", price: 10, src: "images/product02.jpg" },
    { id: 3, name: "A Mee", price: 15, src: "images/product03.jpg" },
    { id: 4, name: "Midu", price: 3, src: "images/product04.jpg" },
    { id: 5, name: "Sam", price: 6, src: "images/product05.jpg" },
    { id: 6, name: "Luu Diep Phi", price: 1, src: "images/product06.jpg" },
    { id: 7, name: "Suni Ha Linh", price: 100, src: "images/product07.jpg" },
  ];

  function addElement() {
    var html = "";
    var image = ""
    listItem.forEach(function(item, index) {
      html+= `
        <div class="list-item" id="${index}">
          <div>
            <div class="list-item__name">${item.name}</div>
            <p class="list-item__price">${item.price}$</p>
          </div>
          <div>
            <button class="secondary remove">-</button>
            <input type="number" value="1">
            <button class="secondary add">+</button>
          </div>
        </div>
      `
  
      image+= `
        <img src="./images/product0${index+1}.jpg" alt="">
      `
    });


    $(".container__price--list").html(html);
    $(".container__products--images").html(image);
  }
  addElement();

  $(".remove").click(function() {
    var getPrice = parseInt($(this).next().val());
    getPrice-=1;

    if(getPrice < 1) {
      alert("Minimum = 1");
      $(this).next().val(1);
      return;
    }

    $(this).next().val(getPrice)

  });

  $(".add").click(function() {
    var getPrice = parseInt($(this).prev().val());
    getPrice+=1;
    var getParent = $(this).parent().parent().attr("id");
    getParent = parseInt(getParent);
    var name = $(this).parent().parent().find(".list-item__name").html();
    var price = $(this).parent().parent().find(".list-item__price").html();
    price = price.substring(0, price.length-1);
    
    var image = ""

    if(getPrice > 10) {
      alert("Maximum 10");
      $(this).prev().val(10);
      return;
    }

    $(this).prev().val(getPrice);
    
    listItem = [...listItem, { id: listItem.length + 1, name: name, price: parseInt(price), src: `images/product0${getParent+1}.jpg` }];
    console.log(listItem);
    listItem.forEach(function(item) {
      image+= `
        <img src="./${item.src}" alt="">
      `
    });
    $(".container__products--images").html(image);
  })
})
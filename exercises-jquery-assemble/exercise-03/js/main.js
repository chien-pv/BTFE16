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

  function totalPrice() {
    var totalPrice = listItem.reduce(function(a, b) {
      return a + b.price;
    }, 0);

    $(".list-item__count").text(`${totalPrice}$`);
    $(".container__price--total").text(`${totalPrice}$`);
  }

  totalPrice();

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
            <input type="number" value="1" disabled>
            <button class="secondary add">+</button>
          </div>
        </div>
      `
  
      image+= `
        <div>
          <img src="./images/product0${index+1}.jpg" alt="">
        </div>
      `
    });


    $(".container__price--list").html(html);
    $(".container__products--images").html(image);
  }
  addElement();

  function remove() {
    $(".remove").click(function() {
      var getPrice = parseInt($(this).next().val());
      var name = $(this).parent().parent().find(".list-item__name").html();
      getPrice-=1;
      var image = "";
  
      if(getPrice < 0) {
        alert("Minimum = 0");
        $(this).next().val(0);
        return;
      }
  
  
      var filterName = listItem.map(function(item, index) {
        if(item.name === name) {
          return index;
        } else {
          return undefined
        }
      }).filter(function(x) {
        return x;
      });
      listItem.splice(filterName[filterName.length-1], 1);
      listItem.forEach(function(item) {
        image+= `
        <div>
          <img src="./${item.src}" alt="">
        </div>
        `
      });
      $(".container__products--images").html(image);
  
      $(this).next().val(getPrice);
      totalPrice();
    });
  }
  remove();

  function add() {
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
      listItem.forEach(function(item) {
        image+= `
          <div>
            <img src="./${item.src}" alt="">
          </div>
        `
      });
      $(".container__products--images").html(image);
      totalPrice();
    });
  }
  add();

  $(".primary").click(function() {
    listItem = [
      { id: 1, name: "Ngoc Trinh", price: 5, src: "images/product01.jpg" },
      { id: 2, name: "Dong Nhi", price: 10, src: "images/product02.jpg" },
      { id: 3, name: "A Mee", price: 15, src: "images/product03.jpg" },
      { id: 4, name: "Midu", price: 3, src: "images/product04.jpg" },
      { id: 5, name: "Sam", price: 6, src: "images/product05.jpg" },
      { id: 6, name: "Luu Diep Phi", price: 1, src: "images/product06.jpg" },
      { id: 7, name: "Suni Ha Linh", price: 100, src: "images/product07.jpg" },
    ];
    addElement();
    add();
    remove();
    totalPrice();
  })
})
$(document).ready(function() {
  const URL_API = "https://607d95f2184368001769e13b.mockapi.io/hotgirls";

  function render() {
    $.ajax({
      method: "GET",
      url: URL_API,
      success: function(data) {
        let html = "";
        let img = "";

        data.forEach(function(item, index) {
          html+= `
            <div class="list-item" id="${index}">
              <div>
                <div class="list-item__name">${item.name}</div>
                <p class="list-item__price">${item.price}$</p>
              </div>
              <div>
                <button class="secondary remove">-</button>
                <input type="number" value="${item.quantity}" disabled>
                <button class="secondary add">+</button>
              </div>
            </div>
          `;

          for(let i = 0; i < parseInt(item.quantity); i++) {
            img += `
              <div>
                <img src="${item.image}" alt="">
              </div>
            `
          };
        });

        let totalPrice = data.reduce(function(a, b) {
          return a + b.price * b.quantity;
        }, 0);

        $(".container__price--list").html(html);
        $(".container__products--images").html(img);
        $(".container__price--total").text(totalPrice + "$");
        $(".list-item__count").text(totalPrice + "$");
      }
    });
  };

  function add() {
    $(document).on("click", ".add", function() {
      let count = parseInt($(this).prev().val());
      let getId = parseInt($(this).parent().parent().attr("id"));
      console.log(count++);

      if(count > 9) {
        alert("Maximum = 10");
        return;
      }

      $(this).prev().val();

      $.ajax({
        method: "PUT",
        url: `${URL_API}/${getId+1}`,
        data: { quantity: parseInt(count) },
        success: function(res) {
          render();
        }
      })
    })

    $(document).on("click", ".remove", function() {
      let currentValue = parseInt($(this).next().val());
      let getId = parseInt($(this).parent().parent().attr("id"));
      currentValue -= 1;

      if(currentValue < 0) {
        alert("Minimum = 0");
        return;
      }

      $(this).next().val(currentValue);

      $.ajax({
        method: "PUT",
        url: `${URL_API}/${getId+1}`,
        data: { quantity: parseInt(currentValue) },
        success: function(res) {
          render();
        }
      })
    })
  }

  function main() {
    render();
    add();
  };

   main();
})
function makeMovi(name) {
    return {
      name,
      list: [],
      makeMovies: makeMovies,
      displayItems,
    };
  }
  /*id generator*/
  function generateID() {
    var count = 0;
    return function () {
      return count++;
    };
  }
  
  var id = generateID();
  
  /** factory function */
  function makeMovies(name, category, images, Description) {
    var data = {
      name,
      category,
      images,
      Description,
      date: new Date().toLocaleString(),
      id: id(),
    };
    this.list.push(data);
    return data;
  }
  /**initiating the class */
  var movis = makeMovi("AMR AHMED");
  
  /**creating data using our factory function */
  
  movis.makeMovies(
    "Jakob the Liar (1999)",
    "action",
    [
      "http://whatismymovie.com/t/images/2290.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4JWI643wYzrZjEGO-Ic7anGvM78CCBOihw&usqp=CAU",
    ],
    
  );
  
  movis.makeMovies("Chain reaction ", "action", [
    "http://whatismymovie.com/t/images/12123.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4JWI643wYzrZjEGO-Ic7anGvM78CCBOihw&usqp=CAU",
  ]);
  
  movis.makeMovies("Die Hard", "classic", [
    "https://whatismymovie.com/t/images/1572.jpg",
    "hrd.PNG", 
  ]);
  movis.makeMovies("New york", "romantic", [
    " https://whatismymovie.com/t/images/19616.jpg",
   "NewY.PNG",
  ]);
  movis.makeMovies("Home Alone 2", "Comedy", [
    " https://whatismymovie.com/t/images/772.jpg",
    "alone.PNG",
  ]);
  movis.makeMovies("New Nightmare", "classic", [
    "https://whatismymovie.com/t/images/11596.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("Bill Cunningham ", "classic", [
    " https://whatismymovie.com/t/images/55244.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("Annie Hall", "classic", [
    "https://whatismymovie.com/t/images/703.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("The World's Fastest Indian ", "classic", [
    "https://whatismymovie.com/t/images/9912.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("13B", "classic", [
    "https://whatismymovie.com/t/images/19950.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("Happy New Year!", "comedy", [
    "https://whatismymovie.com/t/images/56549.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  movis.makeMovies("New Hampshire", "rementic", [
    "https://whatismymovie.com/t/images/11308.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RRrQOuMUiDp1hU4847lYPwiP9_lnZcVhwg&usqp=CAU",
  ]);
  
  /** displaying one item */
  function display(item) {
    var id = item.id;
    $("#shop").append(`
    <div class = item id = item${id}>
      <h2 class = title id = title${id}>${item.name}</h2>
      <img class = image id = ${id} src=${item.images[0]} alt = ${item.images[1]} />
      <p class = cat id = cat${id}>${item.category}</p>
  
    </div>
    `);
  }
  
  /** displaying all of the items through iteration */
  function displayItems() {
    $("#shop").empty();
    for (var i = 0; i < this.list.length; i++) {
      display(this.list[i]);
    }
  }
  
  movis.displayItems();
  
  var img = document.querySelector(".popupimg");
  var close = document.querySelector(".close");
  var popup = document.querySelector(".popup");
  
  /** togglement de l'image */
  // $("#image" + "v1.id");
  
  $(".image").click(function () {
    var id = this.id;
    console.log(id);
    var src = this.src;
    var alt = this.alt;
    img.src = alt;
    img.alt = src;
    $(".popup").addClass("popup-display");
    $('#shop').hide()
  });
  
  $("select").on("change", function () {
    var value = $(this).val();
    console.log(value);
    var filtered = movis.list.filter(function (item) {
      return item.category === value;
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
      display(item);
    });
  });
  
  $("#cts").on("click", function () {
    var value = $("#search").val();
    console.log(value);
    var filtered = movis.list.filter(function (item) {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
      display(item);
    });
  });
  close.onclick = function () {
    console.log("clicked");
    popup.classList.remove("popup-display");
    $('#shop').show()
  };
  
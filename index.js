$(document).ready(function(){

    // banner owl carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    });

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // isotope filter
    var $grid = $(".grid").isotope({
        itemSelector : '.grid-item',
        layoutMode : 'fitRows'
    });

    // filter items on button click
    $(".button-group").on("click", "button", function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue});
    })


    // new phones owl carousel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

    // blogs owl carousel
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    })


    // product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

       // click on qty down button
       $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });


});
//search
const people = [
  { name: 'iphone'},
  { name: 'samsung'},
  { name: 'redmi'},
  { name: 'dillon'},
  { name: 'evan'},
  { name: 'frank'},
  { name: 'georgette'},
]
whateverElement.addEventListener("event type"), () => {
}
const searchInput = document.querySelector('.input')
searchInput.addEventListener("input"), (e) => {
  // inside, we will need to achieve a few things:
  // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
  let value = e.target.value

  // 2. check: if input exists and if input is larger than 0
  if (value && value.trim().length > 0){
      // 3. redefine 'value' to exclude white space and change input to all lowercase
       value = value.trim().toLowerCase()
      // 4. return the results only if the value of the search is included in the person's name
      // we need to write code (a function for filtering through our data to include the search input value)
  } else {
      // 5. return nothing
      // input is invalid -- show an error message or show no results

  }

}
const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
    // 1. write a function that removes any previous results from the page
})
// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){

  for (const person of results){
      // creating a li element for each result item
      const resultItem = document.createElement('li')

      // adding a class to each item of the results
      resultItem.classList.add('result-item')

      // grabbing the name of the current point of the loop and adding the name as the list item's text
      const text = document.createTextNode(person.name)

      // appending the text to the result item
      resultItem.appendChild(text)

      // appending the result item to the list
      list.appendChild(resultItem)
  }
}
searchInput.addEventListener("input"), (e) => {
  let value = e.target.value
}
  if (value && value.trim().length > 0){
       value = value.trim().toLowerCase()
  }
      //returning only the results of setList if the value of the search is included in the person's name
      setList(people.filter(person => {
          return person.name.includes(value)
      }))
      function clearList(){
        // looping through each child of the search results list and remove each child
        while (list.firstChild){
            list.removeChild(list.firstChild)
        }
    }
    searchInput.addEventListener("input"), (e) => {
      // inside, we will need to achieve a few things:
      // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
      let value = e.target.value
  
      // 2. check: if input exists and if input is larger than 0
      if (value && value.trim().length > 0){
          // 3. redefine 'value' to exclude white space and change input to all lowercase
           value = value.trim().toLowerCase()
          // 4. return the results only if the value of the search is included in the person's name
          // we need to write code (a function for filtering through our data to include the search input value)
      } else {
          // 5. return nothing
          clearList()
  
      }
  
  }
  clearButton.addEventListener("click", () => {
    clearList()
})
function noResults(){
  // create an element for the error; a list item ("li")
  const error = document.createElement('li')
  // adding a class name of "error-message" to our error element
  error.classList.add('error-message')

  // creating text for our element
  const text = document.createTextNode('No results found. Sorry!')
  // appending the text to our element
  error.appendChild(text)
  // appending the error to our list element
  list.appendChild(error)
}
function setList(results){
  clearList()
  for (const person of results){
      const resultItem = document.createElement('li')
      resultItem.classList.add('result-item')
      const text = document.createTextNode(person.name)
      resultItem.appendChild(text)
      list.appendChild(resultItem)
  }

  if (results.length === 0 ){
      noResults()
  }
}
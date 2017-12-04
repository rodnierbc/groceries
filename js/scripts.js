function capitalize(string){
  var char = string.charAt(0).toUpperCase();
  var subString = string.slice(1).toLowerCase();
  return char.concat(subString);
}

$(function() {
  var groceryList = [];
  var inputs = ['#firstItem', '#secondItem', '#thirdItem', '#fourthItem'];
  var form = document.getElementById('groceryForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.classList.add('hidden');
    inputs.forEach(function(inputItem) {
      groceryList.push(capitalize($(inputItem).val()));
    });
    groceryList.sort();
    $('#groceryCard').removeClass('hidden');
    groceryList.forEach(function(listItem) {
      $('#cardList').append('<li class="list-group-item">' + listItem + '</li>');
    });
  });
});

// $(function() {
//   var items = [];
//
//   var itemsSorted = [];
//   $('#groceryList').submit(function(event) {
//     var groceryList = document.getElementById('groceryList').getElementsByTagName('input');
//     var groceryList = $( ":input" ).val();
//     event.preventDefault();
//     $('#groceryList').toggle();
//     var length = groceryList.length;
//     for (i = 0; i <= length -1; i++) {
//       items[i] = groceryList[i];
//     }
//     groceryList.forEach(function(item){
//       items.push(item);
//     });
//     itemsUpperCase = items.map(function(item){
//       return capitalize(item);
//     });
//     itemsSorted = itemsUpperCase.sort();
//      alert(itemsSorted);
//
//   });
//   itemsSorted.forEach(function(item) {
//   $('#iceCreamDisplay').append('<li>' + flavor + '</li>');
//   });
// });

(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
  }
  function sleep() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }
  function play() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.play();
    pet.update();
  }
  function eat() {
    var name = $(this).closest('.pet').data('name');
    var pet = Pet.find(name);
    pet.eat();
    pet.update();
  }
  function add() {
    var gender = $('#gender').val();
    var age = $('#age').val() || undefined;
    var name = $('#name').val() || undefined;
    var speciesImg = $('#species').val();
    var species = $('#species :selected').text();
    var pet = new Pet(species, speciesImg, gender, age, name);
    pets.push(pet);
    pet.render();
  }
})();

//# sourceMappingURL=main.map

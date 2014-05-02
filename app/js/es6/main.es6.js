/* global Pet, pets */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
    $('#pets').on('click', '.eat', eat);
    $('#pets').on('click', '.sleep', sleep);
    $('#pets').on('click', '.play', play);
  }

  function sleep(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.sleep();
    pet.update();
  }

  function play(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.play();
    pet.update();
  }

  function eat(){
    let name = $(this).closest('.pet').data('name');
    let pet = Pet.find(name);
    pet.eat();
    pet.update();
  }

  function add(){
    let gender = $('#gender').val();
    let age = $('#age').val() || undefined;
    let name = $('#name').val() || undefined;
    let speciesImg = $('#species').val();
    let species = $('#species :selected').text();

    let pet = new Pet(species, speciesImg, gender, age, name);
    pets.push(pet);
    pet.render();
  }

})();

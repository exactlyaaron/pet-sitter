var Pet = function Pet(species, speciesImg, gender) {
  "use strict";
  var age = arguments[3] !== (void 0) ? arguments[3] : Math.floor(Math.random() * 100);
  var name = arguments[4] !== (void 0) ? arguments[4] : 'PET-' + Math.floor(Math.random() * 1000);
  this.name = name;
  this.species = species;
  this.speciesImg = ("../media/" + speciesImg);
  this.gender = gender;
  this.age = age * 1;
  this.health = _.random(10, 100);
  this.full = _.random(5, 50);
  this.mood = _.random(1, 10);
};
($traceurRuntime.createClass)(Pet, {
  eat: function() {
    "use strict";
    this.full += _.random(1, 3);
    if (this.full >= 50) {
      this.full = 50;
    }
  },
  sleep: function() {
    "use strict";
    this.health += _.random(1, 5);
    if (this.health >= 100) {
      this.health = 100;
    }
  },
  play: function() {
    "use strict";
    this.mood += _.random(0, 1);
    this.full -= _.random(1, 3);
    this.health -= _.random(1, 3);
    if (this.mood >= 10) {
      this.mood = 10;
    }
  },
  update: function() {
    "use strict";
    $((".pet[data-name=" + this.name + "] .nutrition-bar")).css('width', (this.full * 2 + "%"));
    $((".pet[data-name=" + this.name + "] .health-bar")).css('width', (this.health + "%"));
    $((".pet[data-name=" + this.name + "] .happiness-bar")).css('width', (this.mood * 10 + "%"));
    console.log(this.mood);
    if (this.health <= 0 || this.full <= 0) {
      $((".pet[data-name=" + this.name + "] .nutrition-bar")).css('width', '0');
      $((".pet[data-name=" + this.name + "] .health-bar")).css('width', '0');
      $((".pet[data-name=" + this.name + "] .happiness-bar")).css('width', '0');
      $((".pet[data-name=" + this.name + "] .health-wrapper")).addClass('bar-dead');
      $((".pet[data-name=" + this.name + "] .image")).addClass('image-dead');
      $((".pet[data-name=" + this.name + "]")).addClass('visually-hidden').one('transitionend', function(e) {
        $(this).addClass('hidden');
      });
    }
  },
  render: function() {
    "use strict";
    $('#pets').append(("<div class=pet data-name=" + this.name + ">\n                         <div class=image style='background-image:url(" + this.speciesImg + ")'></div>\n                         <div class=stats>\n                           <div>Name: <span>" + this.name + "</span></div>\n                           <div><span>" + this.species + "</span>  |  <span>" + this.age + " years old</span></div>\n\n                           <div>Gender: <span>" + this.gender + "</span></div>\n                           <hr />\n                           <div class=health-wrapper>\n                             <div class=health-bar style='width:" + this.health + "%'><p>HEALTH</p></div>\n                           </div>\n                           <div class=health-wrapper>\n                             <div class=nutrition-bar style='width:" + this.full * 2 + "%'><p>NUTRITION</p></div>\n                           </div>\n                           <div class=health-wrapper>\n                             <div class=happiness-bar style='width:" + this.mood * 10 + "%'><p>HAPPINESS</p></div>\n                           </div>\n                           <hr />\n                           <button class=eat>EAT</button>\n                           <button class=sleep>SLEEP</button>\n                           <button class=play>PLAY</button>\n                         </div>\n                       </div>"));
  }
}, {find: function(name) {
    "use strict";
    return _(pets).find((function(p) {
      return p.name === name;
    }));
  }});

//# sourceMappingURL=pet.map

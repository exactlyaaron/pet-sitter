/* exported Pet */
/* global _, pets */
/* jshint unused:false */
class Pet{
  constructor(species, speciesImg, gender, age=Math.floor(Math.random()*100), name='PET-'+Math.floor(Math.random()*1000)){
    this.name = name;
    this.species = species;
    this.speciesImg = `./media/${speciesImg}`;
    this.gender = gender;
    this.age = age * 1;

    this.health = _.random(10,100);
    this.full = _.random(5,50);
    this.mood = _.random(1,10);
  }

  static find(name){
    return _(pets).find(p=>p.name === name);
  }

  eat(){
    this.full += _.random(1,3);
    if(this.full >= 50){
      this.full = 50;
    }
  }

  sleep(){
    this.health += _.random(1,5);
    if(this.health >= 100){
      this.health = 100;
    }
  }

  play(){
    this.mood += _.random(0,1);
    this.full -= _.random(1,3);
    this.health -= _.random(1,3);
    if(this.mood >= 10){
      this.mood = 10;
    }

  }

  update(){
    $(`.pet[data-name=${this.name}] .nutrition-bar`).css('width', `${this.full*2}%`);
    $(`.pet[data-name=${this.name}] .health-bar`).css('width', `${this.health}%`);
    $(`.pet[data-name=${this.name}] .happiness-bar`).css('width', `${this.mood*10}%`);

    console.log(this.mood);

    if(this.health <= 0 || this.full <= 0){
      $(`.pet[data-name=${this.name}] .nutrition-bar`).css('width', '0');
      $(`.pet[data-name=${this.name}] .health-bar`).css('width', '0');
      $(`.pet[data-name=${this.name}] .happiness-bar`).css('width', '0');
      $(`.pet[data-name=${this.name}] .health-wrapper`).addClass('bar-dead');
      $(`.pet[data-name=${this.name}] .image`).addClass('image-dead');
      $(`.pet[data-name=${this.name}]`).addClass('visually-hidden').one('transitionend', function(e){$(this).addClass('hidden');});
    }
  }

  render(){
    $('#pets').append(`<div class=pet data-name=${this.name}>
                         <div class=image style='background-image:url(${this.speciesImg})'></div>
                         <div class=stats>
                           <div>Name: <span>${this.name}</span></div>
                           <div><span>${this.species}</span>  |  <span>${this.age} years old</span></div>

                           <div>Gender: <span>${this.gender}</span></div>
                           <hr />
                           <div class=health-wrapper>
                             <div class=health-bar style='width:${this.health}%'><p>HEALTH</p></div>
                           </div>
                           <div class=health-wrapper>
                             <div class=nutrition-bar style='width:${this.full*2}%'><p>NUTRITION</p></div>
                           </div>
                           <div class=health-wrapper>
                             <div class=happiness-bar style='width:${this.mood*10}%'><p>HAPPINESS</p></div>
                           </div>
                           <hr />
                           <button class=eat>EAT</button>
                           <button class=sleep>SLEEP</button>
                           <button class=play>PLAY</button>
                         </div>
                       </div>`);
  }
}

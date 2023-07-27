import {
  content
} from "./content.js";

(() => {
  class demoPageGen {
    constructor(config) {
      //assigns values
      Object.assign(this, {
        dummy_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.',
        //searches the document and returns the first element to match 'main section', etc.
        first_section: document.querySelector('main section'),
        main_element: document.querySelector('main'),
        //checks if the local storage is null, if not, assigns notes to an array
        header_object: document.querySelector('header'),
        footer_object: document.querySelector('footer'),
        notes_object: localStorage.getItem('notes') != null ? JSON.parse(localStorage.getItem('notes')) : [],
      }, config);
      //initializes note ID value
      this.note_id = 0;
      if (this.main_element != null) {
        //inserts nav inside the element, after its "last child"
        this.main_element.insertAdjacentHTML('beforeend', content.nav);
      }
      if (this.header_object != null) {
        this.header_object.insertAdjacentHTML('beforeend', content.header);
      }
      if (this.footer_object != null) {
        this.footer_object.insertAdjacentHTML('beforeend', content.footer);
      }
      //console.warn("content", content)
    }

    init() {
      //if something was assigned to the first section and we are not on the blog page
      //a new section element is created
      //only once?
      if (this.first_section != null && !/swift_blog/.test(document.location.pathname)) {
        const new_section_element = document.createElement('section');
        new_section_element.classList.add('deck');
        new_section_element.innerText = this.dummy_text; //lorem ipsum added on each page
        this.first_section.insertAdjacentElement('beforebegin', new_section_element); //inserted before the first section
      }
      //calls rest of methods
      this.update_nav();
      this.header();
      this.footer();
      this.event_listeners();
      this.load_notes();
    }

    //> is a direct descendent
    update_nav() { //ran from init
      this.nav_items = document.querySelectorAll('nav > a'); //array of elements that match, array of all items in nav
      this.nav_object = document.querySelector('nav'); //items are all of anchor tag links inside nav tag, object is whole nav area tag itself
      if (this.nav_object != null) {
        this.nav_object.addEventListener('click', (e) => {
          switch (true) {
            //if there is a click and it is on pictures, call the api
            case e.target.classList.contains('pictures'):
              e.preventDefault(); //prevents if there was a link of pictures 
              this.call_ts_api();
              break;
            default:
              break;
          }
        });
      }
      //if there are nav items, for loop through them all, add the element to the array of items
      if (this.nav_items.length > 0) {
        for (let index = 0; index < this.nav_items.length; index++) {
          const element = this.nav_items[index];
          element.classList.add(`special_nav_${index}`); //adding class to each individual item 
        }
      }
    }

    header(){
      this.header_items = document.querySelectorAll('header > img');
      this.header_object = document.querySelector('header');
      if (this.header_items.length > 0){
        for (let index = 0; index < this.header_items.length; index++){
          const element = this.header_items[index];
          element.classList.add(`special_header_${index}`);
        }
      }
    }

    footer(){
      this.footer_items = document.querySelectorAll('footer > img');
      this.footer_object = document.querySelector('footer');
      if (this.footer_items.length > 0){
        for (let index = 0; index < this.footer_items.length; index++){
          const element = this.footer_items[index];
          element.classList.add(`special_footer_${index}`);
        }
      }
    }

    event_listeners() { //ran from init
      //blog button is set to the add note button
      this.blogB = document.querySelector('.add_note_button'); //only getting one, from html
      //if not null, the button listens for the click
      //if clicked, a form is inserted
      if (this.blogB != null) {
        this.blogB.addEventListener("click", () => { //if not null, attaching a listener, can be different kinds of listeners
          this.insert_form(); //where the insert form method is called
        });
      }
    }

    load_notes() { //ran from init
      //console.warn(this.notes_object);
      //inserts a form for each note already in the storage
      //saved into storage in insert_form
      this.notes_object.forEach(element => {
        this.insert_form(element);
      });
    }

    //runs everytime the add button is clicked
    insert_form({
      title,
      note
    } = {}) {
      const new_note_container = document.createElement("div"); //whole note section
      const new_title = document.createElement("input"); //first box
      const new_note = document.createElement("textarea"); //second box
      const new_save_button = document.createElement("div"); //save button
      const new_delete_button = document.createElement("div"); //delete button
      new_delete_button.classList.add("delete_button"); //explain classList?
      new_save_button.classList.add("save_button");
      new_save_button.dataset.id = this.note_id; //gives each note an ID
      new_save_button.innerText = "save";
      new_title.type = "text";
      new_title.dataset.id = this.note_id;
      new_note.dataset.id = this.note_id;
      new_delete_button.dataset.id = this.note_id;
      //buttons build bottom up, inserted onto page
      new_note_container.insertAdjacentElement("afterbegin", new_save_button);
      new_note_container.insertAdjacentElement("afterbegin", new_note);
      new_note_container.insertAdjacentElement("afterbegin", new_title);
      new_note_container.insertAdjacentElement("afterbegin", new_delete_button);
      this.blogB.insertAdjacentElement("beforebegin", new_note_container); //where it is put on the page
      new_note_container.classList.add("note_container");

      new_save_button.addEventListener("click", (e) => {
        //if save button is clicked, add title and note value is added to that ID number
        const _id = e.target.dataset.id;
        this.notes_object[_id] = {
          title: new_title.value,
          note: new_note.value
        };
        //console.warn(">> notes_object: ", this.notes_object);
        //that notes ID object is added to the localStorage
        //converted to JSON string file
        //notes is name of object it is going into
        localStorage.setItem('notes', JSON.stringify(this.notes_object));
      })

      new_delete_button.addEventListener("click", (e) => {
        //same as above, just deleted from local storage, calls method
        const _id = e.target.dataset.id;
        this.delete_notes({
          id: _id,
          element: e.target
        });
      })

      this.note_id += 1; //increments id for each added note
      new_title.value = title || '';
      new_note.value = note || '';
    }

    delete_notes({
      id,
      element
    }) {
      //splice = removing one item out of array, deletion, can do multiple items
      this.notes_object.splice(Number(id), 1);
      //console.warn("<<delete notes>>", this.notes_object, id);
      //setting local storage again with what was spliced, overriding
      localStorage.setItem('notes', JSON.stringify(this.notes_object));
      //removes from the page itself, not storage
      const container = element.closest(".note_container");
      if (container != null) {
        container.parentNode.removeChild(container);
      }
    }

    //called from update_nav()
    call_ts_api() {
      const url = 'https://taylorswiftapi.onrender.com/get';
      fetch(url) //gets url, creates a "promise"
        .then(response => response.json()) //converts what is given from api to json, this case is lyrics
        .then(data => {
          //console.warn('>>> TS DATA: ', data);
          this.picture_page(data); //sends that lyrics to picture_page() as data
        })
        .catch((e) => {
          throw new Error(e);
        });
    }

    //called from call_ts_api()
    picture_page({
      quote
    }) { //data is the quote , destructuring the quote
      const primary_element = document.querySelector('.primary'); //?
      if (primary_element != null) {
        //if there is a primary_element (lyrics), they are added as the text
        primary_element.innerHTML = quote;
        //primary_element.appendChild(document.createTextNode('This is our text'));
      }
    }
  }

  const theInstanceofDemoPageGen = new demoPageGen();
  theInstanceofDemoPageGen.init();

})();
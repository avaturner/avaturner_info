import {
  content
} from "./content.js";

(() => {
  class demoPageGen {
    constructor(config) {

      const default_content = [
        {
          name: 'github',
          title: 'github',
          text: '- Click Here for Code ',
          href: 'https://github.com/avaturner'
        },
        {
          name: 'resume',
          title: 'Resume',
          text: '- Click Here for my Resume '
        },
        {
          name: 'accomplishments',
          title: 'Accomplishments',
          text: '- Alpha Lambda Delta \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. \n \n - Relevant Coursework \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. \n \n - Congressional App Challenge \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.'
        },
        {
          name: 'experience',
          title: 'Experience',
          text: "- Software Engineering Intern with Ziff Davis, Everyday Health Group \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. \n \n - UofSC College of Engineering and Computing Career Center \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. \n \n - Middletown Township Public Schools Intern \n \v \v -Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus."
        }
      ];

      const local_content = localStorage.getItem('local_content') || [];

      Object.assign(this, {
        content: [
          ...default_content,
          ...local_content,
        ],
        main_section: document.querySelector('main'),
        main_element: document.querySelector('main'),
        footer_object: document.querySelector('footer'),

      }, config);

      localStorage.setItem('first_p', JSON.stringify(this.first_p));
      localStorage.setItem('second_p', JSON.stringify(this.second_p));
      localStorage.setItem('third_p', JSON.stringify(this.third_p));

      this.content_text = this.content;
      if (this.footer_object != null) {
        this.footer_object.insertAdjacentHTML('beforeend', content.footer);
      }
    }

    init() {
      if (this.main_section != null && !/changes_form/.test(document.location.pathname)) {
        this.content_text.forEach(section => {
          const new_section = document.createElement('section');
          const new_section_element_text = document.createElement('div');
          const new_section_element_title = document.createElement('div');
          const new_section_element_anchor = document.createElement('a');
          const form_page_element = document.querySelector('.form_page_button');
          new_section_element_anchor.setAttribute('name', section.name);
          new_section.classList.add('section');
          new_section_element_text.classList.add('deck');
          new_section_element_text.innerText = section.text;
          new_section_element_title.innerText = section.title;
          new_section_element_title.classList.add('title');
          new_section.insertAdjacentElement('beforeend', new_section_element_anchor);
          new_section.insertAdjacentElement('beforeend', new_section_element_title);
          new_section.insertAdjacentElement('beforeend', new_section_element_text);
          this.main_section.insertAdjacentElement('beforeend', new_section);
          this.main_section.insertAdjacentElement('beforeend', form_page_element);
        });
        this.update_nav();
      }
      else if (this.main_section != null && /changes_form/.test(document.location.pathname)) {
        this.insert_form();
      }
      this.footer();
      this.event_listeners();
    }



    event_listeners() {
      this.changeB = document.querySelector('.add_change_button');
      if (this.changeB != null) {
        this.changeB.addEventListener("click", () => {
          this.insert_form();
        });
      }
    }

    insert_form({ title, note } = {}) {
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

    update_nav() {
      const nav_container = document.createElement('nav');

      this.content.forEach(element => {
        const nav_item = document.createElement('a');
        nav_item.href = element.href ? element.href : `#${element.title}`;
        nav_item.target = element.href ? '_blank' : '';
        nav_item.classList.add(`special_nav_${element.title}`);
        nav_item.innerText = element.title;
        nav_container.insertAdjacentElement('afterbegin', nav_item);
      });

      // for (const key in content.nav) {
      //   if (content.nav.hasOwnProperty.call(content.nav, key)) {
      //     const element = content.nav[key];
      //     const nav_item = document.createElement('a');
      //     nav_item.href = content.nav[key].href ? content.nav[key].href : `#${key}`;
      //     nav_item.target = content.nav[key].href ? '_blank' : '';
      //     nav_item.classList.add(`special_nav_${key}`);
      //     nav_item.innerText = content.nav[key].title;
      //     nav_container.insertAdjacentElement('afterbegin', nav_item);
      //   }
      // }
      this.main_section.insertAdjacentElement('afterbegin', nav_container);
    }

    footer() {
      this.footer_items = document.querySelectorAll('footer > img');
      this.footer_object = document.querySelector('footer');
      if (this.footer_items.length > 0) {
        for (let index = 0; index < this.footer_items.length; index++) {
          const element = this.footer_items[index];
          element.classList.add(`special_footer_${index}`);
        }
      }
    }
  }

  const theInstanceofDemoPageGen = new demoPageGen();
  theInstanceofDemoPageGen.init();

})();
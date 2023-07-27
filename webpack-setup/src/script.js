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
          text: '- Click Here for my Resume ',
          href: 'AvaTurnerResume.pdf'
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

      const local_storage_content = JSON.parse(localStorage.getItem('local_content')) || [];

      // const local_storage_content = JSON.parse(localStorage.getItem('local_content'));




      this.edit_mode = /changes_form/.test(document.location.pathname);

      Object.assign(this, {
        content: local_storage_content.length ? local_storage_content : default_content,
        primary_section: document.querySelector('.primary'),
        main_section: document.querySelector(this.edit_mode ? '.add_changes' : '.main_content'),
        main_element: document.querySelector('main'),
        footer_object: document.querySelector('footer'),
        changeB: document.querySelector('.add_changes'),

      }, config);


      console.warn('>> local_storage_content: ', this.content);
      // localStorage.setItem('first_p', JSON.stringify(this.first_p));
      // localStorage.setItem('second_p', JSON.stringify(this.second_p));
      // localStorage.setItem('third_p', JSON.stringify(this.third_p));

      this.content_text = this.content;
      if (this.footer_object != null) {
        this.footer_object.insertAdjacentHTML('beforeend', content.footer);
      }
    }

    init() {
      this.update_nav();
      if (this.main_section != null && !this.edit_mode) {
        this.content_text.forEach(section => {
          if (section.href) {
            return;
          }
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

      }
      else if (this.main_section != null && this.edit_mode) {
        console.warn('>> this.main_section: ', this.main_section);
        this.insert_form();
        this.content_pulldown_gen();
        this.event_listeners();
      }
      this.footer();
    }



    event_listeners() {
      this.save_button = document.querySelector('.save_button');
      if (this.save_button != null) {
        this.save_button.addEventListener("click", (e) => {

          this.content[this.selected_index] = { title: this.new_title.value, name: this.new_name.value, text: this.new_note_area.value }
          console.warn('>> selected_index <<', this.content[this.selected_index]);
          localStorage.setItem('local_content', JSON.stringify(this.content));
        });
      }

      this.new_delete_button.addEventListener("click", (e) => {
        console.warn('>> Click Delete <<');
        //same as above, just deleted from local storage, calls method
        // const _id = e.target.dataset.id;
        // this.delete_notes({
        //   id: _id,
        //   element: e.target
        // });
      })
    }

    content_pulldown_gen() {
      this.pulldown_menu_container = document.createElement('div');
      this.pulldown_menu_container.classList.add('pulldown_menu_container');
      this.pulldown_menu = document.createElement('select');
      for (let index = 0; index < this.content.length; index++) {
        const element = this.content[index];
        this.pulldown_menu.insertAdjacentHTML('beforeend', `<option value="${index}" data-id="${index}">${element.title}</option>`)
      }
      this.pulldown_menu.addEventListener('change', (e) => {
        console.warn('pulldown element: ', this.pulldown_menu[e.target.selectedIndex].dataset.id);
        const selected_option = this.content[e.target.value];
        this.new_title.value = selected_option.title;
        this.new_note_area.value = selected_option.text;
        this.new_name.value = selected_option.name;
        this.selected_index = this.pulldown_menu[e.target.selectedIndex].dataset.id;
      });

      this.pulldown_menu_container.insertAdjacentElement('afterbegin', this.pulldown_menu);
      this.new_note_container.insertAdjacentElement('afterbegin', this.pulldown_menu_container);
    }

    insert_form({ title, note } = {}) {
      console.warn('>> insert_form <<');
      this.note_id = 1;
      this.new_note_container = document.createElement("div"); //whole note section
      this.new_note_container.classList.add('note_container');
      this.new_title = document.createElement("input"); //first box
      this.new_name = document.createElement("input"); //first box
      const new_title_container = document.createElement("div"); //first box
      const new_name_container = document.createElement("div");
      this.new_note_area = document.createElement("textarea"); //second box
      this.new_note_area_container = document.createElement("div"); //second box
      this.new_note_area_container.classList.add('new_note_area_container');
      const new_save_button = document.createElement("div"); //save button
      this.new_delete_button = document.createElement("div"); //delete button
      this.new_delete_button.classList.add("delete_button"); //explain classList?
      new_save_button.classList.add("save_button");
      new_save_button.dataset.id = this.note_id; //gives each note an ID
      new_save_button.innerText = "save";
      this.new_title.type = "text";
      this.new_name.type = "text";
      new_title_container.classList.add('new_title');
      new_name_container.classList.add('new_name');
      this.new_note_area.dataset.id = this.note_id;
      this.new_delete_button.dataset.id = this.note_id;
      //buttons build bottom up, inserted onto page
      this.new_note_container.insertAdjacentElement("afterbegin", new_save_button);
      this.new_note_area_container.insertAdjacentElement("afterbegin", this.new_note_area);
      this.new_note_container.insertAdjacentElement("afterbegin", this.new_note_area_container);

      new_title_container.insertAdjacentElement("afterbegin", this.new_title);
      this.new_note_container.insertAdjacentElement("afterbegin", new_title_container);

      new_name_container.insertAdjacentElement("afterbegin", this.new_name);
      this.new_note_container.insertAdjacentElement("afterbegin", new_name_container);

      this.new_note_container.insertAdjacentElement("afterbegin", this.new_delete_button);
      this.changeB.insertAdjacentElement("beforebegin", this.new_note_container); //where it is put on the page
      this.new_note_container.classList.add("note_container");

      // this.note_id += 1; //increments id for each added note
      // this.new_title.value = title || '';
      // this.new_note_area.value = note || '';
      this.main_section.insertAdjacentElement("afterbegin", this.new_note_container); //where it is put on the page
    }

    update_nav() {
      const nav_container = document.createElement('nav');

      this.content.forEach(element => {
        const nav_item = document.createElement('a');
        nav_item.href = element.href ? element.href : `#${element.name}`;
        nav_item.target = element.href ? '_blank' : '';
        nav_item.classList.add(`special_nav_${element.name}`);
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
      this.primary_section.insertAdjacentElement('afterbegin', nav_container);
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
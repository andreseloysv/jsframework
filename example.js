        class Project extends Model {

            constructor(name, description) {

                super(wrapper, projectTemplate);

                this.buttonSave = this.template.find(".save");
                var titleLabels = [this.template.find(".title"), this.template.find(".footer-title")];
                var descriptionLabels = [this.template.find(".description")];

                this.addAttribute("name", "initValue", titleLabels);
                this.addAttribute("description", "initValue", descriptionLabels);
                this.eventHandler();
            }
            create() {

                this.wrapper.append(this.template);
                this.setAttribute("name", "Success");
            }
            eventHandler() {
                this.buttonSave.on("click", this.sayHallo);
            }
            sayHallo() {
                alert("hallo");
            }

        }
		var minorga = new Project('Project Minorga');
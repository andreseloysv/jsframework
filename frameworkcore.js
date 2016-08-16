		'use strict';
		class Attribute {

            constructor(key, value, labels) {
                this.key = key;
                this.value = value;
                this.labels = labels;
            }
            set(value) {
                this.value = value;
                var labelsListSize = this.labels.length;
                for (var i = 0; i < labelsListSize; i++) {
                    this.labels[i].text(value);
                }
            }
            get(key) {
                return this.value;
            }
        }

        class Model {

            constructor(wrapper, template) {
                this.wrapper = wrapper;
                this.template = template.clone().attr("style", "");
                this.attributes = [];
                this.mapAttributes = [];
            }
            validaDuplicateKeyAttribute(key) {
                if (typeof this.mapAttributes[key] === "undefined") {
                    return true;
                } else {
                    throw "Attribute key duplicate";
                }
            }
            validaExistKeyAttribute(key) {
                if (typeof this.mapAttributes[key] === "undefined") {
                    throw "Attribute key undefined";
                }
            }
            addAttribute(key, value, label) {
                try {
                    this.validaDuplicateKeyAttribute(key);
                    var attribute = new Attribute(key, value, label);
                    this.attributes.push(attribute);
                    this.mapAttributes[key] = this.mapAttributes.length;
                } catch (error) {
                    console.log("error: ", error);
                }
            }
            getAttribute(key) {
                try {
                    this.validaExistKeyAttribute(key);
                    return this.attributes[this.mapAttributes[key]];
                } catch (error) {
                    var message = "error: " + error;
                    console.log(message);
                    return message;
                }
            }
            setAttribute(key, value) {
                try {
                    this.validaExistKeyAttribute(key);
                    var atribute = this.attributes[this.mapAttributes[key]];
                    atribute.set(value);
                } catch (error) {
                    var message = "error: " + error;
                    console.log(message);
                    return message;
                }
            }

        }
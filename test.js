        function testCreateProject() {
            var projectList = [];
            var start = new Date().getTime();
            for (var i = 0; i < 10000; i++) {
                projectList[i] = new Project('Project Minorga');
                projectList[i].create();
            }
            var end = new Date().getTime();
            var time = end - start;
            console.log('Test create project Execution time: ' + time);
            testEditProjectAtributte(projectList);
        }

        function testEditProjectAtributte(projectList) {
            var start = new Date().getTime();
            var projectListSize = projectList.length;
            for (var i = 0; i < projectListSize; i++) {
                projectList[i].setAttribute("name", "Ich teste gerade jkasdkjasbdasjbdkjsbadbskadbsbajksabdsabd");
            }
            var end = new Date().getTime();
            var time = end - start;
            console.log('Test edit project atributte Execution time: ' + time);
        }

        function testFramework() {
            console.log("Test start...");
            testCreateProject();
        }
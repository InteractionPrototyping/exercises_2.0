var fs = require('fs');



var array_url = new Array ("index.html",
"pages/general/grading.html",
"pages/general/ideas.html",
"pages/general/set_up_client.html",
"pages/general/set_up_commands.html",
"pages/general/set_up_development.html",
"pages/general/set_up_intro.html",
"pages/tasks/M1_first_sketch.html",
"pages/tasks/M1_paper.html",
"pages/tasks/M1_presentation.html",
"pages/tasks/M1_research.html",
"pages/tasks/M1_thinking.html",
"pages/tasks/M2_from_LoFi_to_HiFi.html",
"pages/tasks/M2_goals.html",
"pages/tasks/M2_heuristic.html",
"pages/tasks/M2_hifiPrototyping.html",
"pages/tasks/M2_presentation.html",
"pages/tasks/M3_frameworks.html",
"pages/tasks/M3_lofiWeb.html",
"pages/tasks/M3_presentation.html",
"pages/tasks/M3_qualitative.html",
"pages/tasks/M3_style_prototype.html",
"pages/tasks/M4_hifiWeb.html",
"pages/tasks/M4_improving_interactions.html",
"pages/tasks/M4_presentation.html",
"pages/tasks/M4_quantitative.html",
"pages/tasks/M4_reflections.html",
"pages/tasks/M5_evaluation.html",
"pages/tasks/M5_presentation.html",
"pages/theory/analysis.html",
"pages/theory/design.html",
"pages/theory/implementation.html",
"pages/theory/evaluation.html"
);

var jsonArr = {};
  // "pages/tasks/M1_research.html": {
  //     "title": "Research and interviews",
  //     "content": "Research and interviews Interview methods",
  //     "url": "pages/tasks/M1_research.html"
  // },
  // "pages/tasks/M1_paper.html": {
  //     "title": "Paper Prototypes",
  //     "content": "Using Nielsen's (2012) Usability 101, create sketched early stage vertical prototypes on paper of (more than five) different views of your interactive application that address your analysis and design stages. interviews",
  //     "url": "pages/tasks/M1_paper.html"
  // }
// };

function generate_index() {

  for (i=0;i<array_url.length;i++) {


    // var jsonEntry = { "url" : array_url[i] };
    // console.log(jsonEntry);
    // jsonArr.entries[i] = {};
    jsonArr[array_url[i]] = {};
    jsonArr[array_url[i]].url = array_url[i];


    try {
      fs.readFile('demofile1.html', (err, data) => {
      console.log('successfully deleted /tmp/hello');
    } catch (err) {
      // handle the error
      fs.readFile('demofile1.html', (err, data) => {
    }
      console.log(data);
    });
    // open html file
    // html strip: let strippedString = originalString.replace(/(<([^>]+)>)/gi, "");
    // add to JSON object (title,content,url)
    // add comma
  }
  // save json
}

generate_index();
console.log(jsonArr);

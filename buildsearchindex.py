import re
from bs4 import BeautifulSoup
import json


#URL/NAME
filenames = ["index.html",
"pages/general/grading.html",
"pages/tasks/ideas.html",
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
"pages/theory/evaluation.html"]
data = {}
outfile_path='js/search_index.js'

def cleanhtml(input_string):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', input_string)
    contentcleantext= re.split('id="bottom_navigation" ',cleantext)
    print(contentcleantext[0])
    return contentcleantext[0]

def buildjson(filename):
    print("Building json from: "+filename)
    #CONTENT (FULL)
    with open(filename, encoding="utf8") as f:
        content = f.readlines()
        contentfull=''
        for line in content:
            contentfull=contentfull+line

        #CONTENT (CLEAN), strip html and whitespaces
        cleancontent = cleanhtml(contentfull)
        cleancontent = " ".join(re.split("\s+", cleancontent, flags=re.UNICODE))

        #TITLE
        soup = BeautifulSoup(contentfull, 'html.parser')
        title = soup.h1.string

        #Object build
        data[filename]={}
        data[filename]['url'] = filename
        data[filename]['title'] = title
        data[filename]['content'] = cleancontent

for file in filenames:
    buildjson(file)

#Exporting json to new file
print("Writing to outfile: "+outfile_path)
with open(outfile_path, 'w') as outfile:
    outfile.write("window.store = ")
    json.dump(data, outfile)
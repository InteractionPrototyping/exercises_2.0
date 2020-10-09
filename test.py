    
import re

# Define a filename.
filename = "index.html"

def cleanhtml(input_string):
    cleanr = re.compile('<.*?>')
    cleantext = re.sub(cleanr, '', input_string)
    return cleantext


# Open the file as f.
# The function readlines() reads the file.
with open(filename) as f:
    content = f.readlines()
    # print(cleanhtml(f))
    cleancontent=''
    for line in content:
        cleancontent=cleancontent+cleanhtml(line)
    
    print(cleancontent)

# strip newlines
# strip space
# find title
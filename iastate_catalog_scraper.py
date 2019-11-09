import json
import requests
import re
from bs4 import BeautifulSoup

DEBUG = False

'''
page = requests.get("http://dataquestio.github.io/web-scraping-pages/simple.html")
print(page.status_code)
#print(page.content)

soup = BeautifulSoup(page.content, 'html.parser')
print(soup.prettify())
'''

page = requests.get("http://catalog.iastate.edu/azindex/")
soup = BeautifulSoup(page.content, 'html.parser')

#print(soup.prettify())
#print(list(soup.children))
#print(soup.find(id="atozindex"))
#p.get_text()

atozindex = soup.find(id="atozindex")

ul_arr = atozindex.find_all(name="ul")
#print(ul_arr)
#print(ul_arr[0].find(name="li").a["href"])

hrefs = []

for ul in ul_arr:
    #print(ul.find_all(name="a"))
    a_arr = ul.find_all(name="a")

    #hrefs = []
    for a in a_arr:
        hrefs.append(a["href"])
    #hrefs = a_arr["href"]
    #print(hrefs)
#print(hrefs)

course_hrefs = []

for s in hrefs:
    if "azcourses" in s and s != "/azcourses/":
        course_hrefs.append(s)

courses = []
'''
course = {
    "fullname":"whatever"
    "dept":"PHIL"
    "num":"330"
    "credits":"3" (could be "R")
    //"prereqs":[["PHIL 201", "PHIL 230"]] # means either 201 or 230 must be taken before
    "desc":"description goes here"
}
'''

for href in course_hrefs:
    page = requests.get("http://catalog.iastate.edu/" + href)
    print("\nProcessing page: " + str("http://catalog.iastate.edu/" + href))
    print("Status: " + str(page.status_code))

    soup = BeautifulSoup(page.content, 'html.parser')

    course_div = soup.find(class_="courses")

    course_blocks = course_div.find_all(class_="courseblock")

    for course_block in course_blocks:
        # string
        title = course_block.find(name="strong").get_text()
        #if DEBUG: print(title)

        #print(course_block.find(class_="courseblockdesc accordion-content").find_all("p")[0])
        #print(course_block.find(class_="courseblockdesc accordion-content").p.string)

        creditstext = course_block.find(class_="courseblockdesc accordion-content").find_all("p")[0].get_text()

        #creditstext = course_block.find(class_="credits").get_text()
        #creditstext = course_block.find(class_="credits").get_text() + course_block.find(class_="credits noindent").get_text()
        #creditstext = course_block.find({"class":["credits", "credits noindent"]}).get_text()

        #print("Credits text: " + creditstext)

        c = re.search("Cr. \w*.",creditstext)
        credits = c.group(0)[4:-1]
        #if DEBUG: print("Credits: " + str(credits))

        desc_block = course_block.find(class_="prereq")
        prereqtext = ""
        if(desc_block.em):
            prereqtext += desc_block.em.get_text()
        fulldesc = desc_block.get_text()
        desc = fulldesc.replace(prereqtext, "")

        #if DEBUG: print("Prereq: " + prereqtext)
        #if DEBUG: print("Description: " + desc)

        fulldesc = prereqtext + "\n" + desc



        # Separate department from number in title
        #dept_search = re.search("([A-Z]+ {0,1})+", title)
        #dept = dept_search.group(0).strip()

        num_search = re.search("([0-9])+[A-Z]{0,1}", title)
        num = num_search.group(0).strip()

        dept = title[:title.find(num)].strip()

        course_name = title[title.find(":")+1:].strip()

        print("\nOriginal title: '" + title + "'")
        print("Dept: '" + dept + "'")
        print("Num: '" + num + "'")
        print("Course name: '" + course_name + "'")
        #print(dept_search)

        if DEBUG:
            print("Course Name: " + course_name)
            print("Department: " + dept)
            print("Num: " + num)
            print("Full Description: " + fulldesc)
            print("Credits: " + credits)


        courses.append({
            "course_name":course_name,
            "dept":dept,
            "num":num,
            "desc":fulldesc,
            "credits":credits
        })

with open("iastate_catalog.json", 'w') as outfile:
    json.dump(courses, outfile)

import json
import requests
import re
from bs4 import BeautifulSoup
from selenium import webdriver
import time
import lxml
from bs4 import NavigableString
from bs4 import Tag


courses = []

href = "https://catalog.k-state.edu/content.php?catoid=42&catoid=42&navoid=7516&filter%5B27%5D=-1&filter%5B29%5D=&filter%5Bcourse_type%5D=-1&filter%5Bkeyword%5D=&filter%5B32%5D=1&filter%5Bcpage%5D=1&filter%5Bexact_match%5D=1&filter%5Bitem_type%5D=3&filter%5Bonly_active%5D=1&filter%5B3%5D=1&expand=1&print#acalog_template_course_filter"

page_number = 1
while(True):
    page = requests.get(href, verify=False)

    print("Processing page " + str(page_number))
    print("HREF: " + href)
    print("Status: " + str(page.status_code))

    soup = BeautifulSoup(page.content, 'lxml')


    #print(soup.prettify())

    #table_outer = soup.find(name="table", class_="block_n2_and_content table_default")
    #table_middle = table_outer.table
    #table_inner = table_middle.table



    body = soup.body

    toplevel_table = body.find(name="table", class_="toplevel table_default")

    trmain = toplevel_table.find_all("tr")[2]

    n2td = trmain.find("td", class_="block_n2_and_content")

    block_content_outer = n2td.table.find("td", class_="block_content_outer")

    table_default = n2td.find("table", class_="table_default")

    table_default = table_default.find_all("table", class_="table_default")[1]

    table_default = table_default.find_all("table", class_="table_default")[2]
    #tr2 = n2td.find_all("tr")[1]

    #rows = table_default.findChildren(["tr"])

    #for row in rows:
    #    cells = row.findChildren('td')
    #    for cell in cells:
    #        value = cell.string
    #    print("The value in this cell is %s" % value)

    # Remove blank tr
    table_default.tr.extract()

    rows = table_default.findChildren(["tr"])

    i = 0
    for row in rows:
        #row.td.extract()
        #row.find_all("td")[-1].extract()
        #row.find_all("td")[-1].extract()

        title = row.find("h3")
        #sibtext = title.find_next_sibling().find_next_sibling().find_next_sibling().get_text()
        #children = row.children
        #if i == 0: print(row.prettify())

        #print(type(title))
        #print(title.contents)
        if title != None:
            #print(title.prettify())
            #print("\n" + str(row.prettify()))
            title = title.string

            num_search = re.search("([0-9])+[A-Z]{0,1}", title)
            num = num_search.group(0).strip()

            dept = title[:title.find(num)].strip()

            course_name = title[title.find("-")+1:].strip()

            #print("\nOriginal title: '" + title + "'")
            #print("Dept: '" + dept + "'")
            #print("Num: '" + num + "'")
            #print("Course name: '" + course_name + "'")

            s = str(row.prettify())

            creditsearch = re.search("<strong>\n *Credits:\n *</strong>\n *.*", s)
            credits = creditsearch[0].strip()
            credits = credits.split("\n")[-1].strip()


            #Preqs
            fulldesc = ""

            prereqsearch = re.search("<strong>\n *Requisites\n *</strong>\n *<br/>\n *[\S\s]*?\n *<br/>", s)
            if prereqsearch:
                prereq1 = prereqsearch[0].strip()
                prereq1 = prereq1.split("\n")
                prereq = ""
                for line in prereq1:
                    if "Prerequisite" in line or "Corequisite" in line:
                        prereq += line

                prereq = prereq.strip()
                #print("Prereq: " + prereq)
                fulldesc += prereq


            descsearch = re.search("<br/>\n *<br/>\n.*\n *<br/>\n *<br/>", s)
            if descsearch:
                desc = descsearch[0].strip()
                desc = desc.split("\n")[2].strip()
                #print("Description: " + desc)
                fulldesc += "\n" + desc
            # Description
            #print("Full description: " + fulldesc)
            #print("Credits: " + credits)
            #print(s)
            if i == 0:
                print("\n--- First Item ---")
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
        else:
            #print(row.prettify())
            if row.find("a"):
                print("Found anchor.")
                for anchor in row.findChildren("a"):
                    print("Comparing page number " + anchor.string.strip() + " to current page number (" + str(page_number) + ")")

                    if "Back" in anchor.string.strip() or "Forward" in anchor.string.strip():
                        continue

                    if int(anchor.string.strip()) == page_number+1:
                        print("Page number is one bigger, proceeding to that link")
                        href = "https://catalog.k-state.edu/" + anchor["href"]
                        break
        i+=1


    page_number += 1
    if page_number > 46:
        break

with open("kstate_catalog.json", 'w') as outfile:
    json.dump(courses, outfile)

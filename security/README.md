### README
This document is the markdown version of the website
## Time
3 hours+ 
## Issues - 
the site was down when I wanted to work on it, and I struggled with getting any of the hacks to work.
I saw that lab ten was a hint but didnt see how to connect to the two
Got the trial of Burp Suite to see if that would help but it didnt.

## Introduction
This report is a vulnerability analysis of the website Not Uber located on https://jordan-marsh.herokuapp.com/.
This report aims to locate, analyze, and resolve any vulnerability abilities the site might have.  
## Methodology 
For this lab, OWASP ZAP version 2.10.0 and the Burp Suite Community Edition v2021.2.1 were used to record and log HTTP(S) traffic and intercept requests and responses HTTP requests header fields and request body including query strings and data.  Alternative applications that can be used are Tamper Data for Firefox and mitmproxy.
## Abstract of Findings 
During the analysis, three issues were discovered. There were two DOM-related cross-site scripting issues, and then there was an   x. 
## Issues Found  
### Issue  1 : Cross-site Scripting
### Location 
### Severity of issue  
High
### Description of issue. 
Within The OWASP application, it flagged two DOM-related cross-site scripting issues.  When the user goes to the website of https://jordan-marsh.herokuapp.com/. They are met with an alert detailing how the site has many Fast and the Furious memes, a 'you mad?'/ troll face pop up.  
### Proof of vulnerability. 
Here is the result of the DOM-related cross-site scripting
### Resolution. 
It is recommended that the developers remove the ability for data to be interpreted as code or do not allow users to use specail characters while they input data. 
### Issue  2  Cross-site Scripting
### Location  
### Severity of issue 
High
### Description of issue. 
### Proof of vulnerability. 
### Resolution.
It is recommended that the developers remove the ability for data to be interpreted as code or do not allow users to use specail characters while they input data. 
### Issue  3 
### Location 
### Severity of issue 
### Description of issue. 
### Proof of vulnerability. 
### Resolution. 
## Conclusion 
Do not hesitate to contact Comp 116: Introduction to Security at Tufts University for any more help.
## Works Cited
https://cwe.mitre.org/data/definitions/79.html 
https://www.youtube.com/watch?v=wLfRz7rRsH4
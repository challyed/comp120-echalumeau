### README
This is the md version of the website
## Introduction
This report is a vulnerability analysis of the website Not Uber located on https://jordan-marsh.herokuapp.com/.
This report aims to locate, analyze, and resolve any vulnerability abilies the site might have.  
## Methodology 
For this lab, the applications known as OWASP ZAP version 2.10.0 and the Burp Suite Community Edition v2021.2.1 were used to record and log HTTP(S) traffic and intercept requests and responses HTTP requests header fields and request body including query strings and data.  Alternative applications that can be used are Tamper Data for Firefox and mitmproxy.
## Abstract of Findings 
During the anaylsis, there were three issues that were discovered. There were two Cross site Scriting issues and the x. 
## Issues Found  
### Issue  1 : Cross-site Scripting
### Location 
### Severity of issue  
High
### Description of issue. 
The issue is a cross-site scripting vulenrability. 
### Proof of vulnerability. 
### Resolution. 
It is recommended that the developers remove the ability for data to be interpreted as code or do not allow users to use specail characters while they inpu data. 
### Issue  2  Cross-site Scripting
### Location  
### Severity of issue 
High
### Description of issue. 
### Proof of vulnerability. 
### Resolution.
It is recommended that the developers remove the ability for data to be interpreted as code or do not allow users to use specail characters while they inpu data. 
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
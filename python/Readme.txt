# README.md
### What helped
Getting the pusedo code helpped and reviwing the videos of the class espically going over the base64 encoding.
### Issues
Figuring out how to rip the FTP and IMAP passwords 
Nitko scans.
From what I understand of the Nitko is that is is loud but I cant see the pattern. Someone menetion that their was a string that can help but i am not seeing it. 
### time
This took the 2+ weeks to figure out
### Notes
One werid this is when trying to pull the passwords. I did a version of it in and IDE
statement1 = 'USER wallstreetbets\n''PASS MoneyIsTheMostImportantThingInTheWorld\n''SYST\n''TYPE I\n''USER APPLE\n' 'PASS TIME\n' #This acts like packet[TCP].load.decode("ascii").strip()
statement1 = str(statement1)
count = 0
count =count +1
payload = statement1
login = []

if 'USER' in payload:
    rippayload = payload.split('USER')[1].split()[0]
    login.append(rippayload)
    print(login)
    print(rippayload)
if 'PASS' in payload:
    rippayloada: str = payload.split('PASS')[1].split()[0]
    login.append(rippayloada)
    print(login)
    print(rippayloada)
print(statement1)
print(rippayload)
print(rippayloada)
print(login)
print("Alert", count, "Usernames and passwords sent in-the-clear (FTP) "+ "username " + login[0]+' ' + "password "+login[1])

RESULTS:
['wallstreetbets']
wallstreetbets
['wallstreetbets', 'MoneyIsTheMostImportantThingInTheWorld']
MoneyIsTheMostImportantThingInTheWorld
USER wallstreetbets
PASS MoneyIsTheMostImportantThingInTheWorld
SYST
TYPE I
USER APPLE
PASS TIME

wallstreetbets
MoneyIsTheMostImportantThingInTheWorld
['wallstreetbets', 'MoneyIsTheMostImportantThingInTheWorld']
Alert 1 Usernames and passwords sent in-the-clear (FTP) username wallstreetbets password MoneyIsTheMostImportantThingInTheWorld

Process finished with exit code 0


it kind of produced what was needed. wouldnt work if there were multiple passwords but in the actucally version running on python it didnot produce any results

### Review of directons and points
README.txt (2 points) 
-Done
Usernames and passwords sent in-the-clear via HTTP Basic Authentication, FTP, and IMAP (6 points) 
-Kind of but not working correctly
FIN scan (2 points) 
-Done
XMAS scan (2 points) 
-Done
NULL scan (2 points)
- Done 
Nikto scan (2 points) 
-Not Working
Someone scanning for Remote Desktop Protocol (RDP) protocol (4 points)
- I think it is done?
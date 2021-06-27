#!/usr/bin/python3
import base64
from struct import pack
from scapy.all import *
import argparse

from scapy.layers.inet import IP, TCP

count = 0
nscan = ["nikto", "Nikto"]


def packetcallback(packet):
    try:

        # The following is an example of Scapy detecting HTTP traffic
        # Please remove this case in your actual lab implementation so it doesn't pollute the alerts
        if TCP in packet:
            if packet['TCP'].flags == 0:  # null scan
                global count
                count = count + 1
                var2 = packet.getlayer(IP).src
                var3 = 'TCP'
                print("Alert", count, "Null Scan is detected from", var2, "(", var3, ")")
            elif packet['TCP'].flags == 'F':  # Fin scan
                count
                count = count + 1
                var2 = packet.getlayer(IP).src
                var3 = 'TCP'
                print("Alert", count, "FIN Scan is detected from", var2, "(", var3, ")")
            elif packet['TCP'].flags == 'FPU':  # XMAS Scan
                count = count + 1
                var2 = packet.getlayer(IP).src
                var3 = 'TCP'
                print("Alert", count, "XMAS Scan is detected from", var2, "(", var3, ")")
            elif nscan in packet:
            #elif str(hexdump(packet)) == '4e 69 6b 74' :  # Nitko
                
                count = count + 1
                #payload = str(hexdump(packet))
                var2 = packet.getlayer(IP).src
                var3 = 'TCP'
                print("Alert", count, "Nikto Scan is detected from", var2, "(", var3, ")")
            elif packet['TCP'].dport == 21 or packet['TCP'].dport == 80 or packet['TCP'].dport == 143:
                
                count = count + 1
                if packet['TCP'].dport == 21:  # FTP
                  payload = packet[TCP].load.decode("ascii").strip()
                  rippayload = payload.split('USER')[1].split()[0]
                  username = rippayload
                  mylist = []
                  password = packet[TCP]
                  mylist.append(username)
                  mylist.append(password)
                  print("Alert", count, "Usernames and passwords sent in-the-clear (FTP)", mylist)
                elif packet['TCP'].dport == 80:  # http
                    payload = packet[TCP].load.decode("ascii").strip()
                    rippayload = payload.split("Authorization: Basic ")[1].split()[0]
                    decodedBytes = base64.b64decode(rippayload)
                    decodedStr = str(decodedBytes, "utf-8")
                    decodedStr = decodedStr[1:]
                    decodedStr = decodedStr.split(":")
                    username = decodedStr[0]
                    password = decodedStr[1]
                    print("Alert", count, "Usernames and passwords sent in-the-clear (HTTP)", username, password)
                elif packet['TCP'].dport == 143:  # IMAP
                  payload = packet[TCP].load.decode("ascii").strip()
                  rippayload = payload.split('LOGIN')[1].split()[0]
                  rippayload = payload.split('LOGIN')[1].split()[0]
                  rippayloada = payload.split()[2]
                  rippayloadb = payload.split()[3].strip(' " " ')
                  password = ''
                  
                  print("Alert", count, "Usernames and passwords sent in-the-clear (IMAP) Username:", rippayloada + "Password :", rippayloada)
            elif packet['TCP'].dport == 3389:  # RDP
                print("Alert", count, "Someone scanning for Remote Desktop Protocol (RDP) protocol")


    except:
        pass


parser = argparse.ArgumentParser(description='A network sniffer that identifies basic vulnerabilities')
parser.add_argument('-i', dest='interface', help='Network interface to sniff on', default='eth0')
parser.add_argument('-r', dest='pcapfile', help='A PCAP file to read')
args = parser.parse_args()
if args.pcapfile:
    try:
        print("Reading PCAP file %(filename)s..." % {"filename": args.pcapfile})
        sniff(offline=args.pcapfile, prn=packetcallback)
    except:
        print("Sorry, something went wrong reading PCAP file %(filename)s!" % {"filename": args.pcapfile})
else:
    print("Sniffing on %(interface)s... " % {"interface": args.interface})
    try:
        sniff(iface=args.interface, prn=packetcallback)
    except:
        print("Sorry, can\'t read network traffic. Are you root?")
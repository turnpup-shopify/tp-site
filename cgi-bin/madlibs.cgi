#!/usr/bin/python

import random
x=random.randint(0,4)
template=[['an ADJECTIVE','an ADVERB','a NOUN'],['a NOUN','a VERB','a NUMBER'],['a NUMBER','an ADJECTIVE','a VERB'],['an ADVERB','a VERB','a NOUN'],['an ADJECTIVE','a NOUN(1)','a NOUN(2)']]

import cgi 
form=cgi.FieldStorage()


print 'Content-Type: text/html'
print
print '<title>Madlibs</title>'
print '<h1>Welcome to Madlibs!</h1><br>'


if x==0:
	print '<form action="/cgi-bin/mad.cgi"><input type="hidden" name="Mad_Lib_Number" value="0">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
if x==1:
	print '<form action="/cgi-bin/mad.cgi"><input type="hidden" name="Mad_Lib_Number" value="1">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
if x==2:
	print '<form action="/cgi-bin/mad.cgi"><input type="hidden" name="Mad_Lib_Number" value="2">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
if x==3:
	print '<form action="/cgi-bin/mad.cgi"><input type="hidden" name="Mad_Lib_Number" value="3">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
if x==4:
	print '<form action="/cgi-bin/mad.cgi"><input type="hidden" name="Mad_Lib_Number" value="4">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'

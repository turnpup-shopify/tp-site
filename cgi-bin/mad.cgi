#!/usr/bin/python

import cgitb    	
cgitb.enable()

import cgi
form = cgi.FieldStorage()

a=form['first'].value 
b=form['second'].value
c=form['third'].value
x=int(form['Mad_Lib_Number'].value)

print 'Content-Type: text/html'
print 
print '<h1>Here is Your Madlib!</h1>'
if x==0:
	print 'The ', a, ' elephant ran through the village ', b, ' smashing everything in sight, including a ', c, '.'
if x==1:
	print 'I cant believe that a ', a, ' started to ', b, ' and then won ' , c, ' dollars.'
if x==2:
	print 'Sally got ', a, ' out of a possible 100 points on her ', b, ' exam and then found herself having to ', c, '.'
if x==3:
	print 'The turtle ', a, ' woke up and began to ', b, ' into the ', c, '.'
if x==4:
	print 'The stubborn ', a, 'wizard yelled at a ', b, ' and proceeded to cry to his pet', c, '.' 
print '<br>'
print '<br>'
print "<a href=http://www.alexturney.com/cgi-bin/madlibs.cgi>Click this Link to Play Another Time!</a>"

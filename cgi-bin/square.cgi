#!/usr/bin/python

import cgitb    	
cgitb.enable()

import cgi
form = cgi.FieldStorage()

x = int(form['number'].value)     

print 'Content-Type: text/html'
print 
print 'The square of', x, 'is', x*x, '.'



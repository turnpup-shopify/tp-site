#!/usr/bin/python
#HappyLibs.cgi allows a user to input three field such as Noun, Adverb, and Verb.  
import random
template=[['an ADJECTIVE','an ADVERB','a NOUN'],['a NOUN','a VERB','a NUMBER'],['a NUMBER','an ADJECTIVE','a VERB'],['an ADVERB','a VERB','a NOUN'],['an ADJECTIVE','a NOUN(1)','a NOUN(2)']]

import cgitb                      # Always remember to do this first.
cgitb.enable()

import cgi
form = cgi.FieldStorage()
if 'first' in form:
	if 'second' in form:
		if 'third' in form:
			if 'Mad_Lib_Number' in form:
				print 'Content-Type: text/html'
				print 
			   	print '<h1>Here is Your Madlib!</h1>'
				input_one=form['first'].value 
				input_two=form['second'].value
				input_three=form['third'].value
				x=int(form['Mad_Lib_Number'].value)
				if x==0:
					print 'The ', input_one, ' elephant ran through the village ', input_two, ' smashing everything in sight, including a ', input_three, '.'
				if x==1:
					print 'I cant believe that a ', input_one, ' started to ', input_two, ' and then won ' , input_three, ' dollars.'
				if x==2:
					print 'Sally got ', input_one, ' out of a possible 100 points on her ', input_two, ' exam and then found herself having to ', input_three, '.'
				if x==3:
					print 'The turtle ', input_one, ' woke up and began to ', input_two, ' into the ', input_three, '.'
				if x==4:
					print 'The stubborn ', input_one, 'yelled at a ', input_two, ' and proceeded to cry to his pet', input_three, '.' 
				print '<br>'	
				print '<h2>"Play another Madlib below!</h2>'
				print '<br>'
				x=random.randint(0,4)
				if x==0:
					print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="0">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go Again"></form>'
				if x==1:
					print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="1">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go Again"></form>'
				if x==2:
					print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="2">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go Again"></form>'
				if x==3:
					print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="3">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go Again"></form>'
				if x==4:
					print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="4">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go Again"></form>'
else: 
	x=random.randint(0,4)
	template=[['an ADJECTIVE','an ADVERB','a NOUN'],['a NOUN','a VERB','a NUMBER'],['a NUMBER','an ADJECTIVE','a VERB'],['an ADVERB','a VERB','a NOUN'],['an ADJECTIVE','a NOUN(1)','a NOUN(2)']]

	print 'Content-Type: text/html'
	print
	print '<title>Madlibs</title>'
	print '<h1>Welcome to Madlibs!</h1><br>'
	if x==0:
		print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="0">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
	if x==1:
		print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="1">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
	if x==2:
		print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="2">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
	if x==3:
		print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="3">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'
	if x==4:
		print '<form action="/cgi-bin/HappyLibs.cgi"><input type="hidden" name="Mad_Lib_Number" value="4">Enter ',template[x][0],':<input type=text name=first><br>Enter ',template[x][1],':<input type=text name=second><br>Enter ',template[x][2],':<input type=text name=third> <br><input type=submit value="Go"></form>'











# -*- coding: utf-8 -*-
"""
Created on Sat May 25 16:34:38 2019

@author: Eureka
"""

import sqlite3
import json
def dict_to_json(dict1):
    json1=json.dumps(dict1, sort_keys=True, separators=(',', ': '))#, indent=4,
    return json1
def sqlread():
    dict1={"1id0":1,"1id1":1,"1id2":1,"1id3":1,"1id4":1,"1id5":1,
           "2id0":1,"2id1":1,"2id2":1,"2id3":1,"2id4":1,"2id5":1,
           "3id0":1,"3id1":1,"3id2":1,"3id3":1,"3id4":1,"3id5":1}   
    try:
        conn = sqlite3.connect('testdb.db')
        c = conn.cursor()
        print ("Opened database successfully")
        try:
            print("try innerok")
            cursor = c.execute("SELECT id, week, value  from usd1")
            for row in cursor:
                print ("ID = ", row[0])
                print ("weekday = ", row[1],"\n")
                print ("BUYCASH = ", row[2],"\n")
                print ("Operation done successfully")
            #####################试图写逻辑################
                if row[0] in range(0,4,1):
                    dict1[str(row[0])+'id'+str(row[1])]=row[2]
            ###############################################
            conn.close()
        except:
            print("fail")
    except:
        print("open the database failed")
    json1=dict_to_json(dict1)
    print(json1)
    return json1

sqlread()
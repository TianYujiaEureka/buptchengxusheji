# -*- coding: utf-8 -*-
"""
Created on Sat May 18 16:31:32 2019

@author: Eureka
"""

from flask import Flask

import sqlite3
import json
app = Flask(__name__)

#@app.route('/')


def dict_to_json(dict1):
    json1=json.dumps(dict1, sort_keys=True, separators=(',', ': '))#, indent=4,
    return json1
#数据库相关
def sqlread():
    dict1={"id0":1,"id1":1,"id2":1,"id3":1,"id4":1,"id5":1}
#    dict1={"0":1,"1":1,"2":1,"3":1,"4":1,"5":1}
#    dict1={0:1,1:1,2:1,3:1,4:1,5:1}
    try:
        conn = sqlite3.connect('currency.db')
        c = conn.cursor()
        print ("Opened database successfully")
        try:
            print("try innerok")
            cursor = c.execute("SELECT id, value  from data2")
            for row in cursor:
                print ("ID = ", row[0])
                print ("BUYCASH = ", row[1],"\n")
                print ("Operation done successfully")
            #####################试图写逻辑################
                if row[0] in range(0,4,1):
#                    dict1[row[0]]=row[1]
#                    dict1[str(row[0])]=row[1]
                    dict1['id'+str(row[0])]=row[1]
            ###############################################
            conn.close()
        except:
            print("fail")
    except:
        print("open the database failed")
    json1=dict_to_json(dict1)
    print(json1)
    return json1

@app.route('/')
def jsonreturnfun():
    jsonreturn=sqlread()
    return jsonreturn

if __name__ == '__main__':
    app.run(debug=1)

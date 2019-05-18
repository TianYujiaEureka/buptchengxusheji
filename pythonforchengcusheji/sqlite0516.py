# -*- coding: utf-8 -*-
"""
Created on Wed May 15 21:45:11 2019

@author: Eureka
"""

import sqlite3
import json

def dict_to_json(dict1):
    json1=json.dumps(dict1, sort_keys=True, separators=(',', ': '))#, indent=4,
    return json1
#数据库相关
def sqlread():
    ori={'orgid':1,'orimon':1}
    goal={'goaid':1,'goalmon':1}
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
                if ori['orgid']==row[0]:
                    ori['orimon']=row[1]
                if goal['goaid']==row[0]:
                    goal['goalmon']=row[1]
            ###############################################
            conn.close()
        except:
            print("fail")
    except:
        print("open the database failed")

    json1=dict_to_json(ori)
    json2=dict_to_json(goal)
    print(json1,json2)
    return json1,json2

sqlread()
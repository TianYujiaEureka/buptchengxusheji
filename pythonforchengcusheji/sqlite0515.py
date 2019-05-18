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
def sqlread(a,b):
    ori={'orgid':a,'orimon':1}
    goal={'goaid':b,'goamon':1}
    try:
        conn = sqlite3.connect('data.db')#这一行是数据库的路径你看着改
        c = conn.cursor()
        print ("Opened database successfully")
    except:
        print("open the database failed")
        try:
            cursor = c.execute("SELECT id, buycash  from Trans")#这一行是id和汇率金额 根据你的数据库改就行 Trans是表名
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
        except:
            print("fail")
        conn.close()
    json1=dict_to_json(ori)
    json2=dict_to_json(goal)
    print(json1,json2)
    return json1,json2
def main():
    sqlread(1,2)
main()
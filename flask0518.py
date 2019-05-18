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


def dict_to_json(dict1,dict2):
    dicadd=dict(dict1,**dict2)  
    print("dicadd",dicadd)
    json1=json.dumps(dicadd, sort_keys=True, separators=(',', ': '))#, indent=4,
    return json1
#数据库相关
def sqlread(orginid,goalinid):
    orid={'orgid':1}
    orid['orgid']=orginid
    print( orid['orgid'])
    ori={'orimon':1}
    goalid={'goaid':1}
    goalid['goaid']=goalinid
    goal={'goalmon':1}
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
                if orid['orgid']==row[0]:
                    ori['orimon']=row[1]
                if goalid['goaid']==row[0]:
                    goal['goalmon']=row[1]
            ###############################################
            conn.close()
        except:
            print("fail")
    except:
        print("open the database failed")
    json1=dict_to_json(ori,goal)
    print(json1)
    return json1

@app.route('/orgid=<orgid>&goalid=<goalid>')
def jsonreturnfun(orgid,goalid):
    jsonreturn=sqlread(int(orgid),int(goalid))
    return jsonreturn

if __name__ == '__main__':
    app.run(debug=1)

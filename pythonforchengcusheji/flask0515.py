# -*- coding: utf-8 -*-
"""
Created on Wed May 15 20:43:51 2019

@author: Eureka
"""
from flask import Flask
app = Flask(__name__)

@app.route('/orgid=<orgid>&goalid=<goalid>', methods=['GET'])
def hello_world():
 
    return 'Hello World!'

def jsontostring():
    return json1,json2
if __name__ == '__main__':
    app.run()
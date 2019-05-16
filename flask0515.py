# -*- coding: utf-8 -*-
"""
Created on Wed May 15 20:43:51 2019

@author: Eureka
"""
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
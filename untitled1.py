# -*- coding: utf-8 -*-
import requests
import os
import time
import re
def getHTML(url):
    try:
        kv={'user-agent':'Mozilla/5.0'}#模拟浏览器
        r=requests.get(url,timeout=30,headers=kv)
        r.raise_for_status()
        r.encoding=r.apparent_encoding
        print(r.raise_for_status())
        return r.text
    except:
        return "error connection"

def main(inurl):
    url=inurl
    root = "D:/homework/python/pydata/"
    path=root+time.strftime('%Y&%m&%d&%M',time.localtime(time.time()))+'.txt'#如果已经有当天的数据就要删掉重新存
    flag=0
    try:
        kv={'user-agent':'Mozilla/5.0'}#模拟浏览器
        d=requests.get(url,timeout=30,headers=kv)
        d.raise_for_status()
        d.encoding=d.apparent_encoding
        if d.status_code==200:
            if not os.path.exists(root):
                os.mkdir(root)
            if not os.path.exists(path):
                    with open(path,'wb') as f:
                        f.write(d.content)
                        f.close()
                        flag=1
                        print("file saved successfully")
            else:
                flag=1
                print("the file is alredey exist")
    except:
        flag=0
        print("error connection")
    print(flag)
    try:
        if flag==1:
            with open('D:/homework/python/pydata/list.txt','w+') as li:
                li.write(str(path))
                li.close
                print("the list is update")
        else:
            print("the list already exist")
    except:
        print('cannot save')
        
                

#getHTML("http://www.usd-cny.com/bankofchina.htm")        
main("http://www.usd-cny.com/bankofchina.htm")

#if r.status_code==200:
#    r.encoding='utf-8'
#    print(r.text)
#    print(type(r))
#    print(r.headers)

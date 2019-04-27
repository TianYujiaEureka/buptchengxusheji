# -*- coding: utf-8 -*-
#-*- coding: utf8 -*-
import xlrd

def getdata(name1,name2,row_list):
    fname = "dateok.csv"
    bk = xlrd.open_workbook('D:/homework/python/pydata/'+fname)
#    shxrange = range(bk.nsheets)
    try:
        sh = bk.sheet_by_name("Sheet1")
        #获取行数
        nrows = sh.nrows
        #获取列数
        ncols = sh.ncols
        print ("nrows %d, ncols %d" % (nrows,ncols))
        #获取第一行第一列数据 
        #   cell_value = sh.cell_value(1,1)
        #print cell_value
        row_list = []
        #获取各行数据
        for i in range(1,nrows):
            row_data = sh.row_values(i)
            row_list.append(row_data)
            print(row_list)
        return row_list#不会赋值列表
    except:
        print ("no sheet in %s named Sheet1" %fname)
def main():
    rowlist1=[]             #不会相互传参
    getdata('yingbang','meiyuan',rowlist1)
    print(rowlist1)
main()
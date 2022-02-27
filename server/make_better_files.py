import json

with open('gameids.txt',encoding='utf-8') as file:
    old_json = json.load(file)

old_json = old_json['apps']
new_json = {}
for sjson in old_json:
    id = sjson['appid']
    name = sjson['name']
    if name!='':
        new_json[name] = id

f = open('new_json.json','w')
s = json.dumps(new_json)
f.write(s)
f.close()

##x = {'x':'a','b':'d'}
##
##s = json.dumps(x,indent=4)
##
##f = open('testfile.json','w')
##f.write(s)
##f.close()

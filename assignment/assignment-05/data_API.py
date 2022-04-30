# 새로운 url을 불러온다
from http.client import responses
import requests

# 방법 1
url = 'http://openapi.seoul.go.kr:8088/47535845546a756439347a48696862/json/GetParkInfo/1/1000/'

response = requests.get(url)

response_json = response.json()

data_row = response_json["GetParkInfo"]["row"]

print(len(data_row))
# data_row =>list

def get_data(gu):
    new_data =[]
    for item in data_row:
        place = item["ADDR"]
        if gu in place:
            new_data.append(item)

    return new_data

new_data =[]
for item in data_row:
    place = item["ADDR"]
    if "동작구" in place:
        new_data.append(item)

print(new_data[0])
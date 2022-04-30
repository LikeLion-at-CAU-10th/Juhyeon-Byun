# 파이썬 = 으로 쓰면 됨 / 들여쓰기가 중요하다.
# list : 순서대로, 
# append는 .으로 연결 / 추가할떄
# item_list= ["영권", "하린", "민규", "수은","상민", "주현", "선영"]

# print(item_list)

# a=item_list[3]

# item_list[0] = "지원"
# print(item_list)

# item_list.append("명준")
# print(item_list)

# dictionary : 세트를 하나로, "key"로 접근한다.
# item_dic = {"key1": 111, "key2":222}

# # item_dic["key1"] = 222 
# # item_dic["key3"] = 333

# # 딕셔너리 메소드
# # dic_items
# # dic_keys
# # dic_values
# dic_items = item_dic.items()
# print(dic_items)

# 반복문 for, if: for문은 if문이라 같이 쓰인다.
# in 뒷부분은 내가 넣을 반복문 변수 작성
# for 다음에는 '원소들' 
#  :(콜론)을 마지막에 꼭 써야 한다. 
#  들여쓰기 주의! 

# item_list = ["영권", "하린", "민규", "수은","상민", "주현", "선영"]

# new_data = []
# for item in item_list:
#     if item == "주현":
#         new_data.append(item)
#         print(item)

# num_list = [1,2,3,4,5,6,7,8,9,10]

# new_data =[]
# for n in num_list:
#     if n%2 == 0:
#         new_data.append(n)

# print(new_data)


# if는 true, false에 대하여 
str = "수은언니 상민 하린 민규 선영 영권 주현"

if "수은언니" in str:
    print("수은언니가 있어")
else:
    print("언니가 없대")
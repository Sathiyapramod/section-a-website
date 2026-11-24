data = {
    "name": "john",
    "age": 35,
    "email": "john@example.com",
}

print(data.keys())

for key in data:
    print(key)

for key, value in data.items():
    print(key, value)

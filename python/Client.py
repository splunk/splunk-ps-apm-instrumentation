import requests

def getAPI():
    response = requests.get(url="http://localhost:3000/api?username=user01")
    print(str(response.status_code) + ": " + response.text)
    return

getAPI()
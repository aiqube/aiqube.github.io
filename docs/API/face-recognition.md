---
sidebar_position: 2
---

# Face Recognition

## Face Recognition

Face Recognition API service that can recognition a person in dataset.

### HTTP Request

`POST /aiqube/thai-star-face-recognition/v1/face_predict`

### HTTP Header

|Parameter   |Description   |
|---|---|
|X-API-KEY  | API key authentication  |

### POST data example

```json
{
  "encoded_img": base64_encoded(data)
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|encoded_img   | image contain face that encode with `base64` method  |


### Example Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
import base64
import requests

with open("image.jpg", "rb") as image_file:
    img_data = base64.b64encode(image_file.read())

headers = {
  'X-API-KEY': 'XXXX',
  'Content-Type': 'application/json'
}
url = API_ENDPOINT

payload = {'encoded_img': img_data.decode('utf-8')}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

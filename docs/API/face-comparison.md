---
sidebar_position: 1
---

# Face Comparison

## Face Comparison

Face comparison API service that can find face on 2 photo that similar or not.

### HTTP Request

`POST /aiqube/face/v1/face_comparison`

### HTTP Header

|Parameter   |Description   |
|---|---|
|X-API-KEY  | API key authentication  |

### POST data example

```json
{
  "encoded_img1": base64_encoded(data),
  "encoded_img2": base64_encoded(data)
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|encoded_img1   | image contain face that encode with `base64` method  |
|encoded_img2   | image contain face that encode with `base64` method  |

### Example Request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
import base64
import requests

with open("image1.jpg", "rb") as image_file:
    img1_data = base64.b64encode(image_file.read())
    
with open("image2.jpg", "rb") as image_file:
    img2_data = base64.b64encode(image_file.read())

headers = {
  'X-API-KEY': 'XXXX',
  'Content-Type': 'application/json'
}
url = API_ENDPOINT

payload = {'encoded_img1': img1_data.decode('utf-8'), 'encoded_img2': img2_data.decode('utf-8')}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

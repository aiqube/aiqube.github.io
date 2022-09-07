---
sidebar_position: 4
---

# OCR - Thai ID Card

## OCR - Thai ID Card

OCR Thaiid API service that can Extract information from Thai id photo both front and back side.

### HTTP Request

`POST /aiqube/thaiid-ocr/v1/thaiid`

### HTTP Header

|Parameter   |Description   |
|---|---|
|X-API-KEY   | API key authentication  |


### POST data example

```json
{
  "image": base64_encoded(data),
  "side": "front"
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|image   | image contain thai id card that encode with `base64` method  |
|side | Specific side for recognition `front` for font side, `back` for back side (default is `front`)|

### Example request

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

payload = {'image': img_data.decode('utf-8'), 'side': 'front'}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

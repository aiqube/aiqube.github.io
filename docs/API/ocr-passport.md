---
sidebar_position: 5
---

# OCR - Passport

## OCR - Passport

OCR Passport API service that can Extract information from passport.

### HTTP Request

`POST /aiqube/passport-ocr/v1/passport`

### HTTP Header

|Parameter   |Description   |
|---|---|
|X-API-KEY   | API key authentication  |


### POST data example

```json
{
  "encoded_img": base64_encoded(data)
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|image   | image contain passport that encode with `base64` method  |

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

payload = {'encoded_img': img_data.decode('utf-8')}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

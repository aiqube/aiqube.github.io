---
sidebar_position: 9
---

# Thai address utility

An Utility for Thai Address

## Thai Address parser

Thai Address parser from address string in Thai format.

### HTTP Request

`POST /aiqube/thai-address/v1/parser`

### HTTP Header

|Parameter   |Description   |
|---|---|
|x-api-key   | API key authentication  |


### POST data example

```json
{
  "address": string
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|address   | String that contain address in Thai language  |


### Example request

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="python" label="Python">

```python
import requests

address = "33/14-5 หมู่ 9 ตำบลคลองห้า อำเภอคลองหลวง จังหวัดปทุมธานี 12120"

headers = {
  'X-API-KEY': 'XXXX',
  'Content-Type': 'application/json'
}
url = API_ENDPOINT

payload = {'address': address}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

## Thai Address postal code lookup

Postal code lookup from district and province.

### HTTP Request

`POST /aiqube/thai-address/v1/postalcode`

### HTTP Header

|Parameter   |Description   |
|---|---|
|x-api-key   | API key authentication  |


### POST data example

```json
{
  "sub_district": string,
  "district": string,
  "province": string
}
```

### POST data parameter

|Parameter   |Description   |
|---|---|
|sub_district   | String that contain sub_district name in Thai language  |
|district   | String that contain district name in Thai language  |
|province   | String that contain province name in Thai language  |

### Example request

<Tabs>
<TabItem value="python" label="Python">

```python
import requests

headers = {
  'X-API-KEY': 'XXXX',
  'Content-Type': 'application/json'
}
url = API_ENDPOINT

payload = {
  "sub_district": "คลองห้า",
  "district": "คลองหลวง",
  "province": "ปทุมธานี"
}
response = requests.request("POST", url, headers=headers, json=payload)
data = response.json()
```

</TabItem>
</Tabs>

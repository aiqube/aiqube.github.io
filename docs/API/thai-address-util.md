---
sidebar_position: 9
---

# Thai address utility

An Utility for Thai Address

## Thai Address parser

Thai Address parser from address string in Thai format.

### HTTP Request

`POST https://apigw.qubit-plus.com/aiqube/thai-address/v1/parser`

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

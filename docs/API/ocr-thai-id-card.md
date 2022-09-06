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
|x-api-key   | API key authentication  |


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


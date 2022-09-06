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
|x-api-key   | API key authentication  |


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

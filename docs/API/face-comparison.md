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
|x-api-key   | API key authentication  |

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

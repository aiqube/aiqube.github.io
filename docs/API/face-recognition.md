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
|encoded_img   | image contain face that encode with `base64` method  |

# Framework Module - Objects

## Character Object

| Field | Type | Description |
|---|---|---|
| identifier | string | The player's unique identifier (citizenid, identifier, etc.) |
| source | number | The player's source |
| name | table | `{ first, last, full }` |
| job | table | Primary job: `{ name, label, grade }` |
| jobs | table | All jobs held, keyed by name: `{ [jobName] = true }`. Single-job frameworks (QBCore, ESX) populate this with just the primary job, so job-gating checks work the same way across every framework. |
| metadata | table | Character metadata (key : value) |

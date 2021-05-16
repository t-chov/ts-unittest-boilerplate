# ts-unittest-boilerplate

Unittest boilerplate for TypeScript

## Folders

### `/bin` directory

It contains simple API server(implement in Go)

These binaries listens `:3800` port and returns `{"message":"PONG"}`

Prepare three binaries for

1. Windows(amd64)
2. Linux(amd64)
3. MacOS(amd64)

If you use another architecture or OS, you have to compile `etc/main.go` by yourself.

#### Usage

```
$ bin/pingpong_linux.amd64 &
$ curl 'http://localhost:3800/'
{"message":"PONG"}
```

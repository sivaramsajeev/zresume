### Multi-platform support

docker run --privileged --rm tonistiigi/binfmt --install all


```
{
  "supported": [
    "linux/arm64",
    "linux/amd64",
    "linux/riscv64",
    "linux/ppc64le",
    "linux/s390x",
    "linux/386",
    "linux/mips64le",
    "linux/mips64",
    "linux/arm/v7",
    "linux/arm/v6"
  ],
  "emulators": [
    "qemu-arm",
    "qemu-i386",
    "qemu-mips64",
    "qemu-mips64el",
    "qemu-ppc64le",
    "qemu-riscv64",
    "qemu-s390x",
    "qemu-x86_64"
  ]
}
```

```docker buildx create --use --name mybuilder```
```docker buildx build --platform linux/amd64 -t sivaramsajeev/zresume:amd64 --load .```


### Native build

```docker build . -t sivaramsajeev/zresume:armv8```


### Run it
```docker run -p 1818:80 sivaramsajeev/zresume```
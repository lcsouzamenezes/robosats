RoboSats v0.7.3 is now out! :rocket:

# Changes
## What's new
- Websockets now working on Android app: this enables instant chat and Nostr order book features! @koalasat
- First external coordinator now available: you can now see @lnp2pbot orders on RoboSats UI @koalasat
- Better display coordinator info on the Create Order form @koalasat
- Charts now depend on selected currency @femelo
- Fixed exchange summary aggregatons @koalasat

# Android

**[Click to download universal RoboSats APK for Android](https://github.com/RoboSats/robosats/releases/download/v0.7.3-alpha/robosats-v0.7.3.alpha-universal.apk)**
Smaller bundles for each CPU architecture available in the attachments.

### Verify the app using GPG:

1. [Download the ascii armored signature](https://github.com/Reckless-Satoshi/robosats/releases/download/v0.7.3-alpha/robosats-v0.7.3.alpha-universal.apk.asc)

2. Run this command on a directory that contains the apk file and and the ascii armored signature.
`gpg --verify robosats-v0.7.3.alpha-universal.apk.asc`

3. Verify the signer is actually Reckless-Satoshi (fingerprints match): [B4AB5F19113D4125DDF217739C4585B561315571](https://keys.openpgp.org/vks/v1/by-fingerprint/B4AB5F19113D4125DDF217739C4585B561315571)

Alternatively you can also verify with the release with the SHA256 checksum.

# Desktop

**Download the Desktop App zip file**
Find the zip file that suits with your operative system:

- [Windows](https://github.com/RoboSats/robosats/releases/download/v0.7.3-alpha/robosats-desktop-v0.7.3.alpha-win32-ia32.zip)
- [Mac](https://github.com/RoboSats/robosats/releases/download/v0.7.3-alpha/robosats-desktop-v0.7.3.alpha-mac-darwin-x64.zip)
- [Linux](https://github.com/RoboSats/robosats/releases/download/v0.7.3-alpha/robosats-desktop-v0.7.3.alpha-linux-x64.zip)


### Verify the app using GPG:

You can also verify with the release with the SHA256 checksum.

# Docker Images

[Coordinator Backend Image v0.7.3-alpha (Docker Hub)](https://hub.docker.com/r/recksato/robosats/tags?page=1&name=v0.7.3-alpha)


```bash
docker pull recksato/robosats:v0.7.3-alpha
```

[Client App Image v0.7.3-alpha (Docker Hub)](https://hub.docker.com/r/recksato/robosats-client/tags?page=1&name=v0.7.3-alpha)

```bash
docker pull recksato/robosats-client:v0.7.3-alpha
```

See [nodeapp/docker-compose.yml](https://github.com/Reckless-Satoshi/robosats/blob/2cd9d748706a8dcc0f03006b483acc6000e0572a/nodeapp/docker-compose.yml) for an example docker-compose usage of the `robosats-client` image.


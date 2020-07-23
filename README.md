# Flags Cookie

[![Financial-Times](https://circleci.com/gh/financial-times/flags-cookie.svg?style=svg)](https://app.circleci.com/pipelines/github/Financial-Times/flags-cookie)

A library for handling Flags Cookies.

This library does *not* currently handle parsing and setting cookies, and can be consumed both client-side
([using `cookies.get`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/get)) and server-side.


## Example

### Code Example

```javascript
import FlagsCookie from '@financial-times/flags-cookie'

const flags = new FlagsCookie('test:true')
console.log(flags.get('test')) // => 'true'
```

### Example Cookie

```
Cookie: Flags=test1:true,test2:variantA
```
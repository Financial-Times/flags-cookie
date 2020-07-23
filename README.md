# Flags Cookie

A library for handling Flags Cookies.

## Example

```javascript
import FlagsCookie from '@financial-times/flags-cookie'

const flags = new FlagsCookie('test:true')
console.log(flags.get('test')) // => 'true'
```
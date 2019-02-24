## To use the date utils

Import the function(s):

```
import { convertToDisplayFormat, convertFromDisplayFormat } from "./date-utils";
```

Converting from API format to Display format:

```
const dateStr = "2019-01-12T04:40:12.340Z"
const displayFormat = convertToDisplayFormat(dateStr); // gets "01/12/2019"
```

Converting from Display format to Api format:

```
const dateStr = "07/17/2018"
const apiFormat = convertFromDisplayFormat(dateStr); // gets "2018-07-17T00:00:00.000Z"
```

### Chnaging the formats:

If the display or API formats are to be changed, you can modify the constant formats defined in the `date-utils.js` file
Link to [date-utils.js](https://github.com/sambhav-gore/date-utils-demo/blob/master/src/date-utils.js)

### See on Codesandbox

https://codesandbox.io/s/1vm734m3o7

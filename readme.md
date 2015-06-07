# IKEA Stock Checker

To use:

```
var stockChecker = require('ikea-stock-checker');

stockChecker.forProduct('productId', 'storeId', function (err, result) {
  if (err) {
    console.warn(err);
  }

  console.log(result);
});
```

I haven't figured out a good way to find your IKEA store ID yet, so here's a list as of June 7 2015.

| Store Name             | Store ID |
|------------------------|----------|
| AZ, Tempe              | 209      |
| CA, Burbank            | 160      |
| CA, Carson             | 162      |
| CA, Costa Mesa         | 167      |
| CA, Covina             | 413      |
| CA, East Palo Alto     | 347      |
| CA, Emeryville         | 165      |
| CA, San Diego          | 166      |
| CA, West Sacramento    | 157      |
| CO, Centennial         | 064      |
| CT, New Haven          | 213      |
| FL, Miami              | 327      |
| FL, Orlando            | 145      |
| FL, Sunrise            | 207      |
| FL, Tampa              | 042      |
| GA, Atlanta            | 257      |
| IL, Bolingbrook        | 170      |
| IL, Schaumburg         | 210      |
| KS, Merriam            | 374      |
| MA, Stoughton          | 158      |
| MD, Baltimore          | 152      |
| MD, College Park       | 411      |
| MI, Canton             | 026      |
| MN, Twin Cities        | 212      |
| NC, Charlotte          | 067      |
| NJ, Elizabeth          | 154      |
| NJ, Paramus            | 409      |
| NY, Brooklyn           | 921      |
| NY, Long Island        | 156      |
| OH, West Chester       | 175      |
| OR, Portland           | 028      |
| PA, Conshohocken       | 211      |
| PA, Pittsburgh         | 153      |
| PA, South Philadelphia | 215      |
| TX, Dallas             | 183      |
| TX, Houston            | 379      |
| TX, Round Rock         | 027      |
| UT, Draper             | 103      |
| VA, Woodbridge         | 168      |
| WA, Seattle            | 250      |

## obj-js

Object utilities in javascript.

## Usage

```js
import objJs from "obj-js";
```

- clone

```js
const obj = {
  a: {
    b: "A"
  }
}

const clone = objJs.clone(obj);
clone.a.b = "B";

// obj
// { a: { b: "A" } }

// clone
// { a: { b: "B" } }
```

- query

```json
// orperators
{
  "and": ["$and"],
  "notAnd": ["$notAnd", "$nand"],
  "or": ["$or"],
  "notOr": ["$notOr", "$nor"],
  "not": ["$not"],
  "include": ["$include", "$in"],
  "exclude": ["$exclude", "$nin"],
  "greaterThan": ["$greaterThan", "$gt"],
  "greaterThanOrEqual": ["$greaterThanOrEqual", "$gte"],
  "lessThan": ["$lessThan", "$lt"],
  "lessThanOrEqual": ["$lessThanOrEqual", "$lte"],
  "equal": ["$equal", "$eq"],
  "notEqual": ["$notEqual", "$neq", "$ne"],
  "function": ["$function", "$func", "$fn"],
}
```

```js
const obj = {
  boolean: false,
  string: "String",
  number: 100,
  array: ["A","B","C"],
  object: {
    string: "D",
  },
}

const qry = {
  boolean: {
    $not: {
      $eq: true
    }
  },
  string: {
    $and: [
      {
        $in: ["String"]
      }, {
        $eq: "String"
      }, {
        $ne: "number"
      },
    ]
  },
  number: {
    $and: [
      {
        $gt: 99
      }, {
        $gte: 100
      }, {
        $lt: 101
      }, {
        $lte: 100
      }, {
        $eq: 100
      }, {
        $ne: 101
      }
    ]
  },
  array: {
    $and: [
      {
        $in: ["C", "B", "A"]
      }, {
        $eq: ["A", "B", "C"]
      }
    ]
  },
  object: {
    string: {
      $or: [
        {
          $eq: "C"
        }, {
          $eq: "D"
        }
      ]
    }
  }
}

const result = objJs.query(obj);
// true

```